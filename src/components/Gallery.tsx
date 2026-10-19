import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react'
import Picture, { largest } from './Picture'
import { TikTokIcon } from './icons'

const IMAGES = [
  { slug: 'carotaj-stativ', alt: 'Carotare în beton cu stativ' },
  { slug: 'carotaj-santier', alt: 'Carotare în beton pe un șantier mare' },
  { slug: 'taiere-moloz', alt: 'Carotare în beton și strângerea molozului' },
  { slug: 'gauri-traversare', alt: 'Găuri de trecere pentru țevi și instalații' },
  { slug: 'gaura-centrala', alt: 'Gaură pentru centrală' },
  { slug: 'decupaj-perete', alt: 'Decupaj în perete de beton' },
  { slug: 'taiere-perete-90', alt: 'Carotare într-un perete de beton de 90 cm' },
  { slug: 'carotaj-500-stativ', alt: 'Carotare în beton, Ø 500 mm' },
  { slug: 'carotaj-500-carota', alt: 'Carotă de Ø 500 mm și moloz pe folie de protecție' },
  { slug: 'taiere-deschidere', alt: 'Deschidere tăiată în perete de beton' },
]

const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchX = useRef<number | null>(null)

  const show = (index: number) => setOpen((index + IMAGES.length) % IMAGES.length)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open !== null && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = 'hidden'
    }
    if (open === null && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') show(open + 1)
      if (e.key === 'ArrowLeft') show(open - 1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const onClose = () => {
    document.documentElement.style.overflow = ''
    setOpen(null)
  }

  const current = open !== null ? IMAGES[open] : null

  return (
    <section id="galerie-imagini" className="theme-dark scroll-mt-16 lg:scroll-mt-20 py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="heading-lg max-w-2xl">Galerie lucrări realizate</h2>
          <div id="galerie" className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="font-display font-semibold text-mute">Mai multe lucrări pe TikTok</p>
            <a
              href="https://www.tiktok.com/@carotare.taiere.beton"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline h-12 px-5 text-base self-start"
            >
              <TikTokIcon className="h-5 w-5" />
              <span>@carotare.taiere.beton</span>
            </a>
          </div>
        </div>

        <ul className="mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {IMAGES.map((image, index) => {
            const big = index < 2
            return (
              <li key={image.slug} className={big ? 'col-span-2 lg:row-span-2' : ''}>
                <button
                  type="button"
                  onClick={() => show(index)}
                  className="group relative block w-full h-full text-left"
                >
                  <div className={`relative overflow-hidden rounded bg-surface ${big ? 'aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[22rem]' : 'aspect-[4/3]'}`}>
                    <Picture
                      slug={image.slug}
                      alt={image.alt}
                      sizes={big ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
                      width={1200}
                      height={900}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/0 to-graphite/0 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                    <span aria-hidden="true" className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded bg-graphite/70 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Expand className="h-4 w-4" />
                    </span>
                    <p aria-hidden="true" className={`absolute inset-x-0 bottom-0 p-3 md:p-4 font-display font-semibold text-white leading-snug ${big ? 'text-base md:text-lg' : 'text-xs sm:text-sm'}`}>
                      {image.alt}
                    </p>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={onClose}
        onClick={e => { if (e.target === dialogRef.current) dialogRef.current?.close() }}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/90"
        aria-label="Galerie foto"
      >
        {current && open !== null && (
          <div
            className="theme-dark flex h-full w-full flex-col bg-transparent"
            onTouchStart={e => { touchX.current = e.touches[0].clientX }}
            onTouchEnd={e => {
              if (touchX.current === null) return
              const dx = e.changedTouches[0].clientX - touchX.current
              if (Math.abs(dx) > 50) show(open + (dx < 0 ? 1 : -1))
              touchX.current = null
            }}
          >
            <div className="flex items-center justify-between gap-4 p-3 md:p-5 text-white">
              <p className="font-display font-semibold text-sm md:text-base">
                {open + 1} / {IMAGES.length}
              </p>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="flex h-11 w-11 items-center justify-center rounded bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Închide galeria"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 md:px-20">
              <img
                key={current.slug}
                src={largest(current.slug)}
                alt={current.alt}
                className="max-h-full max-w-full rounded object-contain animate-fadeIn"
              />
              <button
                type="button"
                onClick={() => show(open - 1)}
                className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded bg-graphite/70 text-white hover:bg-accent hover:text-graphite transition-colors"
                aria-label="Poza anterioară"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={() => show(open + 1)}
                className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded bg-graphite/70 text-white hover:bg-accent hover:text-graphite transition-colors"
                aria-label="Poza următoare"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </div>
            <p className="p-4 md:p-6 text-center font-display font-semibold text-white">{current.alt}</p>
          </div>
        )}
      </dialog>
    </section>
  )
}

export default Gallery
