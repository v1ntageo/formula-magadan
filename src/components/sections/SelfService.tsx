import { siteData } from '@/lib/data'

export function SelfService() {
  return (
    <section className="py-6 sm:py-12 lg:py-20 bg-gradient-to-b from-black/30 to-black/50 relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-3xl p-10 text-center hover:border-red-500/30 transition-all duration-500 shadow-2xl shadow-red-500/5">
          <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-red-500/20">
            <svg className="w-8 h-8 text-red-400" viewBox="0 0 512 512" fill="currentColor">
              <path d="M391.703,195.531l-0.203-0.344l-0.266-0.375L256,0L120.516,195.156l-0.234,0.375c-27.172,42.719-45.609,92.109-45.703,141.75c-0.016,21.328,3.5,42.688,11.438,63.063c7.906,20.375,20.281,39.688,37.313,56.719h0.016C159.906,493.641,208.063,512.031,256,512c47.938,0.031,96.078-18.359,132.656-54.938l-15.859,15.859l15.859-15.859c17.047-17.031,29.422-36.344,37.328-56.703c7.938-20.391,11.438-41.75,11.438-63.063C437.328,287.641,418.891,238.25,391.703,195.531z M384.141,384.078c-5.719,14.672-14.453,28.438-27.219,41.234l15.875-15.875l-15.875,15.875C329,453.219,292.609,467.078,256,467.109c-36.609-0.031-73-13.891-100.922-41.797l0,0c-12.781-12.797-21.5-26.563-27.234-41.25c-5.703-14.672-8.375-30.344-8.375-46.781c-0.109-38.078,14.859-80.328,38.531-117.375l98-141.188l98.031,141.219c23.641,37.047,38.594,79.281,38.5,117.359C392.531,353.734,389.859,369.406,384.141,384.078z" />
              <path d="M205.328,237.781c-23.422,26.031-60.719,94.547-37.297,142.25c26.156,53.281,61.75,21.609,45.109-12.125C181.047,302.844,205.328,237.781,205.328,237.781z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {siteData.selfService.title}
          </h2>
          <p className="text-gray-300 mb-4 max-w-xl mx-auto leading-relaxed">
            {siteData.selfService.description}
          </p>
          <div className="inline-block bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2">
            <p className="text-red-400 font-semibold text-lg">
              {siteData.selfService.schedule}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}