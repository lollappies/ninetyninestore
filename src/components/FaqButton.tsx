// src/components/FaqButton.tsx
import { useState } from "react";
import { FaqPanel } from "./FaqPanel";

export function FaqButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating FAQ Button — fixed pojok kanan bawah */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="FAQ - Pertanyaan Umum"
        className="fixed bottom-6 right-6 z-50 group"
        style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.30))" }}
      >
        {/* SVG icon dua chat bubble — transparan, tanpa background putih */}
        <svg
          width="62"
          height="62"
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200 group-hover:scale-110 group-active:scale-95"
        >
          {/* Bubble belakang kanan (outline) */}
          <rect
            x="36" y="32" width="62" height="44" rx="10"
            fill="none" stroke="#111111" strokeWidth="5"
          />
          <polygon
            points="68,76 80,76 70,90"
            fill="none" stroke="#111111" strokeWidth="4" strokeLinejoin="round"
          />

          {/* Bubble depan kiri (solid) */}
          <rect x="8" y="14" width="72" height="50" rx="10" fill="#111111" />
          <polygon points="22,64 14,80 38,64" fill="#111111" />

          {/* Teks FAQ */}
          <text
            x="44" y="48"
            textAnchor="middle"
            fill="white"
            fontSize="20"
            fontWeight="900"
            fontFamily="'Arial Black', Arial, sans-serif"
            letterSpacing="2"
          >
            FAQ
          </text>
        </svg>
      </button>

      {/* Panel FAQ */}
      <FaqPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}