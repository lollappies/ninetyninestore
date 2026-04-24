import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CollectionBannerProps {
  onExploreLooks: () => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
  },
};

export function CollectionBanner({ onExploreLooks }: CollectionBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll saja
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
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: imageY }}
      >
        <img
          src="/images/landing-page/banner.jpeg"
          alt="Collection"
          className="w-full h-full object-cover object-[55%_25%]"
        />
      </motion.div>

      {/* Overlay yang makin gelap saat scroll */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 md:px-12 flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          {/* Eyebrow */}
          <motion.span
            variants={itemVariants}
            className="text-[10px] tracking-[0.2em] uppercase text-white/80 block mb-4"
          >
            Ninetynine — 2026
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-6xl text-white leading-[1.1] mb-4"
          >
            Timeless
            <br />
            <em className="font-serif italic text-white/90">Daily Essentials</em>
          </motion.h2>

          {/* Divider line */}
          <motion.div
            variants={lineVariants}
            className="w-16 h-px bg-white/30 mb-6 origin-left"
          />

          {/* Body text */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-sm md:text-base mb-10 max-w-md leading-relaxed"
          >
            Discover pieces crafted for the modern woman. Refined silhouettes,
            premium fabrics, and timeless style.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              onClick={onExploreLooks}
              className="group relative flex items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase text-white overflow-hidden border border-white/25 px-6 py-3"
              whileHover={{ borderColor: 'rgba(255,255,255,0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Background sweep on hover */}
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
              <span className="relative z-10">Get Your Look Now</span>
              <motion.span
                className="relative z-10"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={15} />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}