import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { Footer } from '../components/Footer';
import { allProducts, Product } from '../utils/data';

interface LooksDetailPageProps {
  onAddToCart?: (product: Product, quantity: number, color: string, size: string) => void;
}

export function LooksDetailPage({ onAddToCart }: LooksDetailPageProps) {
  const { lookId } = useParams<{ lookId: string }>();
  const navigate = useNavigate();

  const lookNumber = lookId ? parseInt(lookId.replace('look-', '')) : 1;

  const looksData = [
    { 
      id: 1,  
      image: '/images/look/1.jpg',  
      title: 'Retro Look Ideas',    
      category: 'Look 1',  
      description: 'Inspired by the timeless retro era. Bold, expressive, and full of personality.' },
    { 
      id: 2,  
      image: '/images/look/2.jpg',  
      title: 'Casual Look Ideas',   
      category: 'Look 2',  
      description: 'Effortlessly cool and comfortable. Perfect for everyday adventures.' },
    { 
      id: 3,  
      image: '/images/look/3.jpg',  
      title: 'Latest Look Ideas',   
      category: 'Look 3',  
      description: 'Stay ahead of the trends with our latest curated styles.' },
    { 
      id: 4,  
      image: '/images/look/4.jpg',  
      title: 'Feminine Look Ideas', 
      category: 'Look 4',  
      description: 'Soft, graceful, and utterly charming. Celebrate your femininity.' },
    { 
      id: 5,  
      image: '/images/look/5.jpg',  
      title: 'Weekend Look Ideas',  
      category: 'Look 5',  
      description: 'Relaxed yet stylish looks for your days off.' },
    { 
      id: 6,  
      image: '/images/look/6.jpg',  
      title: 'Daily Look Ideas',    
      category: 'Look 6',  
      description: 'Simple and chic outfits for your everyday routine.' },
    { 
      id: 7,  
      image: '/images/look/7.jpg',  
      title: 'Pinky Look Ideas',    
      category: 'Look 7',  
      description: 'Sweet and playful with a touch of pink energy.' },
    { 
      id: 8,  
      image: '/images/look/8.jpg',  
      title: 'Clean Look Ideas',    
      category: 'Look 8',  
      description: 'Minimalist and fresh. Less is more.' },
    { 
      id: 9,  
      image: '/images/look/9.jpg',  
      title: 'Cute Look Ideas',     
      category: 'Look 9',  
      description: 'Adorable and fun outfits that bring joy to your wardrobe.' },
    { 
      id: 10, 
      image: '/images/look/10.jpg', 
      title: 'Earthy Look Ideas',   
      category: 'Look 10', 
      description: 'Warm tones and natural vibes for a grounded aesthetic.' },
    { 
      id: 11, 
      image: '/images/look/11.jpg', 
      title: 'Elegant Look Ideas',  
      category: 'Look 11', 
      description: 'Dark, mysterious, and undeniably chic for night occasions.' },
    { 
      id: 12, 
      image: '/images/look/12.jpg', 
      title: 'Midnight Look Ideas', 
      category: 'Look 12', 
      description: 'Refined and sophisticated. Dress to impress.' },
  ];

  // Ambil 4 produk sebagai "Shop This Look" berdasarkan lookNumber
  const featuredProducts = allProducts.filter(p => p.price).slice(
    ((lookNumber - 1) * 4) % allProducts.filter(p => p.price).length,
    ((lookNumber - 1) * 4) % allProducts.filter(p => p.price).length + 4
  );

  const look = looksData.find((l) => l.id === lookNumber) || looksData[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white">

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
            <ArrowLeft size={24} />
          </button>
          <span className="font-serif text-xl font-medium ml-2">Look Details</span>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">

        {/* Top: Look Image + Info */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">

          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-24">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={look.image}
                  alt={look.title}
                  className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">
              {look.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
              {look.title}
            </h1>
            <p className="text-gray-500 leading-relaxed mb-8">
              {look.description}
            </p>

            <hr className="border-gray-100 mb-8" />

            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-6">
              Shop Items From This Look
            </p>

            {/* Featured Products */}
            <div className="grid grid-cols-2 gap-4">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}>
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-brand-neutral1 mb-3 relative">
                    <img
                      src={product.imageMain}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                    {product.series}
                  </p>
                  <p className="font-serif text-sm text-brand-dark mb-1 leading-tight">
                    {product.name}
                  </p>
                  <p className="text-sm font-medium text-brand-dark">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/product/' + featuredProducts[0]?.id)}
              className="mt-8 w-full py-4 bg-brand-dark text-white rounded-xl text-xs font-bold tracking-[0.15em] uppercase hover:bg-brand-accent transition-colors flex items-center justify-center gap-2">
              <ShoppingBag size={16} />
              Shop This Look
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}