import { useState } from "react";
import ContactModal from "../components/ContactModal";

const jackets = [
  {
    id: 1,
    name: "Navy & Grey Windbreaker",
    colors: ["Navy", "Grey"],
    image: "/navy-grey.jpg",
    accent: "#1e3a5f",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Cream & Black Windbreaker",
    colors: ["Cream", "Black"],
    image: "/black-cream.jpg",
    accent: "#1a1a1a",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Olive & Cream Windbreaker",
    colors: ["Olive", "Cream"],
    image: "/olive-cream.jpg",
    accent: "#3b4a2f",
    tag: "New",
  },
  {
    id: 4,
    name: "Navy & Red Windbreaker",
    colors: ["Navy", "Red"],
    image: "/navy-red.jpg",
    accent: "#c0392b",
    tag: "Limited",
  },
];

export default function Home() {
  const [selected, setSelected] = useState<(typeof jackets)[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-gray-900">BW</span>
            <span className="text-2xl font-light text-gray-500">Outfitters</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#collection" className="hover:text-gray-900 transition-colors">Collection</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-12 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">Exclusive Collection</p>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 leading-tight mb-4">
          Nike Windbreaker<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500">Jackets</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-md mx-auto mb-8">
          Premium quality windbreaker jackets. Choose your color, PM to order — limited stocks only.
        </p>
        <a
          href="#collection"
          className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-700 transition-colors text-sm"
        >
          View Collection
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* Collection */}
      <section id="collection" className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jackets.map((jacket) => (
            <div
              key={jacket.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelected(jacket)}
            >
              <div className="relative">
                <img
                  src={jacket.image}
                  alt={jacket.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className="absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider"
                  style={{ backgroundColor: jacket.accent }}
                >
                  {jacket.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">{jacket.name}</h3>
                <div className="flex items-center gap-1 mb-4">
                  {jacket.colors.map((c) => (
                    <span key={c} className="text-[11px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
                <button
                  className="w-full text-sm font-semibold text-white py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
                  style={{ backgroundColor: jacket.accent }}
                >
                  Order via PM
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">How to Order</p>
          <h2 className="text-3xl font-black mb-4">Interested? Send me a PM!</h2>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            No checkout needed. Just pick your favorite jacket above and reach out to me directly on any of these platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://www.facebook.com/villareal.berwin" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#1464d8] text-white font-semibold px-6 py-3 rounded-full transition-colors w-full sm:w-auto justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a href="https://instagram.com/villareal_berwin" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-opacity w-full sm:w-auto justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
            <a href="https://t.me/villareal_berwin" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#229ED9] hover:bg-[#1a8bbf] text-white font-semibold px-6 py-3 rounded-full transition-colors w-full sm:w-auto justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-6 text-center text-xs px-4">
        <p>© 2025 BW Outfitters · All Rights Reserved</p>
        <p className="mt-1">Authentic Nike Windbreaker Jackets · PM to Order</p>
      </footer>

      {selected && (
        <ContactModal jacket={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
