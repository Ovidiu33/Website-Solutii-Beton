const files = import.meta.glob('../assets/img/*.{avif,webp}', { eager: true, import: 'default' }) as Record<string, string>

const variants = (slug: string, ext: 'avif' | 'webp') =>
  Object.entries(files)
    .map(([path, url]) => {
      const m = path.match(new RegExp(`/${slug}-(\\d+)\\.${ext}$`))
      return m ? { width: Number(m[1]), url } : null
    })
    .filter((v): v is { width: number; url: string } => v !== null)
    .sort((a, b) => a.width - b.width)

export const srcSet = (slug: string, ext: 'avif' | 'webp') =>
  variants(slug, ext).map(v => `${v.url} ${v.width}w`).join(', ')

export const largest = (slug: string, ext: 'avif' | 'webp' = 'webp') => {
  const all = variants(slug, ext)
  return all.length ? all[all.length - 1].url : ''
}

type Props = {
  slug: string
  alt: string
  sizes: string
  width: number
  height: number
  className?: string
  priority?: boolean
  mediaSlug?: { media: string; slug: string }
}

const Picture = ({ slug, alt, sizes, width, height, className, priority = false, mediaSlug }: Props) => (
  <picture>
    {mediaSlug && <source media={mediaSlug.media} type="image/avif" srcSet={srcSet(mediaSlug.slug, 'avif')} sizes={sizes} />}
    {mediaSlug && <source media={mediaSlug.media} type="image/webp" srcSet={srcSet(mediaSlug.slug, 'webp')} sizes={sizes} />}
    <source type="image/avif" srcSet={srcSet(slug, 'avif')} sizes={sizes} />
    <img
      src={largest(slug)}
      srcSet={srcSet(slug, 'webp')}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      {...(priority ? { fetchpriority: 'high' } : {})}
      className={className}
    />
  </picture>
)

export default Picture
