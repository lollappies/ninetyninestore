import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { CartItem } from '../App';
import { useLocation } from 'react-router-dom';
interface CheckoutPageProps {
  cartItems: CartItem[];
}
export function CheckoutPage({ cartItems }: CheckoutPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const checkoutItems = location.state?.checkoutItems || cartItems;

  const [shippingMethod, setShippingMethod] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const isFormComplete = formData.name.trim() !== '' && formData.email.trim() !== '' && formData.phone.trim() !== '' && formData.address.trim() !== '';
  const canProceed = isFormComplete && !!shippingMethod && !!paymentMethod;
  const subtotal = checkoutItems.reduce((acc: number, item: CartItem) => {
    const priceStr = item.product.price?.replace(/[^0-9]/g, '') || '0';
    return acc + parseInt(priceStr) * item.quantity;
  }, 0);
  const shippingCost = shippingMethod === 'jne' ? 12000 : shippingMethod === 'jnt' ? 15000 : 0;
  const adminFee = paymentMethod === 'bca' || paymentMethod === 'mandiri' ? 2500 : 0;
  const handlingFee = 10000;
  const grandTotal = subtotal + shippingCost + adminFee + handlingFee;
  const formatCurrency = (val: number) => new Intl.NumberFormat('id-ID').format(val);
  const handleProceedToPayment = () => {
    if (!canProceed) return;
    navigate('/payment', {
      state: {
        shippingMethod,
        paymentMethod,
        cartItems: checkoutItems,
        customerInfo: formData,
        subtotal,
        shippingCost,
        adminFee,
        handlingFee,
        grandTotal
      }
    });
  };
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
              <ArrowLeft size={24} />
            </button>
            <span className="font-serif text-xl font-medium ml-2">
              Checkout
            </span>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-brand-dark text-white flex items-center justify-center text-[10px] font-bold">
              1
            </div>
            <div className="w-4 h-[1px] bg-gray-300"></div>
            <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-[10px] font-bold">
              2
            </div>
            <div className="w-4 h-[1px] bg-gray-300"></div>
            <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-[10px] font-bold">
              3
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">
        {/* Data Penerima */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">
            Data Penerima
          </h2>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1.5">
                Nama Lengkap *
              </label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({
              ...formData,
              name: e.target.value
            })} placeholder="Masukkan nama lengkap" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-1.5">
                Email *
              </label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({
              ...formData,
              email: e.target.value
            })} placeholder="email@example.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
              <p className="text-[10px] text-gray-400 mt-1.5">
                Konfirmasi pesanan akan dikirim ke email ini
              </p>
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-1.5">
                No. HP / WhatsApp
              </label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({
              ...formData,
              phone: e.target.value
            })} placeholder="08xxxxxxxxxxx" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-1.5">
                Alamat Lengkap *
              </label>
              <textarea value={formData.address} onChange={(e) => setFormData({
              ...formData,
              address: e.target.value
            })} placeholder="Jl. Contoh No. 1, Kelurahan, Kecamatan, Kota, Kode Pos" rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark resize-none" />
            </div>
          </div>
        </div>

        {/* Metode Pengiriman */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">
            Metode Pengiriman
          </h2>

          <div className="flex flex-col gap-3">
            <label onClick={() => setShippingMethod('jne')} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${shippingMethod === 'jne' ? 'border-brand-dark bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${shippingMethod === 'jne' ? 'border-brand-dark' : 'border-gray-300'}`}>
                  {shippingMethod === 'jne' && <div className="w-2 h-2 rounded-full bg-brand-dark" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-brand-dark">
                    JNE Regular
                  </div>
                  <div className="text-xs text-gray-500">
                    Estimasi 2-3 hari kerja
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-red-500 line-through">
                  Rp15.000
                </span>
                <span className="text-sm font-bold text-brand-dark">
                  Rp12.000
                </span>
              </div>
            </label>

            <label onClick={() => setShippingMethod('jnt')} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${shippingMethod === 'jnt' ? 'border-brand-dark bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${shippingMethod === 'jnt' ? 'border-brand-dark' : 'border-gray-300'}`}>
                  {shippingMethod === 'jnt' && <div className="w-2 h-2 rounded-full bg-brand-dark" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-brand-dark">
                    J&T Express
                  </div>
                  <div className="text-xs text-gray-500">
                    Estimasi 1-2 hari kerja
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-red-500 line-through">
                  Rp17.000
                </span>
                <span className="text-sm font-bold text-brand-dark">
                  Rp15.000
                </span>
              </div>
            </label>

            <label onClick={() => setShippingMethod('store')} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${shippingMethod === 'store' ? 'border-brand-dark bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${shippingMethod === 'store' ? 'border-brand-dark' : 'border-gray-300'}`}>
                  {shippingMethod === 'store' && <div className="w-2 h-2 rounded-full bg-brand-dark" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-brand-dark">
                    Ambil di Toko
                  </div>
                  <div className="text-xs text-gray-500">
                    Tersedia di semua cabang Ninetynine
                  </div>
                </div>
              </div>
              <span className="text-sm font-bold text-brand-accent">
                Gratis
              </span>
            </label>
          </div>
        </div>

        {/* Metode Pembayaran */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">
            Metode Pembayaran
          </h2>

          <div className="flex flex-col gap-3">
            <label onClick={() => setPaymentMethod('bca')} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${paymentMethod === 'bca' ? 'border-brand-dark bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === 'bca' ? 'border-brand-dark' : 'border-gray-300'}`}>
                  {paymentMethod === 'bca' && <div className="w-2 h-2 rounded-full bg-brand-dark" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-brand-dark">
                    Transfer BCA
                  </div>
                  <div className="text-xs text-gray-500">
                    Virtual Account BCA
                  </div>
                </div>
              </div>
              <div className="px-2 py-1 bg-[#0066AE] text-white text-[10px] font-bold rounded">
                BCA
              </div>
            </label>

            <label onClick={() => setPaymentMethod('mandiri')} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${paymentMethod === 'mandiri' ? 'border-brand-dark bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === 'mandiri' ? 'border-brand-dark' : 'border-gray-300'}`}>
                  {paymentMethod === 'mandiri' && <div className="w-2 h-2 rounded-full bg-brand-dark" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-brand-dark">
                    Transfer Mandiri
                  </div>
                  <div className="text-xs text-gray-500">
                    Virtual Account Mandiri
                  </div>
                </div>
              </div>
              <div className="px-2 py-1 bg-[#003D79] text-white text-[10px] font-bold rounded">
                MDR
              </div>
            </label>

            <label onClick={() => setPaymentMethod('qris')} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${paymentMethod === 'qris' ? 'border-brand-dark bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === 'qris' ? 'border-brand-dark' : 'border-gray-300'}`}>
                  {paymentMethod === 'qris' && <div className="w-2 h-2 rounded-full bg-brand-dark" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-brand-dark">
                    QRIS
                  </div>
                  <div className="text-xs text-gray-500">
                    Scan QR dari semua e-wallet & m-banking
                  </div>
                </div>
              </div>
              <div className="px-2 py-1 bg-[#ED1C24] text-white text-[10px] font-bold rounded">
                QRIS
              </div>
            </label>
          </div>
        </div>

{/* Produk yang Dipesan */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">
            Produk yang Dipesan
          </h2>
          <div className="flex flex-col gap-4">
            {checkoutItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center">
                <img
                  src={item.product.imageMain}
                  alt={item.product.name}
                  className="w-16 h-20 object-cover rounded-lg bg-gray-100" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-brand-dark">{item.product.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.product.series}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Warna: {item.color} · Ukuran: {item.size}</p>
                  {item.bundleName && (
                    <p className="text-xs text-brand-accent mt-0.5">{item.bundleName}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">x{item.quantity}</p>
                  <p className="text-sm font-medium text-brand-dark mt-0.5">
                    {item.product.price || '-'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Ringkasan Belanja */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">
            Ringkasan Belanja
          </h2>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">
                Subtotal ({checkoutItems.length} produk)
              </span>
              <span className="font-medium text-brand-dark">
                Rp{formatCurrency(subtotal)}
              </span>
            </div>
            {shippingMethod && <div className="flex justify-between">
                <span className="text-gray-500">Ongkos Kirim</span>
                <span className="font-medium text-brand-dark">
                  {shippingCost === 0 ? 'Gratis' : `Rp${formatCurrency(shippingCost)}`}
                </span>
              </div>}
            {paymentMethod && <div className="flex justify-between">
                <span className="text-gray-500">Biaya Admin</span>
                <span className="font-medium text-brand-dark">
                  {adminFee === 0 ? 'Gratis' : `Rp${formatCurrency(adminFee)}`}
                </span>
              </div>}
            <div className="flex justify-between">
              <span className="text-gray-500">Biaya Penanganan</span>
              <span className="font-medium text-brand-dark">
                Rp{formatCurrency(handlingFee)}
              </span>
            </div>
            <hr className="my-2 border-gray-100" />
            <div className="flex justify-between items-center">
              <span className="font-bold text-brand-dark">Total Bayar</span>
              <span className="text-lg font-bold text-brand-accent">
                Rp{formatCurrency(grandTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Action */}
        <div className="mt-4">
          {!canProceed && <div className="flex flex-col gap-1 mb-3">
              {!isFormComplete}
              {!shippingMethod}
              {!paymentMethod && <p className="text-xs text-red-500 text-center">
                  * Pilih metode pembayaran
                </p>}
            </div>}
          <button onClick={handleProceedToPayment} disabled={!canProceed} className={`w-full py-4 rounded-lg text-xs font-bold tracking-[0.15em] uppercase transition-colors ${canProceed ? 'bg-brand-dark text-white hover:bg-brand-accent' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
            Lanjut Pembayaran
          </button>
        </div>
      </div>
    </motion.div>;
}