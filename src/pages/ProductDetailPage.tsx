import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShoppingBag,
  Minus,
  Plus,
  Heart
} from 'lucide-react';

import { useCustomToast } from '../components/CustomToast';
import { allProducts, Product } from '../utils/data';
import { useEscapeBack } from '../hooks/useEscapeBack';
import { useLanguage } from '../context/LanguageContext';

import { SeoHelmet } from '../components/SeoHelmet';

import {
  ProductJsonLd
} from '../components/JsonLd';

import {
  BreadcrumbJsonLd
} from '../components/BreadcrumbJsonLd';

interface ProductDetailPageProps {
  onAddToCart: (
    product: Product,
    quantity: number,
    color: string,
    size: string
  ) => void;

  wishlist: Product[];

  onToggleWishlist: (product: Product) => void;

  onOpenWishlist: () => void;
}

export function ProductDetailPage({
  onAddToCart,
  wishlist,
  onToggleWishlist,
  onOpenWishlist
}: ProductDetailPageProps) {

  useEscapeBack();

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const location = useLocation();

  const { showToast } = useCustomToast();

  const { t } = useLanguage();

  const [selectedColor, setSelectedColor] =
    useState('Brown');

  const [quantity, setQuantity] =
    useState(1);

  const [email, setEmail] =
    useState('');

  const product =
    allProducts.find(item => item.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">
          {t('product_detail_not_found')}
        </p>
      </div>
    );
  }

  const price =
    product.price || 'IDR 195.000';

  const isWishlisted =
    wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    onAddToCart(
      product,
      quantity,
      selectedColor,
      'All Size'
    );

    showToast(
      t('product_detail_added_to_cart')
    );
  };

  const handleBuyNow = () => {
    onAddToCart(
      product,
      quantity,
      selectedColor,
      'All Size'
    );

    navigate('/checkout');
  };

  const handleBack = () => {
    if (location.state?.fromModal === 'looks') {

      navigate('/', {
        state: {
          openLooks: true
        }
      });

    } else if (
      location.state?.fromModal === 'allProducts'
    ) {

      navigate('/', {
        state: {
          openAllProducts: true
        }
      });

    } else {
      navigate(-1);
    }
  };

  return (
    <>
      {/* ================= SEO ================= */}
      <SeoHelmet
        title={`${product.name} | Fashion Wanita Ninetynine Madiun`}
        description={`${product.name} fashion wanita terbaru dari Ninetynine Madiun dengan harga ${price}. Pengiriman seluruh Indonesia.`}
        keywords={`${product.name}, fashion wanita, toko baju wanita madiun, dress wanita`}
        url={`https://ninetyninestore-nine.vercel.app/product/${product.id}`}
        image={product.imageMain}
      />

      {/* ================= PRODUCT JSON LD ================= */}
      <ProductJsonLd
        id={product.id}
        name={product.name}
        description={`${product.name} fashion wanita terbaru dari Ninetynine Madiun.`}
        price={price}
        image={product.imageMain}
        category={product.category}
      />

      {/* ================= BREADCRUMB JSON LD ================= */}
      <BreadcrumbJsonLd
        items={[
          {
            name: 'Home',
            url: 'https://ninetyninestore-nine.vercel.app'
          },
          {
            name: product.category,
            url:
              `https://ninetyninestore-nine.vercel.app/category/${product.category}`
          },
          {
            name: product.name,
            url:
              `https://ninetyninestore-nine.vercel.app/product/${product.id}`
          }
        ]}
      />

      {/* ================= PAGE ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white pb-24 relative"
      >

        {/* ================= HEADER ================= */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">

          <div className="max-w-[1440px] mx-auto flex items-center justify-between">

            <div className="flex items-center">

              <button
                onClick={handleBack}
                className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity"
              >
                <ArrowLeft size={24} />
              </button>

              <span className="font-serif text-xl font-medium ml-2">
                {t('product_detail_title')}
              </span>

            </div>

            <div className="flex items-center gap-3">

              <button
                onClick={() => {
                  onToggleWishlist(product);

                  showToast(
                    isWishlisted
                      ? t('product_detail_wishlist_removed')
                      : t('product_detail_wishlist_added')
                  );
                }}
                className="relative p-2 text-brand-dark hover:opacity-70 transition-opacity"
              >

                <Heart
                  size={22}
                  className={
                    isWishlisted
                      ? 'fill-brand-accent stroke-brand-accent'
                      : ''
                  }
                />

              </button>

            </div>

          </div>

        </header>

        {/* ================= CONTENT ================= */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">

          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">

            {/* ================= IMAGE ================= */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">

              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-brand-neutral1">

                <img
                  src={product.imageMain}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-brand-neutral1">

                  <img
                    src={product.imageMain}
                    alt={`${product.name} view 1`}
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-brand-neutral1">

                  <img
                    src={product.imageHover}
                    alt={`${product.name} view 2`}
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>

            </div>

            {/* ================= DETAIL ================= */}
            <div className="w-full md:w-1/2 flex flex-col">

              <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                {product.series}
              </span>

              <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                {product.name}
              </h1>

              <span className="text-xl font-medium text-brand-dark mb-8">
                {price}
              </span>

              <hr className="border-gray-100 mb-8" />

              {/* COLOR */}
              <div className="mb-8">

                <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-4">
                  {t('product_detail_color')}
                </span>

                <div className="flex gap-3">

                  <button
                    onClick={() => setSelectedColor('Brown')}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === 'Brown'
                        ? 'border-brand-dark'
                        : 'border-transparent'
                    } flex items-center justify-center p-0.5`}
                  >
                    <div className="w-full h-full rounded-full bg-[#8B6914] border border-black/10" />
                  </button>

                  <button
                    onClick={() => setSelectedColor('Cream')}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === 'Cream'
                        ? 'border-brand-dark'
                        : 'border-transparent'
                    } flex items-center justify-center p-0.5`}
                  >
                    <div className="w-full h-full rounded-full bg-[#D4C5A9] border border-black/10" />
                  </button>

                </div>

              </div>

              {/* SIZE */}
              <div className="mb-8">

                <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-4">
                  {t('product_detail_size')}
                </span>

                <button className="px-6 py-2 border border-brand-dark rounded-md text-sm font-medium text-brand-dark">
                  {t('product_detail_all_size')}
                </button>

              </div>

              {/* QUANTITY */}
              <div className="mb-8">

                <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-4">
                  {t('product_detail_quantity')}
                </span>

                <div className="inline-flex items-center border border-gray-200 rounded-md">

                  <button
                    onClick={() =>
                      setQuantity(Math.max(1, quantity - 1))
                    }
                    className="p-3 text-gray-500 hover:text-brand-dark transition-colors"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="w-12 text-center text-sm font-medium text-brand-dark">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-gray-500 hover:text-brand-dark transition-colors"
                  >
                    <Plus size={16} />
                  </button>

                </div>

              </div>

              {/* SHIPPING */}
              <div className="mb-8">

                <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-2">
                  {t('product_detail_shipping')}
                </span>

                <p className="text-sm text-gray-600">
                  {t('product_detail_shipping_desc')}
                </p>

              </div>

              {/* EMAIL */}
              <div className="mb-8">

                <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-2">
                  {t('product_detail_email_label')}
                </span>

                <input
                  type="email"
                  placeholder={t('product_detail_email_placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-shadow"
                />

              </div>

              {/* DESCRIPTION */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">

                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {product.name} adalah fashion wanita terbaru dari Ninetynine Madiun dengan desain modern, nyaman digunakan, dan cocok untuk aktivitas casual maupun formal.
                </p>

                <p className="text-xs text-gray-500 italic">
                  {t('product_detail_material')}
                </p>

              </div>

              {/* BUTTON */}
              <div className="flex flex-col gap-3">

                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 border border-brand-dark rounded-lg text-xs font-bold tracking-[0.15em] uppercase text-brand-dark hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center gap-2"
                >

                  <ShoppingBag size={18} />

                  {t('product_detail_add_to_cart')}

                </button>

                <button
                  onClick={handleBuyNow}
                  className="w-full py-4 bg-brand-dark rounded-lg text-xs font-bold tracking-[0.15em] uppercase text-white hover:bg-brand-accent transition-colors"
                >
                  {t('product_detail_buy_now')}
                </button>

              </div>

            </div>

          </div>

        </div>

      </motion.div>
    </>
  );
}