import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Minus, Plus } from 'lucide-react';
import { useCustomToast } from '../components/CustomToast';
import { allProducts, Product } from '../utils/data';
interface ProductDetailPageProps {
  onAddToCart: (
  product: Product,
  quantity: number,
  color: string,
  size: string)
  => void;
}
export function ProductDetailPage({ onAddToCart }: ProductDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { showToast } = useCustomToast();

  const [selectedColor, setSelectedColor] = useState('Brown');
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');

  const product = allProducts.find(
    item => item.id === id
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">Product not found.</p>
      </div>
    );
  }
  const price = product.price || 'IDR 195.000';
  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedColor, 'All Size');
    showToast('Produk berhasil ditambahkan ke keranjang');
  };
  const handleBuyNow = () => {
    onAddToCart(product, quantity, selectedColor, 'All Size');
    navigate('/checkout');
  };
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      className="min-h-screen bg-white pb-24 relative">
      
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
            
            <ArrowLeft size={24} />
          </button>
          <span className="font-serif text-xl font-medium ml-2">
            Detail Produk
          </span>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Left: Images */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-brand-neutral1">
              <img
                src={product.imageMain}
                alt={product.name}
                className="w-full h-full object-cover" />
              
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-brand-neutral1">
                <img
                  src={product.imageMain}
                  alt={`${product.name} view 1`}
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-brand-neutral1">
                <img
                  src={product.imageHover}
                  alt={`${product.name} view 2`}
                  className="w-full h-full object-cover" />
                
              </div>
            </div>
          </div>

          {/* Right: Details */}
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

            {/* Color Selection */}
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-4">
                Color
              </span>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedColor('Brown')}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === 'Brown' ? 'border-brand-dark' : 'border-transparent'} flex items-center justify-center p-0.5`}>
                  
                  <div className="w-full h-full rounded-full bg-[#8B6914] border border-black/10" />
                </button>
                <button
                  onClick={() => setSelectedColor('Cream')}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === 'Cream' ? 'border-brand-dark' : 'border-transparent'} flex items-center justify-center p-0.5`}>
                  
                  <div className="w-full h-full rounded-full bg-[#D4C5A9] border border-black/10" />
                </button>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-4">
                Ukuran
              </span>
              <button className="px-6 py-2 border border-brand-dark rounded-md text-sm font-medium text-brand-dark">
                All Size
              </button>
            </div>

            {/* Quantity Selection */}
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-4">
                Quantity
              </span>
              <div className="inline-flex items-center border border-gray-200 rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-gray-500 hover:text-brand-dark transition-colors">
                  
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-brand-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-gray-500 hover:text-brand-dark transition-colors">
                  
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-2">
                Pengiriman
              </span>
              <p className="text-sm text-gray-600">
                Tersedia via JNE, J&T Express, dan pengambilan di toko. Pilih
                saat checkout.
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 block mb-2">
                Email (Untuk Konfirmasi Pesanan)
              </span>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-shadow" />
              
            </div>

            {/* Description Box */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {product.name} dengan detail bordir cantik, flow dress yang
                anggun dan fleksibel.
              </p>
              <p className="text-xs text-gray-500 italic">
                Material: Crepe Bordir
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleAddToCart}
                className="w-full py-4 border border-brand-dark rounded-lg text-xs font-bold tracking-[0.15em] uppercase text-brand-dark hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center gap-2">
                
                <ShoppingBag size={18} />
                Add To Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full py-4 bg-brand-dark rounded-lg text-xs font-bold tracking-[0.15em] uppercase text-white hover:bg-brand-accent transition-colors">
                
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>);

}