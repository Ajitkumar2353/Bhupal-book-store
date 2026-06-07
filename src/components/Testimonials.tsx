import {Star} from 'lucide-react';

const reviews = [
  {
    name: "Customer Review",
    date: "Google Reviews",
    text: "It's a Book shop with all variety of Books with an honourable price.",
    rating: 5
  },
  {
    name: "Customer Review",
    date: "Google Reviews",
    text: "Best sellers in our area with such a very good customer service.",
    rating: 5
  },
  {
    name: "Customer Review",
    date: "Google Reviews",
    text: "Wide collection and reasonable pricing. Highly recommended!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
              Loved by our Customers
            </h2>
            <p className="text-gray-600">
              Trusted by students, schools, and offices in Laikera and Jharsuguda.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-4xl font-bold text-gray-900">5.0</div>
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <div className="text-sm text-gray-500 font-medium">Based on 171+ Reviews</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
