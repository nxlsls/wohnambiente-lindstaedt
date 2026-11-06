// Builds the self-hosted street map for the contact section from OpenStreetMap data
// (adapted from the jano-hairdesign build script).
//   node scripts/build-map.mjs            -> uses map-sources/osm.json (fetches it if missing)
//   node scripts/build-map.mjs --refresh  -> fetches fresh data from the Overpass API first
// Output: public/map/stadtplan.svg (geometry only, in the site colours) and src/map.json
// (pin and label positions in % of the square map). Map data © OpenStreetMap contributors, ODbL.
import fs from 'node:fs'

// Hoeschstraße 2, 52372 Kreuzau-Untermaubach (OpenStreetMap / Nominatim)
const SHOP = { lat: 50.7298483, lon: 6.4595241 }
const HALF_M = 650 // half the edge length of the square map in metres
const SIZE = 1000 // SVG viewBox edge

const M_PER_DEG_LAT = 111_320
const M_PER_DEG_LON = 111_320 * Math.cos((SHOP.lat * Math.PI) / 180)
const dLat = HALF_M / M_PER_DEG_LAT
const dLon = HALF_M / M_PER_DEG_LON
const BBOX = [SHOP.lat - dLat * 1.25, SHOP.lon - dLon * 1.25, SHOP.lat + dLat * 1.25, SHOP.lon + dLon * 1.25]

const COLORS = {
  land: '#EEF2EE',
  block: '#D3DDD7',
  green: '#DFE8DF',
  forest: '#D2E0D3',
  water: '#8AB4A8', // sage from the logo: the Rur
  street: '#FFFFFF',
  streetEdge: '#C3CFC8',
}

const SRC = 'map-sources/osm.json'
const MIRRORS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.private.coffee/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
]

async function fetchOsm() {
  const b = BBOX.map((v) => v.toFixed(5)).join(',')
  const query = `[out:json][timeout:120];(
    way[highway](${b});
    way[building](${b});
    way[natural=water](${b});
    relation[natural=water](${b});
    way[waterway=riverbank](${b});
    way[waterway=river](${b});
    way[leisure=park](${b});
    way[landuse=grass](${b});
    way[landuse=meadow](${b});
    way[landuse=forest](${b});
    way[natural=wood](${b});
  );out geom;`
  let wait = 4000
  for (let attempt = 0; attempt < 8; attempt++) {
    const url = MIRRORS[attempt % MIRRORS.length]
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'User-Agent': 'wohnambiente-entwurf-site-build/1.0', 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'data=' + encodeURIComponent(query),
      })
      const text = await res.text()
      if (res.ok && text.trim().startsWith('{')) {
        fs.mkdirSync('map-sources', { recursive: true })
        fs.writeFileSync(SRC, text)
        console.log(`OSM data from ${url}: ${(text.length / 1024).toFixed(0)} KB`)
        return
      }
      console.log(`${url}: HTTP ${res.status}, retrying in ${wait / 1000}s`)
    } catch (e) {
      console.log(`${url}: ${e.message}, retrying in ${wait / 1000}s`)
    }
    await new Promise((r) => setTimeout(r, wait))
    wait = Math.min(wait * 2, 30000)
  }
  throw new Error('Overpass API not reachable')
}

if (process.argv.includes('--refresh') || !fs.existsSync(SRC)) await fetchOsm()
const osm = JSON.parse(fs.readFileSync(SRC, 'utf8'))

// Projection: the shop sits exactly in the centre of the square.
const px = (p) => [
  SIZE / 2 + ((p.lon - SHOP.lon) * M_PER_DEG_LON * SIZE) / (2 * HALF_M),
  SIZE / 2 - ((p.lat - SHOP.lat) * M_PER_DEG_LAT * SIZE) / (2 * HALF_M),
]

// Douglas–Peucker simplification in SVG units.
function simplify(pts, tol = 0.8) {
  if (pts.length < 3) return pts
  const [ax, ay] = pts[0]
  const [bx, by] = pts[pts.length - 1]
  const len = Math.hypot(bx - ax, by - ay) || 1
  let max = 0
  let idx = 0
  for (let i = 1; i < pts.length - 1; i++) {
    const [x, y] = pts[i]
    const d = Math.abs((bx - ax) * (ay - y) - (ax - x) * (by - ay)) / len
    if (d > max) {
      max = d
      idx = i
    }
  }
  if (max <= tol) return [pts[0], pts[pts.length - 1]]
  return simplify(pts.slice(0, idx + 1), tol).slice(0, -1).concat(simplify(pts.slice(idx), tol))
}

