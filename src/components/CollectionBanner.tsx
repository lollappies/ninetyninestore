import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CollectionBannerProps {
  onExploreLooks: () => void;
}

export function CollectionBanner({ onExploreLooks }: CollectionBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [0.4, 0.75]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] min-h-[600px] w-full overflow-hidden"
    >
      {/* Gambar dengan parallax scroll */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: imageY }}>
        <img
          src="/images/landing-page/banner.jpeg"
          alt="Collection"
          className="w-full h-full object-cover object-[55%_25%]"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 md:px-12 flex items-center">
        <div className="max-w-xl">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.2em] uppercase text-white/80 block mb-4"
          >
            Ninetynine — 2026
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="font-serif text-4xl md:text-6xl text-white leading-[1.1] mb-4"
          >
            Timeless
            <br />
            <em className="font-serif italic text-white/90">Daily Essentials</em>
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="w-16 h-px bg-white/30 mb-6 origin-left"
          />

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-white/80 text-sm md:text-base mb-10 max-w-md leading-relaxed"
          >
            Discover pieces crafted for the modern woman. Refined silhouettes,
            premium fabrics, and timeless style.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onClick={onExploreLooks}
            className="group flex items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase text-white hover:text-brand-neutral2 transition-colors"
          >
            Get Your Look Now
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.button>

        </div>
      </div>
    </section>
  );
}