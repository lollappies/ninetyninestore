import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Minus, Plus } from 'lucide-react';
import { useCustomToast } from '../components/CustomToast';
import { Footer } from '../components/Footer';
import { allProducts, Product } from '../utils/data';
import { useEscapeBack } from '../hooks/useEscapeBack';
interface LooksDetailPageProps {
  onAddToCart: (
    product: Product,
    quantity?: number,
    color?: string,
    size?: string,
    bundleName?: string
  ) => void;
  onBack: () => void;
}

export function LooksDetailPage({ onAddToCart, onBack }: LooksDetailPageProps) {
  useEscapeBack();
  const { lookId } = useParams<{ lookId: string }>();
  const navigate = useNavigate();
  const { showToast } = useCustomToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Default');
  const [isAdding, setIsAdding] = useState(false);
  const [email, setEmail] = useState('');

  const lookNumber = lookId ? parseInt(lookId.replace('look-', '')) : 1;
  const getById = (id: string) => allProducts.find(p => p.id === id)!;

  const looksData = [
    { 
      id: 1, 
      image: '/images/looks/1.jpg', 
      title: 'Retro Look Ideas', 
      category: 'Look 1', 
      description: 'Inspired by the timeless retro era. Bold, expressive, and full of personality.', 
      price: 'IDR 268.000', 
      items: [getById('outer_1'), getById('skirt_1')] 
    },
    { 
      id: 2, 
      image: '/images/looks/2.jpg', 
      title: 'Casual Look Ideas', 
      category: 'Look 2', 
      description: 'Effortlessly cool and comfortable. Perfect for everyday adventures.', 
      price: 'IDR 268.000', 
      items: [getById('blouse_1'), getById('pants_1')] 
    },
    { 
      id: 3, 
      image: '/images/looks/3.jpg', 
      title: 'Latest Look Ideas', 
      category: 'Look 3', 
      description: 'Stay ahead of the trends with our latest curated styles.', 
      price: 'IDR 262.000', 
      items: [getById('dress_1'), getById('outer_2')] 
    },
    { 
      id: 4, 
      image: '/images/looks/4.jpg', 
      title: 'Feminine Look Ideas', 
      category: 'Look 4', 
      description: 'Soft, graceful, and utterly charming. Celebrate your femininity.', 
      price: 'IDR 322.000', 
      items: [getById('dress_2'), getById('skirt_2')] 
    },
    { 
      id: 5, 
      image: '/images/looks/5.jpg', 
      title: 'Weekend Look Ideas', 
      category: 'Look 5', 
      description: 'Relaxed yet stylish looks for your days off.', 
      price: 'IDR 305.000', 
      items: [getById('tunic_1'), getById('pants_2')] 
    },
    { 
      id: 6, 
      image: '/images/looks/6.jpg', 
      title: 'Daily Look Ideas', 
      category: 'Look 6', 
      description: 'Simple and chic outfits for your everyday routine.', 
      price: 'IDR 288.000', 
      items: [getById('blouse_3'), getById('skirt_3')] 
    },
    { 
      id: 7, 
      image: '/images/looks/7.jpg', 
      title: 'Pinky Look Ideas', 
      category: 'Look 7', 
      description: 'Sweet and playful with a touch of pink energy.', 
      price: 'IDR 278.000', 
      items: [getById('sweater_1'), getById('skirt_4')] 
    },
    { 
      id: 8, 
      image: '/images/looks/8.jpg', 
      title: 'Clean Look Ideas', 
      category: 'Look 8', 
      description: 'Minimalist and fresh. Less is more.', 
      price: 'IDR 310.000', 
      items: [getById('blouse_6'), getById('pants_3')] 
    },
    { 
      id: 9, 
      image: '/images/looks/9.jpg', 
      title: 'Cute Look Ideas', 
      category: 'Look 9', 
      description: 'Adorable and fun outfits that bring joy to your wardrobe.', 
      price: 'IDR 274.000', 
      items: [getById('tunic_4'), getById('skirt_5')] 
    },
    { 
      id: 10, 
      image: '/images/looks/10.jpg', 
      title: 'Earthy Look Ideas', 
      category: 'Look 10', 
      description: 'Warm tones and natural vibes for a grounded aesthetic.', 
      price: 'IDR 227.000', 
      items: [getById('outer_4'), getById('pants_6')] 
    },
    { 
      id: 11, 
      image: '/images/looks/11.jpg', 
      title: 'Elegant Look Ideas', 
      category: 'Look 11', 
      description: 'Dark, mysterious, and undeniably chic for night occasions.', 
      price: 'IDR 213.000', 
      items: [getById('dress_7'), getById('outer_5')] 
    },
    { 
      id: 12, 
      image: '/images/looks/12.jpg', 
      title: 'Midnight Look Ideas', 
      category: 'Look 12', 
      description: 'Refined and sophisticated. Dress to impress.', 
      price: 'IDR 238.000', 
      items: [getById('dress_9'), getById('skirt_6')] 
    },
  ];

  const look = looksData.find((l) => l.id === lookNumber) || looksData[0];

  const handleAddToCart = () => {
    setIsAdding(true);
    look.items.forEach((item) => {
      if (item) onAddToCart(item, quantity, selectedColor, 'All Size', `Look: ${look.title}`);
    });
    showToast('Produk berhasil ditambahkan ke keranjang');
    setTimeout(() => setIsAdding(false), 800);
  };

  const handleBuyNow = () => {
    look.items.forEach((item) => {
      if (item) onAddToCart(item, quantity, selectedColor, 'All Size', `Look: ${look.title}`);
    });
    navigate('/checkout');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="min-h-screen bg-white">

      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center">
          <button
            type="button"
            onClick={onBack}
            className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity cursor-pointer">
            <ArrowLeft size={24} />
          </button>
          <span className="font-serif text-xl font-medium ml-2">Look Details</span>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">

          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-brand-neutral1">
              <img src={look.image} alt={look.title} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">{look.category}</span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">{look.title}</h1>
            <span className="text-xl font-medium text-brand-dark mb-8">{look.price}</span>

            <hr className="border-gray-100 mb-8" />

            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-4">Color</span>
              <div className="flex gap-3">
                <button type="button" onClick={() => setSelectedColor('Brown')} className={`w-8 h-8 rounded-full border-2 ${selectedColor === 'Brown' ? 'border-brand-dark' : 'border-transparent'} flex items-center justify-center p-0.5`}>
                  <div className="w-full h-full rounded-full bg-[#8B6914] border border-black/10" />
                </button>
                <button type="button" onClick={() => setSelectedColor('Cream')} className={`w-8 h-8 rounded-full border-2 ${selectedColor === 'Cream' ? 'border-brand-dark' : 'border-transparent'} flex items-center justify-center p-0.5`}>
                  <div className="w-full h-full rounded-full bg-[#D4C5A9] border border-black/10" />
                </button>
              </div>
            </div>

            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-4">Ukuran</span>
              <button type="button" className="px-6 py-2 border border-brand-dark rounded-md text-sm font-medium text-brand-dark">All Size</button>
            </div>

            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-4">Quantity</span>
              <div className="inline-flex items-center border border-gray-200 rounded-md">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-gray-500 hover:text-brand-dark transition-colors"><Minus size={16} /></button>
                <span className="w-12 text-center text-sm font-medium text-brand-dark">{quantity}</span>
                <button type="button" onClick={() => setQuantity(quantity + 1)} className="p-3 text-gray-500 hover:text-brand-dark transition-colors"><Plus size={16} /></button>
              </div>
            </div>

            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-2">Pengiriman</span>
              <p className="text-sm text-gray-600">Tersedia via JNE, J&T Express, dan pengambilan di toko. Pilih saat checkout.</p>
            </div>

            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-2">Email (Untuk Konfirmasi Pesanan)</span>
              <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-shadow" />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{look.description}</p>
              <p className="text-xs text-gray-500 italic">{look.items.map(i => i?.name).filter(Boolean).join(' + ')}</p>
            </div>

            <div className="flex flex-col gap-3">
              <button type="button" onClick={handleAddToCart} disabled={isAdding} className="w-full py-4 border border-brand-dark rounded-lg text-xs font-bold tracking-[0.15em] uppercase text-brand-dark hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                <ShoppingBag size={18} />
                {isAdding ? 'Adding...' : 'Add To Cart'}
              </button>
              <button type="button" onClick={handleBuyNow} className="w-full py-4 bg-brand-dark rounded-lg text-xs font-bold tracking-[0.15em] uppercase text-white hover:bg-brand-accent transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}