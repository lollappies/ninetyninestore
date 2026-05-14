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
        style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.25))" }}
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200 group-hover:scale-110 group-active:scale-95"
        >
          {/* Bubble body */}
          <rect x="2" y="2" width="56" height="44" rx="10" fill="#111111" />

          {/* Ekor bubble pojok kiri bawah */}
          <polygon points="8,46 4,60 22,46" fill="#111111" />

          {/* Teks FAQ di tengah bubble */}
          <text
            x="30"
            y="30"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="17"
            fontWeight="900"
            fontFamily="'Arial Black', Arial, sans-serif"
            letterSpacing="2.5"
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