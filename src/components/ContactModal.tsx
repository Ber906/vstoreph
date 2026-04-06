import { useEffect } from "react";

interface Jacket {
  id: number;
  name: string;
  colors: string[];
  image: string;
  accent: string;
  tag: string;
}

interface ContactModalProps {
  jacket: Jacket;
  onClose: () => void;
}

export default function ContactModal({ jacket, onClose }: ContactModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const message = encodeURIComponent(`Hi! I'm interested in the ${jacket.name}. Is it available?`);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">
        <div className="relative h-52 overflow-hidden">
          <img src={jacket.image} alt={jacket.name} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-white font-black text-xl leading-tight">{jacket.name}</h2>
            <div className="flex gap-1 mt-1">
              {jacket.colors.map((c) => (
                <span key={c} className="text-[10px] text-white/80 bg-white/20 px-2 py-0.5 rounded-full">{c}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5">
          <p className="text-gray-500 text-sm mb-1">Interested in this jacket?</p>
          <p className="text-gray-800 font-semibold mb-5 text-sm leading-relaxed">
            No price listed — just PM me on any platform below to ask for the price and place your order!
          </p>
          <div className="flex flex-col gap-3">
            <a href={`https://m.me/villareal.berwin?text=${message}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#1464d8] text-white font-semibold px-5 py-3 rounded-2xl transition-colors text-sm">
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <div>
                <p className="font-bold">Message on Facebook</p>
                <p className="text-xs opacity-80 font-normal">fb.com/villareal.berwin</p>
              </div>
            </a>
            <a href="https://instagram.com/villareal_berwin" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white font-semibold px-5 py-3 rounded-2xl transition-opacity text-sm">
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <div>
                <p className="font-bold">DM on Instagram</p>
                <p className="text-xs opacity-80 font-normal">@villareal_berwin</p>
              </div>
            </a>
            <a href={`https://t.me/villareal_berwin?text=${message}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#229ED9] hover:bg-[#1a8bbf] text-white font-semibold px-5 py-3 rounded-2xl transition-colors text-sm">
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <div>
                <p className="font-bold">Message on Telegram</p>
                <p className="text-xs opacity-80 font-normal">@villareal_berwin</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
