import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';
import { category as categoryProducts, Product } from '../utils/data';
import { useEscapeBack } from '../hooks/useEscapeBack';
import { CategoryJsonLd } from '../components/JsonLd';
import { useLanguage } from '../context/LanguageContext';
import { TranslationKey } from '../utils/translations';

interface CategoryPageProps {
  wishlist: Product[];
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenWishlist: () => void;
  wishlistCount: number;
  cartCount: number;
}

export function CategoryPage({ wishlist, onToggleWishlist, onAddToCart, onOpenWishlist, wishlistCount, cartCount }: CategoryPageProps) {
  useEscapeBack();
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);

  const categoryLabelMap: Record<string, TranslationKey> = {
    dress:   'category_dress',
    blouse:  'category_blouse',
    tunic:   'category_tunic',
    outer:   'category_outer',
    sweater: 'category_sweater',
    pants:   'category_pants',
    skirt:   'category_skirt',
  };

  const categoryLabel = categoryName && categoryLabelMap[categoryName]
    ? t(categoryLabelMap[categoryName])
    : categoryName ?? '';

  useEffect(() => {
    const baseProducts = categoryProducts.filter((p) => p.category === categoryName);
    if (baseProducts.length === 0) { setProducts([]); return; }
    let displayProducts = [...baseProducts];
    let i = 0;
    while (displayProducts.length < 10) {
      displayProducts.push({ ...baseProducts[i % baseProducts.length] });
      i++;
    }
    displayProducts = displayProducts.map((p) => ({
      ...p,
      price: p.price || `IDR ${Math.floor(Math.random() * 200 + 100)}.000`
    }));
    setProducts(displayProducts.slice(0, 10));
  }, [categoryName]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-white">

      <CategoryJsonLd
        categoryName={categoryName || ''}
        url={`https://ninetyninestore-nine.vercel.app/category/${categoryName}`}
      />

      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
              <ArrowLeft size={24} />
            </button>
            <span className="font-serif text-xl font-medium ml-2 capitalize">
              {categoryLabel}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onOpenWishlist} className="relative p-2 text-brand-dark hover:opacity-70 transition-opacity">
              <Heart size={22} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button onClick={() => navigate('/cart')} className="relative p-2 text-brand-dark hover:opacity-70 transition-opacity">
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12 mb-24">
          {products.map((product, idx) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: idx % 5 * 0.1 }}>
              <ProductCard
                product={product}
                isWishlisted={wishlist.some((item) => item.id === product.id)}
                onToggleWishlist={onToggleWishlist}
                onAddToCart={onAddToCart}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}