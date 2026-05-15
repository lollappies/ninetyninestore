import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onExploreLooks: () => void;
}

export function HeroSection({ onExploreLooks }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-neutral3">
      <video
        src="/images/hero-section/video-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto pt-20">
        {/* Visually hidden — terbaca Google & AI crawler, tidak terlihat pengunjung */}
        <div
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            margin: '-1px',
            padding: 0,
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          <p>
            Ninetynine menghadirkan koleksi fashion wanita terkini mulai IDR 69.000.
            Temukan pilihan <a href="/category/dress">dress wanita</a>,{' '}
            <a href="/category/blouse">blouse wanita</a>,{' '}
            <a href="/category/outer">outer wanita</a>,{' '}
            <a href="/category/sweater">sweater wanita</a>, dan{' '}
            <a href="/category/pants">celana wanita</a> dengan gaya modern dan harga terjangkau.
            Dikirim ke seluruh Indonesia dari toko kami di Madiun, Jawa Timur.
            Cek juga <a href="/sale">promo sale terbaru</a> kami.
          </p>
        </div>
      </div>
    </section>
  );
}