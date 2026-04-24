import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';
import { category as categoryProducts, Product } from '../utils/data';
  wishlist: Product[];
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}
export function CategoryPage({
  wishlist,
  onToggleWishlist,
  onAddToCart
}: CategoryPageProps) {
  const {
    categoryName
  } = useParams<{
    categoryName: string;
  }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    // Generate 10 products for the category
    // In a real app, this would be an API call
  const baseProducts = categoryProducts.filter((p) => p.category === categoryName);

    if (baseProducts.length === 0) {
      setProducts([]);
      return;
    }

    let displayProducts = [...baseProducts];
    
    let i = 0;
    while (displayProducts.length < 10) {
      displayProducts.push({
        ...baseProducts[i % baseProducts.length],
        id: `cat_${categoryName}_${i}`
      });
      i++;
    }
    // Ensure all products have prices
    displayProducts = displayProducts.map((p) => ({
      ...p,
      price: p.price || `IDR ${Math.floor(Math.random() * 200 + 100)}.000`
    }));
    // Ensure exactly 10 products
    setProducts(displayProducts.slice(0, 10));
  }, [categoryName]);
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-white pb-24">
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
            <ArrowLeft size={24} />
          </button>
          <span className="font-serif text-xl font-medium ml-2 capitalize">
            {categoryName}
          </span>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        {/* 10 Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12 mb-24">
          {products.map((product, idx) => <motion.div key={product.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-50px'
        }} transition={{
          delay: idx % 5 * 0.1
        }}>
              <ProductCard product={product} isWishlisted={wishlist.some((item) => item.id === product.id)} onToggleWishlist={onToggleWishlist} onAddToCart={onAddToCart} />
            </motion.div>)}
        </div>

        {/* Our Picks Style Text Blocks */}

        {/* Bestseller Style Text Blocks */}
        
      </div>
      <Footer />
    </motion.div>;
}