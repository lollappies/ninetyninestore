import React, { useEffect } from 'react';
import { X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../utils/data';
import { ProductCard } from './ProductCard';
import { useCustomToast } from './CustomToast';
import { Footer } from './Footer';
interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}
export function WishlistModal({
  isOpen,
  onClose,
  wishlist,
  onToggleWishlist,
  onAddToCart
}: WishlistModalProps) {
  const { showToast } = useCustomToast();
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
       if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  const handleWishlistRemove = (product: Product) => {
    onToggleWishlist(product);
    showToast('Produk berhasil dihapus dari wishlist');
  };
  return (
    <AnimatePresence>
      {isOpen &&
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: 20
        }}
        transition={{
          duration: 0.3
        }}
        className="fixed inset-0 z-[9999] bg-white overflow-y-auto">
        
          <header className="sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-gray-100 px-4 md:px-12">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[72px]">
              <div className="flex items-center gap-3">
                <span className="font-serif text-xl font-medium tracking-wide text-brand-dark">
                  Ninetynine
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400">
                  / Wishlist
                </span>
              </div>
              <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-gray-50 transition-colors">
              
                <X size={18} />
              </button>
            </div>
          </header>

          <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-10 md:py-16">
            <div className="flex items-baseline gap-3 mb-10">
              <h1 className="font-serif text-3xl md:text-5xl text-brand-dark">
                My Wishlist
              </h1>
              <span className="text-[11px] tracking-[0.1em] text-gray-400">
                {wishlist.length} items
              </span>
            </div>

            {wishlist.length === 0 ?
          <div className="flex flex-col items-center justify-center py-20 text-center">
                <Heart
              size={48}
              strokeWidth={1}
              className="text-gray-300 mb-6" />
            
                <p className="text-sm text-gray-500 mb-2">
                  Wishlist kamu masih kosong
                </p>
                <p className="text-xs text-gray-400">
                  Klik ikon ♡ pada produk untuk menyimpannya di sini
                </p>
              </div> :

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
                {wishlist.map((product) =>
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={true}
              onToggleWishlist={handleWishlistRemove}
              onAddToCart={onAddToCart}
              hideWishlistToast={true} />

            )}
              </div>
          }
          </div>
          <Footer />
        </motion.div>
      }
    </AnimatePresence>);

}