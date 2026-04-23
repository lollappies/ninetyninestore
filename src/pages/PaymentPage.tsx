import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Check } from 'lucide-react';
import { useCustomToast } from '../components/CustomToast';
import { CartItem } from '../App';
import { saveOrder } from '../utils/orderStorage';
export function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useCustomToast();
  const {
    shippingMethod = 'jne',
    paymentMethod = 'bca',
    cartItems = [],
    customerInfo = {},
    subtotal = 0,
    shippingCost = 0,
    adminFee = 0,
    handlingFee = 0,
    grandTotal = 0
  } = location.state || {};
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [copied, setCopied] = useState(false);
  // Fallback if grandTotal is not provided
  const fallbackSubtotal = cartItems.reduce((acc: number, item: CartItem) => {
    const priceStr = item.product.price?.replace(/[^0-9]/g, '') || '0';
    return acc + parseInt(priceStr) * item.quantity;
  }, 0);
  const displayTotal = grandTotal || fallbackSubtotal;
  const formattedTotal = new Intl.NumberFormat('id-ID').format(displayTotal);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  const handleCopy = () => {
    const vaNumber =
    paymentMethod === 'mandiri' ? '89508 00816 95014' : '00816 95014 60982';
    navigator.clipboard.writeText(vaNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    showToast('Nomor VA berhasil disalin');
  };
  const handleConfirmPayment = () => {
    const orderData = {
      shippingMethod,
      paymentMethod,
      cartItems,
      customerInfo,
      subtotal: subtotal || fallbackSubtotal,
      shippingCost,
      adminFee,
      handlingFee,
      total: displayTotal,
      orderNumber:
      'NN' +
      Math.floor(Math.random() * 100000000).
      toString().
      padStart(8, '0'),
      orderDate: new Date().toISOString(),
      status: 'selesai' as const
    };
    saveOrder(orderData);
    showToast('Pembayaran berhasil dikonfirmasi');
    navigate('/order-complete', {
      state: orderData
    });
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
      className="min-h-screen bg-gray-50 pb-24">
      
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
              
              <ArrowLeft size={24} />
            </button>
            <span className="font-serif text-xl font-medium ml-2">
              Pembayaran
            </span>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-brand-accent text-white flex items-center justify-center">
              <Check size={14} strokeWidth={3} />
            </div>
            <div className="w-4 h-[2px] bg-brand-dark"></div>
            <div className="w-6 h-6 rounded-full bg-brand-dark text-white flex items-center justify-center text-[10px] font-bold">
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
        {/* Warning Banner */}
        <div className="bg-[#FFF4E5] text-[#B26B00] px-4 py-3 rounded-lg flex items-center gap-2 text-sm font-medium">
          <Clock size={18} />
          Selesaikan pembayaran dalam: {formatTime(timeLeft)}
        </div>

        {/* Total Pembayaran */}
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
          <span className="text-[10px] tracking-[0.15em] uppercase text-gray-500 block mb-2">
            Total Pembayaran
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-accent mb-2">
            IDR {formattedTotal}
          </h2>
          <span className="text-xs text-gray-400">Order #NN58871181</span>
        </div>

        {/* Payment Details */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          {paymentMethod === 'bca' &&
          <>
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1.5 bg-[#0066AE] text-white text-xs font-bold rounded">
                  BCA
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Virtual Account</h3>
                  <p className="text-xs text-gray-500">
                    Salin nomor VA di bawah
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-xs text-gray-500 block mb-2">
                  Nomor Virtual Account
                </span>
                <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                  <span className="font-mono text-xl md:text-2xl font-bold tracking-wider text-brand-dark">
                    00816 95014 60982
                  </span>
                  <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-brand-dark text-white text-xs font-medium rounded-lg hover:bg-brand-accent transition-colors">
                  
                    {copied ? 'Tersalin!' : 'Salin'}
                  </button>
                </div>
              </div>

              <div className="bg-[#EAF5FD] p-4 rounded-lg">
                <h4 className="text-sm font-medium text-[#0066AE] mb-2 flex items-center gap-1">
                  📌 Cara bayar:
                </h4>
                <ol className="text-sm text-[#0066AE] space-y-1.5">
                  <li>1. Buka m-Banking atau ATM BCA</li>
                  <li>2. Pilih Transfer → Virtual Account</li>
                  <li>3. Masukkan nomor VA di atas</li>
                  <li>4. Konfirmasi jumlah & bayar</li>
                </ol>
              </div>
            </>
          }

          {paymentMethod === 'mandiri' &&
          <>
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1.5 bg-[#003D79] text-white text-xs font-bold rounded">
                  MDR
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Virtual Account</h3>
                  <p className="text-xs text-gray-500">
                    Salin nomor VA di bawah
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-xs text-gray-500 block mb-2">
                  Nomor Virtual Account
                </span>
                <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                  <span className="font-mono text-xl md:text-2xl font-bold tracking-wider text-brand-dark">
                    89508 00816 95014
                  </span>
                  <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-brand-dark text-white text-xs font-medium rounded-lg hover:bg-brand-accent transition-colors">
                  
                    {copied ? 'Tersalin!' : 'Salin'}
                  </button>
                </div>
              </div>

              <div className="bg-[#EAF5FD] p-4 rounded-lg">
                <h4 className="text-sm font-medium text-[#003D79] mb-2 flex items-center gap-1">
                  📌 Cara bayar:
                </h4>
                <ol className="text-sm text-[#003D79] space-y-1.5">
                  <li>1. Buka Livin' by Mandiri atau ATM Mandiri</li>
                  <li>2. Pilih Bayar → Multi Payment</li>
                  <li>3. Masukkan nomor VA di atas</li>
                  <li>4. Konfirmasi jumlah & bayar</li>
                </ol>
              </div>
            </>
          }

          {paymentMethod === 'qris' &&
          <>
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1.5 bg-[#ED1C24] text-white text-xs font-bold rounded">
                  QRIS
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Scan QRIS</h3>
                  <p className="text-xs text-gray-500">
                    Scan menggunakan aplikasi e-wallet atau m-banking
                  </p>
                </div>
              </div>

              <div className="mb-6 flex justify-center">
                <div className="bg-white p-4 border-2 border-gray-200 rounded-xl inline-block">
                  <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                  alt="QRIS Code"
                  className="w-48 h-48 opacity-80" />
                
                </div>
              </div>

              <div className="bg-[#FEF2F2] p-4 rounded-lg">
                <h4 className="text-sm font-medium text-[#DC2626] mb-2 flex items-center gap-1">
                  📌 Cara bayar:
                </h4>
                <ol className="text-sm text-[#DC2626] space-y-1.5">
                  <li>
                    1. Buka aplikasi e-wallet (Gopay, OVO, Dana) atau m-Banking
                  </li>
                  <li>2. Pilih menu Scan QR</li>
                  <li>3. Scan QR code di atas</li>
                  <li>4. Konfirmasi jumlah & bayar</li>
                </ol>
              </div>
            </>
          }
        </div>

        {/* Action */}
        <div className="mt-4">
          <button
            onClick={handleConfirmPayment}
            className="w-full py-4 bg-brand-dark rounded-lg text-xs font-bold tracking-[0.15em] uppercase text-white hover:bg-brand-accent transition-colors">
            
            Konfirmasi Pembayaran
          </button>
        </div>
      </div>
    </motion.div>);

}