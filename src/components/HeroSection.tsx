import React from 'react';
import { motion } from 'framer-motion';
interface HeroSectionProps {
  onExploreLooks: () => void;
}
export function HeroSection({
  onExploreLooks
}: HeroSectionProps) {
  return <section className="relative h-screen w-full overflow-hidden bg-brand-neutral3">
      <img src="/images/landing-page/video-hero.mp4" alt="Fashion Hero" className="absolute inset-0 w-full h-full object-cover object-top" />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto pt-20">
        
      </div>
    </section>;
}