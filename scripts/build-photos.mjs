// Builds every photo in three widths (name.webp, name-md.webp = 75 %, name-sm.webp = 50 %) from photo-sources/,
// cuts the WA ribbon mark out of the dark logo for the navy frame, and writes favicon, touch icon and og-image.
//   node scripts/build-photos.mjs
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SRC = 'photo-sources'
const OUT = 'public/photos'
const NAVY = '#2A2B3C'

// width = largest file; the Photo component uses the same number for its srcset.
export const PHOTOS = [
  { name: 'jalousie-holz', width: 1960 },
  { name: 'flaechenvorhang', width: 1348 },
  { name: 'gardinen', width: 1800, file: 'gardinen.png' },
  { name: 'jalousie', width: 1400 },
  { name: 'schiebetuer', width: 1400 },
  // Phone photo in portrait: cut to 4:5 around the armchair.
  { name: 'sessel', width: 1200, extract: { left: 0, top: 848, width: 1744, height: 2180 } },
  { name: 'verena', width: 800, file: 'verena.webp' },
  ...['plissee', 'wabenplissee', 'rollo', 'doppelrollo', 'holzjalousie', 'lamellenvorhang', 'spannrahmen', 'drehrahmen', 'pendeltuer', 'lichtschacht'].map(
    (name) => ({ name, width: 900 }),
  ),
]

fs.mkdirSync(OUT, { recursive: true })
let total = 0
for (const p of PHOTOS) {
  const input = path.join(SRC, p.file ?? `${p.name}.jpg`)
  for (const [suffix, factor] of [['', 1], ['-md', 0.75], ['-sm', 0.5]]) {
    const out = path.join(OUT, `${p.name}${suffix}.webp`)
    let img = sharp(input).rotate()
    if (p.extract) img = img.extract(p.extract)
    await img
      .flatten({ background: '#ffffff' })
      .resize({ width: Math.round(p.width * factor), withoutEnlargement: true })
      .webp({ quality: 76, effort: 6 })
      .toFile(out)
    total += fs.statSync(out).size
  }
}
console.log(`photos: ${PHOTOS.length} × 3 sizes, ${(total / 1024).toFixed(0)} KB`)

// ---------- Logo mark: key the navy background out of the dark logo ----------

const logo = sharp(path.join(SRC, 'logo-dunkel.png')).removeAlpha()
const { data, info } = await logo.raw().toBuffer({ resolveWithObject: true })
const W = info.width
const H = info.height
const bg = [data[0], data[1], data[2]]
const alpha = new Float32Array(W * H)
for (let i = 0; i < W * H; i++) {
  const x = i % W
  const y = (i / W) | 0
  // The screenshot has a grey 1 px border; ignore the outermost pixels.
  if (x < 3 || y < 3 || x >= W - 3 || y >= H - 3) continue
  const d = Math.hypot(data[i * 3] - bg[0], data[i * 3 + 1] - bg[1], data[i * 3 + 2] - bg[2])
  alpha[i] = Math.min(1, Math.max(0, (d - 6) / 70))
}
// The mark is the first block of rows with ink from the top; the lettering below is left out.
const rowInk = (y) => {
  let s = 0
  for (let x = 0; x < W; x++) s += alpha[y * W + x]
  return s
}
let top = 0
while (top < H && rowInk(top) < 3) top++
let bottom = top
while (bottom < H && rowInk(bottom) >= 3) bottom++
let left = W
let right = 0
for (let y = top; y < bottom; y++)
  for (let x = 0; x < W; x++)
    if (alpha[y * W + x] > 0.05) {
      left = Math.min(left, x)
      right = Math.max(right, x)
    }
const cw = right - left + 1
const ch = bottom - top
const rgba = Buffer.alloc(cw * ch * 4)
for (let y = 0; y < ch; y++)
  for (let x = 0; x < cw; x++) {
    const si = (top + y) * W + left + x
    const a = alpha[si]
    const o = (y * cw + x) * 4
    for (let c = 0; c < 3; c++) {
      const v = a > 0 ? (data[si * 3 + c] - bg[c] * (1 - a)) / a : 0
      rgba[o + c] = Math.max(0, Math.min(255, Math.round(v)))
    }
    rgba[o + 3] = Math.round(a * 255)
  }
const mark = sharp(rgba, { raw: { width: cw, height: ch, channels: 4 } })
fs.mkdirSync('public/brand', { recursive: true })
await mark.clone().resize({ height: 120 }).png({ compressionLevel: 9 }).toFile('public/brand/mark.png')
console.log(`mark: ${cw}×${ch} px cut from the logo (rows ${top}–${bottom})`)

// Favicon and touch icon: the mark in a navy circle, like on the business card.
const markPng = await mark.clone().png().toBuffer()
async function icon(size, round, file) {
  const inner = await sharp(markPng).resize({ width: Math.round(size * (round ? 0.66 : 0.72)) }).toBuffer()
  const base = round
    ? Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${NAVY}"/></svg>`)
    : { create: { width: size, height: size, channels: 4, background: NAVY } }
  await sharp(round ? base : base).composite([{ input: inner, gravity: 'center' }]).png({ compressionLevel: 9 }).toFile(path.join('public', file))
}
await icon(192, true, 'favicon.png')
await icon(180, false, 'apple-touch-icon.png')

await sharp(path.join(SRC, 'jalousie-holz.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82, mozjpeg: true }).toFile('public/og-image.jpg')
console.log('icons + og-image written')
