import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, allProducts } from '../utils/data';
import { useEffect } from 'react';
import { ProductCard } from './ProductCard';
interface AllProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}
export function AllProductsModal({
  isOpen,
  onClose,
  wishlist,
  onToggleWishlist,
  onAddToCart
}: AllProductsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
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
              <span className="font-serif text-xl font-medium tracking-wide text-brand-dark">
                Ninetynine
              </span>
              <div className="flex items-center gap-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 hidden sm:block">
                  All Products
                </span>
                <button onClick={onClose} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-gray-50 transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>
          </header>

          <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-12 md:py-16">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.25em] uppercase text-gray-500 block mb-3">
                Curated For You
              </span>
              <h1 className="font-serif text-3xl md:text-5xl text-brand-dark">
                Our Picks — All Products
              </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
              {allProducts.map((product, idx) => <motion.div key={`all_${product.id}_${idx}`} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: idx % 10 * 0.05
          }}>
                  <ProductCard product={product} isWishlisted={wishlist.some((item) => item.id === product.id)} onToggleWishlist={onToggleWishlist} onAddToCart={onAddToCart} />
                </motion.div>)}
            </div>
          </div>
        </motion.div>}
    </AnimatePresence>;
}