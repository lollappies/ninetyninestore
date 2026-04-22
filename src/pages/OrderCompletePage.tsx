import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Printer, User, Home } from 'lucide-react';
import { CartItem } from '../App';
interface OrderCompletePageProps {
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}
export function OrderCompletePage({
  setCartItems
}: OrderCompletePageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  // Store order data in state so it persists after cart is cleared
  const [orderData, setOrderData] = useState<any>(null);
  useEffect(() => {
    if (location.state) {
      setOrderData(location.state);
    }
    // Clear cart on successful order
    setCartItems([]);
  }, [setCartItems, location.state]);
  const handlePrint = () => {
    window.print();
  };
  const handleViewHistory = () => {
    navigate('/orders?tab=selesai');
  };
  if (!orderData) {
    return <div className="min-h-screen flex items-center justify-center">
        <p>Loading order details...</p>
      </div>;
  }
  const {
    shippingMethod,
    paymentMethod,
    cartItems,
    customerInfo,
    subtotal,
    shippingCost,
    adminFee,
    handlingFee,
    total,
    orderNumber,
    orderDate
  } = orderData;
  const formattedTotal = new Intl.NumberFormat('id-ID').format(total);
  const formattedDate = new Date(orderDate).toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  const getShippingName = (method: string) => {
    switch (method) {
      case 'jne':
        return 'JNE Regular';
      case 'jnt':
        return 'J&T Express';
      case 'store':
        return 'Ambil di Toko';
      default:
        return 'JNE Regular';
    }
  };
  const getPaymentName = (method: string) => {
    switch (method) {
      case 'bca':
        return 'BCA Virtual Account';
      case 'mandiri':
        return 'Mandiri Virtual Account';
      case 'qris':
        return 'QRIS';
      default:
        return 'BCA Virtual Account';
    }
  };
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-serif text-xl font-medium">
            Pesanan Selesai
          </span>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">
        {/* Success Card */}
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-6">
            <Check size={32} className="text-[#4CAF50]" strokeWidth={3} />
          </div>

          <h1 className="font-serif text-2xl font-bold text-brand-dark mb-2">
            Pembayaran Dikonfirmasi! 🎉
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Pesananmu sedang diproses oleh Ninetynine
          </p>

          <div className="flex flex-col items-center gap-2 mb-8">
            <span className="text-[10px] uppercase tracking-widest text-gray-400">
              Nomor Pesanan
            </span>
            <div className="px-6 py-2 bg-brand-dark text-white font-bold tracking-wider rounded-full text-lg">
              {orderNumber}
            </div>
          </div>

          <div className="w-full bg-[#FFF8E1] text-[#F57F17] py-3 rounded-lg text-xs font-medium flex items-center justify-center gap-2">
            <span>⏳</span> Mengirim konfirmasi ke email kamu...
          </div>
        </div>

        {/* Detail Produk */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">
            Detail Produk
          </h2>

          <div className="flex flex-col gap-6">
            {cartItems.map((item: CartItem, index: number) => <div key={index} className="flex gap-4">
                <img src={item.product.imageMain} alt={item.product.name} className="w-16 h-20 object-cover rounded-md bg-gray-100" />
                <div className="flex flex-col flex-1">
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">
                    CODE {item.product.series}
                  </span>
                  <span className="text-xs font-bold text-brand-dark uppercase mb-1">
                    {item.product.name}
                  </span>
                  <span className="text-[10px] text-gray-500 mb-2">
                    {item.size} · {item.color} · Qty: {item.quantity}
                  </span>
                  <span className="text-sm font-bold text-brand-accent">
                    {item.product.price}
                  </span>
                </div>
              </div>)}
          </div>
        </div>

        {/* Informasi Pesanan */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">
            Informasi Pesanan
          </h2>

          <div className="flex flex-col gap-4 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">Waktu Pesan</span>
              <span className="text-brand-dark text-right">
                {formattedDate}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Penerima</span>
              <span className="text-brand-dark text-right">
                {customerInfo?.name || '-'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">No. HP</span>
              <span className="text-brand-dark text-right">
                {customerInfo?.phone || '-'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Alamat</span>
              <span className="text-brand-dark text-right max-w-[200px]">
                {customerInfo?.address || '-'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Pengiriman</span>
              <span className="text-brand-dark text-right">
                {getShippingName(shippingMethod)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Pembayaran</span>
              <span className="text-brand-dark text-right">
                {getPaymentName(paymentMethod)}
              </span>
            </div>
          </div>

          <hr className="my-6 border-gray-100" />

          <div className="flex flex-col gap-3 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">
                Subtotal ({cartItems.length} produk)
              </span>
              <span className="text-brand-dark">
                IDR {new Intl.NumberFormat('id-ID').format(subtotal || 0)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Ongkos Kirim</span>
              <span className={shippingCost === 0 ? 'text-brand-accent font-medium' : 'text-brand-dark'}>
                {shippingCost === 0 ? 'Gratis' : `IDR ${new Intl.NumberFormat('id-ID').format(shippingCost)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Biaya Admin</span>
              <span className={adminFee === 0 ? 'text-brand-accent font-medium' : 'text-brand-dark'}>
                {adminFee === 0 ? 'Gratis' : `IDR ${new Intl.NumberFormat('id-ID').format(adminFee)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Biaya Penanganan</span>
              <span className="text-brand-dark">
                IDR {new Intl.NumberFormat('id-ID').format(handlingFee || 0)}
              </span>
            </div>

            <div className="flex justify-between items-end mt-2">
              <span className="text-sm font-bold text-brand-dark">
                Total Bayar
              </span>
              <div className="text-right">
                <span className="text-lg font-bold text-brand-accent block">
                  IDR {formattedTotal}
                </span>
                <span className="text-[10px] text-gray-400">Lunas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 mt-2 print:hidden">
          <button onClick={() => navigate('/')} className="w-full py-4 bg-brand-dark rounded-lg text-xs font-bold tracking-[0.15em] uppercase text-white hover:bg-brand-accent transition-colors flex items-center justify-center gap-2">
            <Home size={16} />
            Beranda
          </button>
          <button onClick={handleViewHistory} className="w-full py-4 border border-brand-dark rounded-lg text-xs font-bold tracking-[0.15em] uppercase text-brand-dark hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <User size={16} />
            Lihat Riwayat Pembelian
          </button>
          <button onClick={handlePrint} className="w-full py-4 border border-gray-200 rounded-lg text-xs font-bold tracking-[0.15em] uppercase text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <Printer size={16} />
            Cetak / Simpan PDF
          </button>
        </div>
      </div>
    </motion.div>;
}