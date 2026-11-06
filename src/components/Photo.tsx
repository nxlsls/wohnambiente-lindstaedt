type Props = {
  name: string
  width: number
  sizes: string
  alt: string
  eager?: boolean
  className?: string
}

// Every photo exists as name.webp (full width), name-md.webp (75 %) and name-sm.webp (50 %),
// built by scripts/build-photos.mjs.
export function Photo({ name, width, sizes, alt, eager, className }: Props) {
  const src = (suffix: string) => `/photos/${name}${suffix}.webp`
  return (
    <img
      className={className}
      src={src('')}
      srcSet={`${src('-sm')} ${Math.round(width / 2)}w, ${src('-md')} ${Math.round((width * 3) / 4)}w, ${src('')} ${width}w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
    />
  )
}
