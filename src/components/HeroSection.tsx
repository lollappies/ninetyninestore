// src/components/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onExploreLooks: () => void;
}

export function HeroSection({ onExploreLooks }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-brand-neutral3">
      <video
        src="/images/hero-section/video-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      {/* SEO hidden content */}
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

      {/* Hero content — optional, bisa ditambah CTA di sini */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-4 pb-16 md:pb-20 max-w-3xl mx-auto">
        <motion.button
          onClick={onExploreLooks}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[10px] tracking-[0.25em] uppercase text-white/80 border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
        >
          {t('banner_cta')}
        </motion.button>
      </div>
    </section>
  );
}