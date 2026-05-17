// src/components/BestsellerSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { bestsellers, Product } from '../utils/data';
import { useLanguage } from '../context/LanguageContext';

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
  const { t } = useLanguage();

  return (
    <section id="bestseller" className="py-16 md:py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-center mb-10 md:mb-16"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 block mb-2 md:mb-3">
          {t('section_bestseller_label')}
        </span>
        <h2 className="font-serif text-2xl md:text-4xl text-brand-dark">
          {t('section_bestseller_title')}
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-12">
        {bestsellers.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.1 }}
          >
            <ProductCard
              product={{ ...product, price: undefined }}
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