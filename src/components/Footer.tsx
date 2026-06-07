import {BookOpen, Clock, MapPin, Phone} from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-500 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">Bhupal Book Store</h2>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Your one-stop destination for wholesale and retail books, premium stationery, sports items, and digital services in Jharsuguda district.
            </p>
            <div className="inline-flex items-center gap-2 bg-gray-800 rounded-lg px-4 py-2 border border-gray-700">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
              </div>
              <span className="text-sm font-medium text-white">5.0 on Google</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>Near Maa Samelaswari Mandi,<br />Mainroad, Laikera,<br />Jharsuguda, Odisha 768215</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <span>Visit store for details</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">Business Hours</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1 text-gray-400">
                <span className="flex items-center gap-2 text-white font-medium">
                  <Clock className="w-4 h-4 text-brand-500" />
                  Monday - Saturday
                </span>
                <span className="pl-6">8:30 AM - 2:00 PM</span>
                <span className="pl-6 text-xs text-gray-500">* Tuesday till 2:30 PM</span>
              </li>
              <li className="flex flex-col gap-1 text-gray-400">
                <span className="flex items-center gap-2 text-white font-medium">
                  <Clock className="w-4 h-4 text-brand-500" />
                  Sunday
                </span>
                <span className="pl-6">9:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="border-t border-gray-800 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Bhupal Book Store. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
  );
}
