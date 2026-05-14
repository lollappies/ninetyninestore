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
        style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.18))" }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200 group-hover:scale-110 group-active:scale-95"
        >
          {/* Bubble body — outline only */}
          <rect
            x="3" y="3"
            width="56" height="44"
            rx="10"
            fill="white"
            stroke="#111111"
            strokeWidth="3.5"
          />

          {/* Ekor bubble pojok kiri bawah — outline only */}
          <path
            d="M10 47 L5 61 L24 47 Z"
            fill="white"
            stroke="#111111"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Teks FAQ — hitam, benar-benar di tengah bubble body (y = 3 + 44/2 = 25) */}
          <text
            x="31"
            y="25"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#111111"
            fontSize="16"
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