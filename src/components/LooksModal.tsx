import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
interface LooksModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function LooksModal({
  isOpen,
  onClose
}: LooksModalProps) {
  const navigate = useNavigate();
  const looks = [{
    id: 1,
    bg: 'bg-brand-neutral1',
    image: '/images/look/1.jpg',
    title: 'Retro Look Ideas',
    category: 'Look 1'
  }, {
    id: 2,
    bg: 'bg-brand-neutral2',
    image: '/images/look/2.jpg',
    title: 'Casual Look Ideas',
    category: 'Look 2'
  }, {
    id: 3,
    bg: 'bg-brand-neutral3',
    image: '/images/look/3.jpg',
    title: 'Latest Look Ideas',
    category: 'Look 3'
  }, {
    id: 4,
    bg: 'bg-brand-neutral4',
    image: '/images/look/4.jpg',
    title: 'Feminine Look Ideas',
    category: 'Look 4'
  }, {
    id: 5,
    bg: 'bg-brand-neutral1',
    image: '/images/look/5.jpg',
    title: 'Weekend Look Ideas',
    category: 'Look 5'
  }, {
    id: 6,
    bg: 'bg-brand-neutral2',
    image: '/images/look/6.jpg',
    title: 'Daily Look Ideas',
    category: 'Look 6'
  }, {
    id: 7,
    bg: 'bg-brand-eutral3',
    image: '/images/look/7.jpg',
    title: 'Pinky Look Ideas',
    category: 'Look 7'
  }, {
    id: 8,
    bg: 'bg-brand-neutral4',
    image: '/images/look/8.jpg',
    title: 'Clean Look Ideas',
    category: 'Look 8'
  }, {
    id: 9,
    bg: 'bg-brand-neutral1',
    image: '/images/look/9.jpg',
    title: 'Cute Look Ideas',
    category: 'Look 9'
  }, {
    id: 10,
    bg: 'bg-brand-neutral2',
    image: '/images/look/10.jpg',
    title: 'Earthy Look Ideas',
    category: 'Look 10'
  }, {
    id: 11,
    bg: 'bg-brand-neutral3',
    image: '/images/look/11.jpg',
    title: 'Elegant Look Ideas',
    category: 'Look 11'
  }, {
    id: 12,
    bg: 'bg-brand-neutral4',
    image: '/images/look/12.jpg',
    title: 'Midnight Look Ideas',
    category: 'Look 12'
  }];
  return <AnimatePresence>
      {isOpen && <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: 20
    }} transition={{
      duration: 0.3
    }} className="fixed inset-0 z-[9999] bg-white overflow-y-auto">
          <header className="sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-gray-100 px-4 md:px-12">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[72px]">
              <div className="flex items-center gap-3">
                <span className="font-serif text-xl font-medium tracking-wide text-brand-dark">
                  Ninetynine
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400">
                  / Looks
                </span>
              </div>
              <button onClick={onClose} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-gray-50 transition-colors">
                <X size={18} />
              </button>
            </div>
          </header>

          <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-12 md:py-16">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.25em] uppercase text-gray-500 block mb-3">
                Style Inspiration
              </span>
              <h1 className="font-serif text-3xl md:text-5xl text-brand-dark">
                Get Your Look
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {looks.map((look, idx) => <motion.div key={look.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: idx * 0.1
          }} className="cursor-pointer group" onClick={() => {
            onClose();
            navigate(`/looks/look-${look.id}`);
          }}>
                  <div className={`${look.bg} rounded-2xl aspect-[3/4] flex items-center justify-center relative overflow-hidden`}>
                    <img src={look.image} alt={look.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-[9px] tracking-[0.2em] uppercase text-gray-500 mb-1">
                        {look.category}
                      </p>
                      <p className="font-serif text-lg text-brand-dark">
                        {look.title}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
          <Footer/>
        </motion.div>}
    </AnimatePresence>;
}