import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCustomToast } from '../components/CustomToast';
import { Footer } from '../components/Footer';
import { allProducts, Product } from '../utils/data';

interface LooksDetailPageProps {
  onAddToCart: (
    product: Product,
    quantity?: number,
    color?: string,
    size?: string,
    bundleName?: string
  ) => void;
}

export function LooksDetailPage({ onAddToCart }: LooksDetailPageProps) {
  const { lookId } = useParams<{ lookId: string }>();
  const navigate = useNavigate();
  const { showToast } = useCustomToast();
  const [isAdding, setIsAdding] = useState(false);

  const lookNumber = lookId ? parseInt(lookId.replace('look-', '')) : 1;
  const getById = (id: string) => allProducts.find(p => p.id === id)!;

  const looksData = [
    {
      id: 1,
      image: '/images/look/1.jpg',
      title: 'Retro Look Ideas',
      category: 'Look 1',
      description: 'Inspired by the timeless retro era. Bold, expressive, and full of personality.',
      items: [
        { ...getById('outer_1'), price: 'IDR 110.000' },
        { ...getById('skirt_1'), price: 'IDR 139.000' },
      ]
    },
    {
      id: 2,
      image: '/images/look/2.jpg',
      title: 'Casual Look Ideas',
      category: 'Look 2',
      description: 'Effortlessly cool and comfortable. Perfect for everyday adventures.',
      items: [
        { ...getById('blouse_1'), price: 'IDR 136.000' },
        { ...getById('pants_1'), price: 'IDR 129.000' },
      ]
    },
    {
      id: 3,
      image: '/images/look/3.jpg',
      title: 'Latest Look Ideas',
      category: 'Look 3',
      description: 'Stay ahead of the trends with our latest curated styles.',
      items: [
        { ...getById('dress_1'), price: 'IDR 225.000' },
        { ...getById('outer_2'), price: 'IDR 139.000' },
      ]
    },
    {
      id: 4,
      image: '/images/look/4.jpg',
      title: 'Feminine Look Ideas',
      category: 'Look 4',
      description: 'Soft, graceful, and utterly charming. Celebrate your femininity.',
      items: [
        { ...getById('dress_2'), price: 'IDR 189.000' },
        { ...getById('skirt_2'), price: 'IDR 139.000' },
      ]
    },
    {
      id: 5,
      image: '/images/look/5.jpg',
      title: 'Weekend Look Ideas',
      category: 'Look 5',
      description: 'Relaxed yet stylish looks for your days off.',
      items: [
        { ...getById('tunic_1'), price: 'IDR 139.000' },
        { ...getById('pants_2'), price: 'IDR 99.000' },
      ]
    },
    {
      id: 6,
      image: '/images/look/6.jpg',
      title: 'Daily Look Ideas',
      category: 'Look 6',
      description: 'Simple and chic outfits for your everyday routine.',
      items: [
        { ...getById('blouse_3'), price: 'IDR 146.000' },
        { ...getById('skirt_3'), price: 'IDR 99.000' },
      ]
    },
    {
      id: 7,
      image: '/images/look/7.jpg',
      title: 'Pinky Look Ideas',
      category: 'Look 7',
      description: 'Sweet and playful with a touch of pink energy.',
      items: [
        { ...getById('sweater_1'), price: 'IDR 139.000' },
        { ...getById('skirt_4'), price: 'IDR 166.000' },
      ]
    },
    {
      id: 8,
      image: '/images/look/8.jpg',
      title: 'Clean Look Ideas',
      category: 'Look 8',
      description: 'Minimalist and fresh. Less is more.',
      items: [
        { ...getById('blouse_6'), price: 'IDR 115.000' },
        { ...getById('pants_3'), price: 'IDR 99.000' },
      ]
    },
    {
      id: 9,
      image: '/images/look/9.jpg',
      title: 'Cute Look Ideas',
      category: 'Look 9',
      description: 'Adorable and fun outfits that bring joy to your wardrobe.',
      items: [
        { ...getById('tunic_4'), price: 'IDR 159.000' },
        { ...getById('skirt_5'), price: 'IDR 149.000' },
      ]
    },
    {
      id: 10,
      image: '/images/look/10.jpg',
      title: 'Earthy Look Ideas',
      category: 'Look 10',
      description: 'Warm tones and natural vibes for a grounded aesthetic.',
      items: [
        { ...getById('outer_4'), price: 'IDR 146.000' },
        { ...getById('pants_6'), price: 'IDR 186.000' },
      ]
    },
    {
      id: 11,
      image: '/images/look/11.jpg',
      title: 'Elegant Look Ideas',
      category: 'Look 11',
      description: 'Dark, mysterious, and undeniably chic for night occasions.',
      items: [
        { ...getById('dress_7'), price: 'IDR 215.000' },
        { ...getById('outer_5'), price: 'IDR 136.000' },
      ]
    },
    {
      id: 12,
      image: '/images/look/12.jpg',
      title: 'Midnight Look Ideas',
      category: 'Look 12',
      description: 'Refined and sophisticated. Dress to impress.',
      items: [
        { ...getById('dress_9'), price: 'IDR 220.000' },
        { ...getById('skirt_6'), price: 'IDR 139.000' },
      ]
    },
  ];

  const look = looksData.find((l) => l.id === lookNumber) || looksData[0];

  const calculateTotal = () => {
    return look.items.reduce((total, item) => {
      const numericPrice = parseInt((item.price || 'IDR 0').replace(/[^0-9]/g, ''));
      return total + numericPrice;
    }, 0);
  };

  const formatCurrency = (val: number) =>
    `IDR ${new Intl.NumberFormat('id-ID').format(val)}`;

  const handleAddToCart = () => {
    setIsAdding(true);
    look.items.forEach((item) => {
      onAddToCart(item, 1, 'Default', 'All Size', `Look: ${look.title}`);
    });
    showToast('Produk ditambahkan ke keranjang');
    setTimeout(() => setIsAdding(false), 800);
  };

  const handleBuyNow = () => {
    look.items.forEach((item) => {
      onAddToCart(item, 1, 'Default', 'All Size', `Look: ${look.title}`);
    });
    navigate('/checkout');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white">

      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
            <ArrowLeft size={24} />
          </button>
          <span className="font-serif text-xl font-medium ml-2">
            Look Details
          </span>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left: Main Image */}
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

          {/* Right: Details & Items */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-10">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">
                {look.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
                {look.title}
              </h1>
              <p className="text-gray-500 leading-relaxed">
                {look.description}
              </p>
            </div>

            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-6 border-b border-gray-100 pb-4">
              Items in this look ({look.items.length})
            </h3>

            <div className="flex flex-col gap-4 mb-12">
              {look.items.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors bg-gray-50/50 cursor-pointer">
                  <img
                    src={item.imageMain}
                    alt={item.name}
                    className="w-20 h-28 object-cover rounded-lg bg-gray-200" />
                  <div className="flex flex-col justify-center flex-1">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                      {item.series}
                    </span>
                    <h4 className="text-sm font-bold text-brand-dark mb-2">
                      {item.name}
                    </h4>
                    <span className="text-sm font-medium text-brand-dark">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Summary & Actions */}
            <div className="mt-auto bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="border-b border-gray-100 pb-4 mb-4 flex justify-between items-center">
                <span className="text-gray-500 text-sm">Total Harga</span>
                <span className="text-xl font-bold text-brand-dark">
                  {formatCurrency(calculateTotal())}
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className="w-full py-4 border border-brand-dark text-brand-dark rounded-xl text-xs font-bold tracking-[0.15em] uppercase hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 mb-3">
                {isAdding ? 'Adding...' : <><ShoppingBag size={18} /> Add to Cart</>}
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full py-4 bg-brand-dark text-white rounded-xl text-xs font-bold tracking-[0.15em] uppercase hover:bg-brand-accent transition-colors">
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