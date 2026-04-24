import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CollectionBannerProps {
  onExploreLooks: () => void;
}

// Stagger variants untuk text reveal
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

  // Parallax scroll — gambar bergerak lebih lambat dari scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [0.4, 0.75]);

  // Parallax mouse hover
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const imgX = useTransform(springX, [-0.5, 0.5], ['-2%', '2%']);
  const imgYMouse = useTransform(springY, [-0.5, 0.5], ['-2%', '2%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] min-h-[600px] w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gambar dengan parallax scroll + mouse */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: imageY, x: imgX, translateY: imgYMouse }}
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

      {/* Garis dekoratif kiri — animate masuk dari atas */}
      <motion.div
        className="absolute left-8 md:left-14 top-0 w-px bg-white/20 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        style={{ height: '55%' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 md:px-12 flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl pl-0 md:pl-6"
        >
          {/* Eyebrow */}
          <motion.span
            variants={itemVariants}
            className="text-[10px] tracking-[0.25em] uppercase text-white/60 block mb-5 font-mono"
          >
            Ninetynine — 2026
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-6xl text-white leading-[1.05] mb-4"
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
            className="text-white/70 text-sm md:text-base mb-10 max-w-md leading-relaxed"
          >
            Discover pieces crafted for the modern woman. Refined silhouettes,
            premium fabrics, and timeless style.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              onClick={onExploreLooks}
              className="group relative flex items-center gap-3 text-xs font-bold tracking-[0.18em] uppercase text-white overflow-hidden border border-white/25 px-6 py-3"
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
              <span className="relative z-10 transition-colors group-hover:text-white">
                Get Your Look Now
              </span>
              <motion.span
                className="relative z-10"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={15} />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-[9px] tracking-[0.2em] uppercase text-white/30 font-mono">Scroll</span>
        <motion.div
          className="w-px bg-white/30"
          animate={{ height: [0, 28, 28], opacity: [1, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}