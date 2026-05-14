// src/components/FaqButton.tsx
import { useState } from "react";
import { FaqPanel } from "./FaqPanel";

export function FaqButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="FAQ - Pertanyaan Umum"
        className="fixed bottom-6 right-6 z-50 group"
        style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))" }}
      >
        <svg
          width="52"
          height="52"
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
            fill="none"
            stroke="#111111"
            strokeWidth="3"
          />

          {/* Ekor bubble pojok kiri bawah */}
          <path
            d="M10 47 L4 61 L24 47 Z"
            fill="none"
            stroke="#111111"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* FAQ — font sama persis dengan SALE di navbar:
              font-bold, tracking-[0.15em], uppercase, sans-serif */}
          <text
            x="31"
            y="25"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#111111"
            fontSize="12"
            fontWeight="700"
            fontFamily="inherit"
            letterSpacing="1.8"
            style={{ textTransform: 'uppercase' }}
          >
            FAQ
          </text>
        </svg>
      </button>

      <FaqPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}