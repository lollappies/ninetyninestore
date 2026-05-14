import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Info, Heart } from 'lucide-react';
import { useCustomToast } from '../components/CustomToast';
import { Footer } from '../components/Footer';
import { allProducts, Product } from '../utils/data';
import { useEscapeBack } from '../hooks/useEscapeBack';
import { useLanguage } from '../context/LanguageContext';

interface SaleDetailPageProps {
  onAddToCart: (
    product: Product,
    quantity?: number,
    color?: string,
    size?: string,
    bundleName?: string
  ) => void;
  wishlist: Product[];
  onToggleWishlist: (product: Product) => void;
  onOpenWishlist: () => void;
}

export function SaleDetailPage({ onAddToCart, wishlist, onToggleWishlist, onOpenWishlist }: SaleDetailPageProps) {
  const { lookId } = useParams<{ lookId: string }>();
  const navigate = useNavigate();
  const { showToast } = useCustomToast();
  const { t } = useLanguage();
  const [isAdding, setIsAdding] = useState(false);
  useEscapeBack();

  const lookNumber = lookId ? parseInt(lookId.replace('look-', '')) : 1;
  const getById = (id: string) => allProducts.find(p => p.id === id)!;

  const looksData = [
    {
      id: 1,
      image: '/images/sale/sale1.jpg',
      title: t('sale_casual_title'),
      description: t('sale_casual_desc'),
      items: [
        { ...getById('sale2'), price: 'IDR 133.000' },
        { ...getById('sale3'), price: 'IDR 156.000' },
      ]
    },
    {
      id: 2,
      image: '/images/sale/sale4.jpg',
      title: t('sale_feminim_title'),
      description: t('sale_feminim_desc'),
      items: [
        { ...getById('sale5'), price: 'IDR 145.000' },
        { ...getById('sale6'), price: 'IDR 130.000' },
      ]
    },
    {
      id: 3,
      image: '/images/sale/sale7.jpeg',
      title: t('sale_smart_casual_title'),
      description: t('sale_smart_casual_desc'),
      items: [
        { ...getById('sale8'), price: 'IDR 108.000' },
        { ...getById('sale9'), price: 'IDR 139.000' },
      ]
    },
    {
      id: 4,
      image: '/images/sale/sale10.jpeg',
      title: t('sale_comfy_title'),
      description: t('sale_comfy_desc'),
      items: [
        { ...getById('sale11'), price: 'IDR 144.000' },
        { ...getById('sale12'), price: 'IDR 99.000' },
      ]
    }
  ];

  const look = looksData.find((l) => l.id === lookNumber) || looksData[0];
  const isLookWishlisted = look.items.some(item => wishlist.some(w => w.id === item.id));

  const calculateTotal = () => {
    return look.items.reduce((total, item) => {
      const priceStr = item.price || 'IDR 0';
      const numericPrice = parseInt(priceStr.replace(/[^0-9]/g, ''));
      return total + numericPrice;
    }, 0);
  };

  const originalTotal = calculateTotal();
  const discountPercentage = 20;
  const bundleTotal = Math.floor(originalTotal * (1 - discountPercentage / 100));

  const formatCurrency = (val: number) =>
    `IDR ${new Intl.NumberFormat('id-ID').format(val)}`;

  const handleAddBundleToCart = () => {
    setIsAdding(true);
    look.items.forEach((item) => {
      onAddToCart(item, 1, 'Default', 'All Size', `Bundle: ${look.title}`);
    });
    showToast(t('sale_detail_bundle_added'));
    setTimeout(() => setIsAdding(false), 800);
  };

  const handleBuyNow = () => {
    look.items.forEach((item) => {
      onAddToCart(item, 1, 'Default', 'All Size', `Bundle: ${look.title}`);
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
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
              <ArrowLeft size={24} />
            </button>
            <span className="font-serif text-xl font-medium ml-2">
              {t('sale_detail_title')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                look.items.forEach(item => onToggleWishlist(item));
                showToast(isLookWishlisted ? t('sale_detail_wishlist_removed') : t('sale_detail_wishlist_added'));
              }}
              className="p-2 text-brand-dark hover:opacity-70 transition-opacity">
              <Heart
                size={22}
                className={isLookWishlisted ? 'fill-brand-accent stroke-brand-accent' : ''}
              />
            </button>
          </div>
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
                <div className="absolute top-4 left-4 bg-brand-accent text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                  {t('sale_detail_bundle_label')} -{discountPercentage}%
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
                    {t('sale_detail_special_pricing')}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {t('sale_detail_special_pricing_desc').replace('{discount}', String(discountPercentage))}
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-6 border-b border-gray-100 pb-4">
              {t('sale_detail_items_in_look')} ({look.items.length})
            </h3>

            <div className="flex flex-col gap-6 mb-12">
              {look.items.map((item, idx) => {
                const itemPrice = item.price || 'IDR 0';
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors bg-gray-50/50">
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
                      <span className="text-sm text-gray-600">{itemPrice}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pricing Summary & Action */}
            <div className="mt-auto bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-500 text-sm">{t('sale_detail_original_total')}</span>
                <span className="text-gray-400 line-through text-sm">
                  {formatCurrency(originalTotal)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-green-600">{t('sale_detail_discount')}</span>
                <span className="text-sm text-green-600">
                  -{formatCurrency(originalTotal - bundleTotal)}
                </span>
              </div>
              <div className="border-t border-gray-100 pt-3 flex justify-between items-center mb-6">
                <span className="font-bold text-brand-dark">{t('sale_detail_bundle_price')}</span>
                <span className="text-2xl font-bold text-brand-accent">
                  {formatCurrency(bundleTotal)}
                </span>
              </div>

              <button
                onClick={handleAddBundleToCart}
                disabled={isAdding}
                className="w-full py-4 border border-brand-dark text-brand-dark rounded-xl text-xs font-bold tracking-[0.15em] uppercase hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                {isAdding
                  ? t('sale_detail_adding')
                  : <><ShoppingBag size={18} /> {t('sale_detail_add_bundle')}</>}
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full py-4 bg-brand-dark text-white rounded-xl text-xs font-bold tracking-[0.15em] uppercase hover:bg-brand-accent transition-colors mt-3">
                {t('product_detail_buy_now')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}