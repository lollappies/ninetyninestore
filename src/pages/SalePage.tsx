import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';
export function SalePage() {
  const navigate = useNavigate();
  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') navigate(-1);
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);
const looks = [{
    id: 1,
    bg: 'bg-brand-neutral1',
    image: '/images/sale/sale1.jpg',
    title: 'Casual Look',
    description: 'Keep it easy, keep it stylish! Simple outfits that are comfortable for everyday wear.'
  }, {
    id: 2,
    bg: 'bg-brand-neutral2',
    image: '/images/sale/sale4.jpg',
    title: 'Feminim Look',
    description: 'Graceful, soft, and utterly charming. Embrace your feminine side.'
  }, {
    id: 3,
    bg: 'bg-brand-neutral3',
    image: '/images/sale/sale7.jpeg',
    title: 'Smart Casual Look',
    description: 'The perfect balance between polished and relaxed.'
  }, {
    id: 4,
    bg: 'bg-brand-neutral4',
    image: '/images/sale/sale10.jpeg',
    title: 'Comfy Look',
    description: 'Because comfort is everything! Cozy yet chic outfits.'
  }];
    return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-white pb-0">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
            <ArrowLeft size={24} />
          </button>
          <span className="font-serif text-xl font-medium ml-2">
            Special Bundles
          </span>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.2em] uppercase text-brand-accent block mb-3 font-bold">
            Limited Time Offer
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
            Complete Looks
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Save more when you buy the complete outfit. Curated by our stylists
            for your everyday elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
          {looks.map((look, idx) => <motion.div key={look.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-50px'
        }} transition={{
          delay: idx * 0.1
        }} className="group cursor-pointer flex flex-col gap-4" onClick={() => navigate(`/sale/look-${look.id}`)}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                <img src={look.image} alt={look.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-brand-accent text-white px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg">
                  Save 20%
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="flex flex-col items-center text-center px-4">
                <h3 className="font-serif text-2xl text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">
                  {look.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{look.description}</p>
                <span className="text-xs font-bold tracking-[0.15em] uppercase border-b border-brand-dark pb-1 group-hover:border-brand-accent transition-colors">
                  Shop The Look
                </span>
              </div>
            </motion.div>)}
        </div>
      </div>

      <Footer />
    </motion.div>;
}