import {ArrowRight, BookCopy, PenTool, Printer} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-brand-50 pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/4">
        <div className="w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-60"></div>
      </div>
      <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4">
        <div className="w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 text-brand-700 font-medium text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
            </span>
            Top Rated Book Shop in Laikera (5.0 ★)
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Your Complete Source for <span className="text-brand-600">Books & Stationery</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            From NCERT school books to premium stationery, we are Jharsuguda's trusted wholesale and retail destination. Discover wide collections at reasonable prices.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-brand-500/30">
              Browse Categories
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-3.5 rounded-full font-semibold transition-all border border-gray-200">
              Visit Store
            </a>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {icon: BookCopy, title: "All School Books", desc: "NCERT & Top Publishers"},
            {icon: PenTool, title: "Premium Stationery", desc: "Doms, Apsara, Navneet"},
            {icon: Printer, title: "Digital & Xerox", desc: "Printing & Electronic Items"},
          ].map((feat, i) => (
            <div key={i} className="bg-white/80 backdrop-blur rounded-2xl p-6 flex flex-col items-center text-center border border-white shadow-sm">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-4">
                <feat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{feat.title}</h3>
              <p className="text-sm text-gray-500">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
