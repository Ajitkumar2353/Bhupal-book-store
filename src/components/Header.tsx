import {BookOpen, MapPin, Phone} from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-50 rounded-xl">
              <BookOpen className="w-8 h-8 text-brand-600" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-gray-900 leading-tight">
                Bhupal <span className="text-brand-600">Book Store</span>
              </h1>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Wholesaler & Retailer
              </p>
            </div>
          </div>

          {/* Contact Info (Visible on Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="p-1.5 bg-gray-50 rounded-lg">
                <MapPin className="w-4 h-4 text-gray-400" />
              </div>
              <span className="text-sm font-medium">Laikera, Odisha</span>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
