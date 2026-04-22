import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Info } from 'lucide-react';
import { Footer } from '../components/Footer';
import { allProducts, Product } from '../utils/data';
interface SaleDetailPageProps {
  onAddToCart: (product: Product, quantity?: number, color?: string, size?: string) => void;
}
export function SaleDetailPage({
  onAddToCart
}: SaleDetailPageProps) {
  const {
    lookId
  } = useParams<{
    lookId: string;
  }>();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  // Extract look number from "look-1", "look-2", etc.
  const lookNumber = lookId ? parseInt(lookId.replace('look-', '')) : 1;
  const looksData = [{
    id: 1,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    title: 'Casual Elegance',
    description: 'Perfect for a weekend brunch or a casual day out. This look combines comfort with effortless style.',
    items: [allProducts[0], allProducts[4]] // Siderope Flowbordir + Flowcolour Cream Blouse
  }, {
    id: 2,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    title: 'Summer Breeze',
    description: 'Light, airy, and perfect for warm weather. Stay cool while looking absolutely stunning.',
    items: [allProducts[1], allProducts[6]] // Cream Bordir Dress + Twocolors Bordir Tunic
  }, {
    id: 3,
    image: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?w=800&q=80',
    title: 'Office Chic',
    description: 'Professional yet stylish for the modern workplace. Make a statement in the boardroom.',
    items: [allProducts[2], allProducts[8]] // Seemivest Bordir Flow Dress + Flowlace Shirt
  }, {
    id: 4,
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80',
    title: 'Evening Glamour',
    description: 'Turn heads at your next evening event with this carefully curated elegant ensemble.',
    items: [allProducts[5], allProducts[9]] // Flow Pearlbelt Dress + Brukat Skirt
  }];
  const look = looksData.find((l) => l.id === lookNumber) || looksData[0];
  // Calculate prices
  const calculateTotal = () => {
    return look.items.reduce((total, item) => {
      // Ensure price exists, if not use a default
      const priceStr = item.price || `IDR ${Math.floor(Math.random() * 200 + 100)}.000`;
      const numericPrice = parseInt(priceStr.replace(/[^0-9]/g, ''));
      return total + numericPrice;
    }, 0);
  };
  const originalTotal = calculateTotal();
  const discountPercentage = 20;
  const bundleTotal = Math.floor(originalTotal * (1 - discountPercentage / 100));
  const formatCurrency = (val: number) => `IDR ${new Intl.NumberFormat('id-ID').format(val)}`;
  const handleAddBundleToCart = () => {
    setIsAdding(true);
    // Add all items in the bundle to cart
    look.items.forEach((item) => {
      onAddToCart(item, 1, 'Default', 'All Size');
    });
    setTimeout(() => {
      setIsAdding(false);
      navigate('/cart');
    }, 800);
  };
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
            <ArrowLeft size={24} />
          </button>
          <span className="font-serif text-xl font-medium ml-2">
            Bundle Details
          </span>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Main Image */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-24">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                <img src={look.image} alt={look.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-brand-accent text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                  Bundle Sale -{discountPercentage}%
                </div>
              </div>
            </div>
          </div>

          {/* Right: Details & Items */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-10">
              <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
                {look.title}
              </h1>
              <p className="text-gray-500 leading-relaxed mb-6">
                {look.description}
              </p>

              <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-xl p-4 flex items-start gap-3">
                <Info size={20} className="text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-1">
                    Special Bundle Pricing
                  </h4>
                  <p className="text-xs text-gray-600">
                    Dapatkan harga lebih murah dengan membeli 1 set outfit
                    lengkap ini. Hemat {discountPercentage}% dibandingkan
                    membeli satuan.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-6 border-b border-gray-100 pb-4">
              Items in this look ({look.items.length})
            </h3>

            <div className="flex flex-col gap-6 mb-12">
              {look.items.map((item, idx) => {
              const itemPrice = item.price || `IDR ${Math.floor(Math.random() * 200 + 100)}.000`;
              return <div key={idx} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors bg-gray-50/50">
                    <img src={item.imageMain} alt={item.name} className="w-20 h-28 object-cover rounded-lg bg-gray-200" />
                    <div className="flex flex-col justify-center flex-1">
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                        {item.series}
                      </span>
                      <h4 className="text-sm font-bold text-brand-dark mb-2">
                        {item.name}
                      </h4>
                      <span className="text-sm text-gray-600">{itemPrice}</span>
                    </div>
                  </div>;
            })}
            </div>

            {/* Pricing Summary & Action */}
            <div className="mt-auto bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-500 text-sm">Original Total</span>
                <span className="text-gray-400 line-through text-sm">
                  {formatCurrency(originalTotal)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-brand-dark">Bundle Price</span>
                <span className="text-2xl font-bold text-brand-accent">
                  {formatCurrency(bundleTotal)}
                </span>
              </div>

              <button onClick={handleAddBundleToCart} disabled={isAdding} className="w-full py-4 bg-brand-dark text-white rounded-xl text-xs font-bold tracking-[0.15em] uppercase hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                {isAdding ? 'Adding to Cart...' : <>
                    <ShoppingBag size={18} />
                    Add Bundle to Cart
                  </>}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>;
}