// Sutherland–Hodgman clipping of a polygon to the (slightly enlarged) map square.
const LO = -20
const HI = SIZE + 20
function clipPolygon(pts) {
  const edges = [
    [(p) => p[0] >= LO, (a, b) => [LO, a[1] + ((b[1] - a[1]) * (LO - a[0])) / (b[0] - a[0])]],
    [(p) => p[0] <= HI, (a, b) => [HI, a[1] + ((b[1] - a[1]) * (HI - a[0])) / (b[0] - a[0])]],
    [(p) => p[1] >= LO, (a, b) => [a[0] + ((b[0] - a[0]) * (LO - a[1])) / (b[1] - a[1]), LO]],
    [(p) => p[1] <= HI, (a, b) => [a[0] + ((b[0] - a[0]) * (HI - a[1])) / (b[1] - a[1]), HI]],
  ]
  let out = pts
  for (const [inside, cut] of edges) {
    const input = out
    out = []
    for (let i = 0; i < input.length; i++) {
      const cur = input[i]
      const prev = input[(i + input.length - 1) % input.length]
      if (inside(cur)) {
        if (!inside(prev)) out.push(cut(prev, cur))
        out.push(cur)
      } else if (inside(prev)) out.push(cut(prev, cur))
    }
    if (!out.length) break
  }
  return out
}

// Splits a polyline into the runs that touch the map square.
function clipLine(pts) {
  const inside = ([x, y]) => x >= LO && x <= HI && y >= LO && y <= HI
  const runs = []
  let run = []
  for (let i = 0; i < pts.length; i++) {
    const keep = inside(pts[i]) || (i > 0 && inside(pts[i - 1])) || (i < pts.length - 1 && inside(pts[i + 1]))
    if (keep) run.push(pts[i])
    else if (run.length) {
      runs.push(run)
      run = []
    }
  }
  if (run.length > 1) runs.push(run)
  return runs.filter((r) => r.length > 1)
}

const fmt = (xy) => xy.map(([x, y]) => `${Math.round(x)} ${Math.round(y)}`).join('L')
// A closed ring has identical end points, so it is simplified in two halves split at its farthest point.
function simplifyRing(pts) {
  let k = 0
  let max = -1
  for (let i = 1; i < pts.length; i++) {
    const d = Math.hypot(pts[i][0] - pts[0][0], pts[i][1] - pts[0][1])
    if (d > max) {
      max = d
      k = i
    }
  }
  return simplify(pts.slice(0, k + 1)).slice(0, -1).concat(simplify(pts.slice(k)))
}
const polygonPath = (geo) => {
  const xy = clipPolygon(simplifyRing(geo.map(px)))
  return xy.length > 2 ? 'M' + fmt(xy) + 'Z' : ''
}
const linePath = (geo) =>
  clipLine(simplify(geo.map(px)))
    .map((r) => 'M' + fmt(r))
    .join('')

// Joins open way segments of a multipolygon into closed rings.
function rings(ways) {
  const open = ways.map((w) => w.slice())
  const out = []
  const key = (p) => `${p.lat.toFixed(7)},${p.lon.toFixed(7)}`
  while (open.length) {
    let ring = open.shift()
    let grown = true
    while (key(ring[0]) !== key(ring[ring.length - 1]) && grown) {
      grown = false
      for (let i = 0; i < open.length; i++) {
        const w = open[i]
        const end = key(ring[ring.length - 1])
        if (key(w[0]) === end) ring = ring.concat(w.slice(1))
        else if (key(w[w.length - 1]) === end) ring = ring.concat(w.slice(0, -1).reverse())
        else continue
        open.splice(i, 1)
        grown = true
        break
      }
    }
    out.push(ring)
  }
  return out
}

const layers = { forest: [], green: [], block: [], water: [], river: [], streetEdge: [], street: [] }
// Stroke widths in SVG units (1 unit ≈ 1.3 m). Footways, tracks and service lanes are left out on purpose.
const STREET_W = {
  primary: 15, secondary: 14, tertiary: 12, residential: 9, unclassified: 9, living_street: 8,
  primary_link: 9, secondary_link: 9, tertiary_link: 9,
}
const above = (t) => t.tunnel !== 'yes' && !String(t.layer || '').startsWith('-')
const push = (layer, d, extra = '') => d && layers[layer].push(`<path d="${d}"${extra}/>`)

