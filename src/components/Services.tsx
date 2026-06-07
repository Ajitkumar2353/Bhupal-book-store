import {Book, Calculator, PenTool, Medal, Printer, GraduationCap} from 'lucide-react';

const categories = [
  {
    icon: GraduationCap,
    title: "School & Academic Books",
    desc: "Complete range of NCERT books, Biographies, and specialized guides.",
    tags: ["MBD", "Kalyani", "Saurav", "Konark", "Natraj", "Polstar"],
    color: "green"
  },
  {
    icon: PenTool,
    title: "Premium Stationery",
    desc: "Authorized distributor of top stationery brands for office & school needs.",
    tags: ["Doms", "Navneet", "Apsara", "Oddy", "Aerotex", "Youva", "Cello"],
    color: "yellow"
  },
  {
    icon: Medal,
    title: "Sports Equipment",
    desc: "Quality sporting goods for schools, clubs, and personal fitness.",
    tags: ["HRS", "Cameo Sports", "Vixen"],
    color: "red"
  },
  {
    icon: Printer,
    title: "Printing & Services",
    desc: "Reliable binding, high-quality Xerox, and digital printing solutions.",
    tags: ["Xerox", "Color Print", "Lamination"],
    color: "green"
  },
  {
    icon: Calculator,
    title: "Electronics & Digital",
    desc: "Essential digital items, calculators, and cash register supplies.",
    tags: ["Calculators", "Digital Accessories"],
    color: "yellow"
  },
  {
    icon: Book,
    title: "Wholesale Supplies",
    desc: "Bulk supply of library books, notebooks, and shop-related items.",
    tags: ["Library Books", "Ajaymala", "Goel Notebook"],
    color: "red"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need, <span className="text-red-600">All in One Place</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We are proud distributors and retailers of the finest educational and office brands in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className={`group bg-gray-50 rounded-3xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl ${
              cat.color === 'green' ? 'hover:border-green-200 hover:shadow-green-100/50' : 
              cat.color === 'yellow' ? 'hover:border-yellow-200 hover:shadow-yellow-100/50' : 
              'hover:border-red-200 hover:shadow-red-100/50'
            }`}>
              <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 mb-6 group-hover:scale-110 transition-transform ${
                cat.color === 'green' ? 'text-green-600' : 
                cat.color === 'yellow' ? 'text-yellow-500' : 
                'text-red-600'
              }`}>
                <cat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">{cat.desc}</p>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag, j) => (
                  <span key={j} className="inline-flex items-center px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
