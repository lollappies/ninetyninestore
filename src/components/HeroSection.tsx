import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
interface HeroSectionProps {
  onExploreLooks: () => void;
}
export function HeroSection({
  onExploreLooks
}: HeroSectionProps) {
  return <section className="relative h-screen w-full overflow-hidden bg-brand-neutral3">
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
        
      </div>
    </section>;
}