for (const el of osm.elements) {
  const t = el.tags || {}
  if (el.type === 'relation' && t.natural === 'water') {
    const outer = el.members.filter((m) => m.type === 'way' && m.geometry && m.role !== 'inner').map((m) => m.geometry)
    const inner = el.members.filter((m) => m.type === 'way' && m.geometry && m.role === 'inner').map((m) => m.geometry)
    const d = [...rings(outer), ...rings(inner)].map(polygonPath).join('')
    push('water', d, ' fill-rule="evenodd"')
    continue
  }
  if (el.type !== 'way' || !el.geometry) continue
  const g = el.geometry
  const closed = g.length > 3 && g[0].lat === g[g.length - 1].lat && g[0].lon === g[g.length - 1].lon
  if ((t.natural === 'water' || t.waterway === 'riverbank') && closed) push('water', polygonPath(g))
  else if (t.waterway === 'river') push('river', linePath(g))
  else if ((t.landuse === 'forest' || t.natural === 'wood') && closed) push('forest', polygonPath(g))
  else if ((t.leisure === 'park' || t.landuse === 'grass' || t.landuse === 'meadow') && closed) push('green', polygonPath(g))
  else if (t.building && closed && t.building !== 'roof') push('block', polygonPath(g))
  else if (t.highway && STREET_W[t.highway] && above(t)) {
    const d = linePath(g)
    const w = STREET_W[t.highway]
    push('streetEdge', d, ` stroke-width="${w + 3}"`)
    push('street', d, ` stroke-width="${w}"`)
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}">
<rect width="${SIZE}" height="${SIZE}" fill="${COLORS.land}"/>
<g fill="${COLORS.forest}">${layers.forest.join('')}</g>
<g fill="${COLORS.green}">${layers.green.join('')}</g>
<g fill="${COLORS.water}" stroke="${COLORS.water}" stroke-width="2">${layers.water.join('')}</g>
<g fill="none" stroke="${COLORS.water}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round">${layers.river.join('')}</g>
<g fill="${COLORS.block}">${layers.block.join('')}</g>
<g fill="none" stroke="${COLORS.streetEdge}" stroke-linecap="round" stroke-linejoin="round">${layers.streetEdge.join('')}</g>
<g fill="none" stroke="${COLORS.street}" stroke-linecap="round" stroke-linejoin="round">${layers.street.join('')}</g>
</svg>`

fs.mkdirSync('public/map', { recursive: true })
fs.writeFileSync('public/map/stadtplan.svg', svg)

// Labels: the river and the longest named roads, placed on their longest visible segment,
// rotated along it, away from the pin (which carries the address) and from each other.
const pct = ([x, y]) => [+((x / SIZE) * 100).toFixed(2), +((y / SIZE) * 100).toFixed(2)]
const placed = []
const free = (x, y) => Math.hypot(x - SIZE / 2, y - SIZE / 2) > 150 && placed.every((p) => Math.hypot(p.x - x, p.y - y) > 170)
function lineLabel(ways, text, kind) {
  let best = null
  for (const w of ways) {
    const pts = w.geometry.map(px)
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, y1] = pts[i]
      const [x2, y2] = pts[i + 1]
      const len = Math.hypot(x2 - x1, y2 - y1)
      const x = (x1 + x2) / 2
      const y = (y1 + y2) / 2
      if (x < 110 || x > SIZE - 110 || y < 70 || y > SIZE - 70 || !free(x, y)) continue
      if (!best || len > best.len) best = { len, x, y, a: (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI }
    }
  }
  if (!best) return null
  placed.push(best)
  let angle = best.a
  if (angle > 90) angle -= 180
  if (angle < -90) angle += 180
  const [x, y] = pct([best.x, best.y])
  return { text, x, y, angle: +angle.toFixed(1), kind }
}

const ways = osm.elements.filter((e) => e.type === 'way' && e.geometry && e.tags?.name)
const byName = (name, pred) => ways.filter((w) => w.tags.name === name && pred(w.tags))
const isStreet = (t) => t.highway && STREET_W[t.highway]
const lengthInside = (w) => {
  const pts = w.geometry.map(px).filter(([x, y]) => x > 0 && x < SIZE && y > 0 && y < SIZE)
  let s = 0
  for (let i = 0; i < pts.length - 1; i++) s += Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1])
  return s
}
const streetTotals = new Map()
for (const w of ways.filter((w) => isStreet(w.tags))) streetTotals.set(w.tags.name, (streetTotals.get(w.tags.name) || 0) + lengthInside(w))
const longest = [...streetTotals].sort((a, b) => b[1] - a[1]).map(([n]) => n)

const labels = []
const river = ways.find((w) => w.tags.waterway === 'river')
if (river) {
  const l = lineLabel(byName(river.tags.name, (t) => t.waterway === 'river'), river.tags.name, 'river')
  if (l) labels.push(l)
}
for (const name of longest) {
  if (labels.filter((l) => l.kind === 'street').length >= 3) break
  const l = lineLabel(byName(name, isStreet), name, 'street')
  if (l) labels.push(l)
}

fs.writeFileSync('src/map.json', JSON.stringify({ shop: SHOP, labels }, null, 2) + '\n')
console.log(`map: ${(svg.length / 1024).toFixed(0)} KB svg, labels: ${labels.map((l) => l.text).join(', ')}`)
for (const k of Object.keys(layers)) console.log(`  ${k}: ${layers[k].length}`)
