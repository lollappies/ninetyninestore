import React from 'react';

interface HeroSectionProps {
  onExploreLooks: () => void;
}

export function HeroSection({ onExploreLooks }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-neutral3">

      {/* Optimized Hero Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-section/poster-hero.webp"
        className="absolute inset-0 w-full h-full object-cover object-top"
      >
        <source
          src="/images/hero-section/video-hero.webm"
          type="video/webm"
        />

        <source
          src="/images/hero-section/video-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* SEO + GEO Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto pt-20">

        {/* Hidden semantic content for AI & Google */}
        <div
          className="sr-only"
          aria-hidden="false"
        >
          <h1>
            Ninetynine Fashion Wanita Madiun
          </h1>

          <p>
            Ninetynine menghadirkan koleksi fashion wanita terkini mulai IDR 69.000.
            Temukan pilihan dress wanita, blouse wanita, outer wanita,
            sweater wanita, dan celana wanita dengan gaya modern dan harga terjangkau.
            Pengiriman ke seluruh Indonesia dari Madiun, Jawa Timur.
          </p>
        </div>

      </div>
    </section>
  );
}