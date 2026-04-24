import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { bestsellers, Product } from '../utils/data';

interface BestsellerSectionProps {
  wishlist: Product[];
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function BestsellerSection({
  wishlist,
  onToggleWishlist,
  onAddToCart
}: BestsellerSectionProps) {
  return (
    <section id="bestseller" className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-center mb-16"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 block mb-3">
          Most Loved
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">
          Best Seller
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
        {bestsellers.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.1 }}
          >
            <ProductCard
              product={{ ...product, price: undefined }} // ← harga disembunyikan
              isWishlisted={wishlist.some((item) => item.id === product.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}