// src/components/FaqPanel.tsx
import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { FaqJsonLd } from "./JsonLd";

interface FaqPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqs = [
  {
    question: "Apakah Ninetynine melayani pengiriman ke luar Madiun?",
    answer:
      "Ya, Ninetynine melayani pengiriman ke seluruh Indonesia termasuk Ponorogo, Jombang, Kediri, Nganjuk, Blitar, Tulungagung, dan Sidoarjo menggunakan berbagai jasa ekspedisi terpercaya.",
  },
  {
    question: "Apa saja produk yang dijual di Ninetynine?",
    answer:
      "Ninetynine menjual fashion wanita lengkap meliputi dress, blouse, tunic, outer, sweater, pants, dan skirt dengan harga mulai IDR 69.000 hingga IDR 325.000.",
  },
  {
    question: "Di mana lokasi toko Ninetynine?",
    answer:
      "Ninetynine hadir di 8 kota Jawa Timur: Madiun (Jl. Cokroaminoto No.35), Ponorogo, Jombang, Kediri, Nganjuk, Blitar, Tulungagung, dan Sidoarjo. Pembelian juga bisa dilakukan online melalui website.",
  },
  {
    question: "Berapa harga produk di Ninetynine?",
    answer:
      "Harga produk Ninetynine sangat terjangkau mulai dari IDR 69.000 hingga IDR 325.000 untuk berbagai pilihan fashion wanita berkualitas.",
  },
  {
    question: "Apakah Ninetynine toko fashion wanita terpercaya di Madiun?",
    answer:
      "Ya, Ninetynine adalah toko fashion wanita terpercaya yang berbasis di Madiun, Jawa Timur, dengan koleksi lengkap, harga terjangkau, dan telah melayani pelanggan dari seluruh Indonesia.",
  },
  {
    question: "Metode pembayaran apa yang tersedia?",
    answer:
      "Ninetynine menerima pembayaran melalui Cash dan Transfer Bank untuk kemudahan berbelanja kamu.",
  },
  {
    question: "Jam operasional toko Ninetynine?",
    answer:
      "Toko fisik Ninetynine buka setiap hari Senin – Minggu pukul 09.00 – 21.00 WIB. Untuk pembelian online tersedia 24 jam melalui website.",
  },
];

export function FaqPanel({ isOpen, onClose }: FaqPanelProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Tutup scroll body saat panel terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setOpenIndex(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Tutup saat tekan Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* JSON-LD SEO tetap dimuat */}
      <FaqJsonLd />

      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel — slide dari bawah */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Pertanyaan Umum (FAQ)"
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-y-0" : "translate-y-full"}
          max-h-[80vh] flex flex-col`}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            {/* Mini FAQ icon */}
            <svg width="28" height="28" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="14" width="72" height="50" rx="10" fill="#111111" />
              <polygon points="22,64 14,80 38,64" fill="#111111" />
              <rect x="36" y="32" width="62" height="44" rx="10" fill="none" stroke="#111111" strokeWidth="5" />
              <polygon points="68,76 80,76 70,90" fill="none" stroke="#111111" strokeWidth="4" strokeLinejoin="round" />
              <text x="44" y="48" textAnchor="middle" fill="white" fontSize="20" fontWeight="900" fontFamily="'Arial Black', Arial, sans-serif" letterSpacing="2">FAQ</text>
            </svg>
            <h2 className="text-base font-bold text-gray-900 tracking-wide">Pertanyaan Umum</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup FAQ"
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* FAQ list — scrollable */}
        <div className="overflow-y-auto flex-1 px-4 py-3 divide-y divide-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="py-1">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-start justify-between gap-3 py-3 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-black transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 mt-0.5 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180 text-black" : ""
                  }`}
                />
              </button>

              {/* Accordion answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-3 text-sm text-gray-600 leading-relaxed pr-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 rounded-b-none">
          <p className="text-xs text-center text-gray-400">
            Masih ada pertanyaan?{" "}
            <a
              href="https://wa.me/6281335579050"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold underline underline-offset-2"
            >
              Chat via WhatsApp
            </a>
          </p>
        </div>
      </div>
    </>
  );
}