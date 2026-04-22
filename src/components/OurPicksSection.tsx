import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { ourPicks, Product } from '../utils/data';
interface OurPicksSectionProps {
  wishlist: Product[];
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onBrowseAll: () => void;
}
export function OurPicksSection({
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onBrowseAll
}: OurPicksSectionProps) {
  return <section className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      margin: '-100px'
    }} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 block mb-3">
            Curated For You
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">
            Our Picks
          </h2>
        </div>
        <button onClick={onBrowseAll} className="text-xs font-bold tracking-[0.15em] uppercase text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors self-start md:self-auto">
          Browse All
        </button>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
        {ourPicks.map((product, idx) => <motion.div key={product.id} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-50px'
      }} transition={{
        delay: idx % 4 * 0.1
      }}>
            <ProductCard product={product} isWishlisted={wishlist.some((item) => item.id === product.id)} onToggleWishlist={onToggleWishlist} onAddToCart={onAddToCart} />
          </motion.div>)}
      </div>
    </section>;
}