import { ExternalLink } from 'lucide-react'

const TikTokGallery = () => {
  return (
    <section id="galerie" className="relative py-20 bg-dark overflow-hidden scroll-mt-8">
      {/* Fade from black at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none"></div>
      
      <div className="container-custom text-center relative z-10">
        <h2 className="section-title mb-8">Vezi lucrările noastre pe TikTok</h2>
        <a 
          href="https://www.tiktok.com/@solutii.beton.sv" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-primary text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:scale-105"
        >
          <ExternalLink className="h-6 w-6" />
          <span>@solutii.beton.sv</span>
        </a>
      </div>
      
      {/* Fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-dark pointer-events-none"></div>
    </section>
  )
}

export default TikTokGallery
