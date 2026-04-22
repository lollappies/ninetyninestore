import React, { useState } from 'react';
import { X, ChevronDown, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
export function MobileMenu({
  isOpen,
  onClose
}: MobileMenuProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categories = ['Dress', 'Blouse', 'Tunic', 'Outer', 'Sweater', 'Pants', 'Skirt'];
  return <AnimatePresence>
      {isOpen && <>
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 bg-black/50 z-50 md:hidden" />
          <motion.div initial={{
        x: '-100%'
      }} animate={{
        x: 0
      }} exit={{
        x: '-100%'
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 200
      }} className="fixed top-0 left-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 md:hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="font-serif text-2xl text-brand-dark">
                Ninetynine
              </span>
              <button onClick={onClose} className="p-2 -mr-2 text-gray-500 hover:text-brand-dark">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              <a href="#" onClick={onClose} className="flex items-center gap-3 px-6 py-4 text-[13px] tracking-[0.15em] uppercase text-brand-dark border-b border-gray-50">
                <Home size={16} strokeWidth={1.5} />
                Beranda
              </a>
              <a href="/sale" onClick={onClose} className="block px-6 py-4 text-[13px] tracking-[0.15em] uppercase text-brand-accent font-medium border-b border-gray-50">
                Sale
              </a>

              <div>
                <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="w-full flex items-center justify-between px-6 py-4 text-[13px] tracking-[0.15em] uppercase text-brand-dark border-b border-gray-50">
                  Category
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isCategoryOpen && <motion.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 'auto',
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} className="overflow-hidden bg-gray-50">
                      {categories.map((cat) => <a key={cat} href={`/category/${cat.toLowerCase()}`} onClick={onClose} className="block px-8 py-3 text-xs tracking-wider text-gray-600 hover:text-brand-dark">
                          {cat}
                        </a>)}
                    </motion.div>}
                </AnimatePresence>
              </div>

              <a href="#stores" onClick={onClose} className="block px-6 py-4 text-[13px] tracking-[0.15em] uppercase text-brand-dark border-b border-gray-50">
                Offline Store
              </a>
            </div>
          </motion.div>
        </>}
    </AnimatePresence>;
}