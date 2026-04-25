import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Package } from 'lucide-react';
type TabType = 'selesai' | 'dikirim' | 'dibatalkan' | 'dikembalikan';
export function OrdersPage() {
  const navigate = useNavigate();
  const location = useLocation();
  // Parse query params for initial tab
  const searchParams = new URLSearchParams(location.search);
  const initialTab = searchParams.get('tab') as TabType || 'selesai';
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [orders, setOrders] = useState<SavedOrder[]>([]);
  useEffect(() => {
    setOrders(getOrdersByStatus(activeTab));
  }, [activeTab]);
  const tabs: {
    id: TabType;
    label: string;
  }[] = [
  {
    id: 'selesai',
    label: 'Selesai'
  },
  {
    id: 'dikirim',
    label: 'Dikirim'
  },
  {
    id: 'dibatalkan',
    label: 'Dibatalkan'
  },
  {
    id: 'dikembalikan',
    label: 'Dikembalikan'
  }];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'selesai':
        return 'bg-[#E8F5E9] text-[#4CAF50]';
      case 'dikirim':
        return 'bg-[#E3F2FD] text-[#2196F3]';
      case 'dibatalkan':
        return 'bg-[#FFEBEE] text-[#F44336]';
      case 'dikembalikan':
        return 'bg-[#FFF3E0] text-[#FF9800]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
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
      
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100">
        <div className="py-4 px-4 md:px-8 max-w-3xl mx-auto flex items-center">
          <button
            onClick={() => navigate('/profile')}
            className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
            
            <ArrowLeft size={24} />
          </button>
          <span className="font-serif text-xl font-medium ml-2">
            Pesanan Saya
          </span>
        </div>

        {/* Tabs */}
        <div className="max-w-3xl mx-auto px-4 md:px-8 flex overflow-x-auto no-scrollbar border-t border-gray-50">
          {tabs.map((tab) =>
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-4 py-4 text-xs font-medium tracking-wider uppercase relative transition-colors ${activeTab === tab.id ? 'text-brand-dark' : 'text-gray-400 hover:text-gray-600'}`}>
            
              {tab.label}
              {activeTab === tab.id &&
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dark" />
            }
            </button>
          )}
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">
        {orders.length === 0 ?
        <div className="bg-white p-12 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
              <Package size={32} />
            </div>
            <h2 className="font-serif text-xl font-medium text-brand-dark mb-2">
              Belum ada pesanan
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Tidak ada pesanan dengan status{' '}
              {tabs.find((t) => t.id === activeTab)?.label.toLowerCase()}.
            </p>
            <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-brand-dark text-white rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-brand-accent transition-colors">
            
              Mulai Belanja
            </button>
          </div> :

        <div className="flex flex-col gap-6">
            {orders.map((order) => {
            const formattedDate = new Date(
              order.orderDate
            ).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            });
            const formattedTotal = new Intl.NumberFormat('id-ID').format(
              order.total
            );
            return (
              <div
                key={order.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                
                  <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                        Belanja • {formattedDate}
                      </span>
                      <span className="text-sm font-bold text-brand-dark">
                        {order.orderNumber}
                      </span>
                    </div>
                    <div
                    className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${getStatusColor(order.status)}`}>
                    
                      {order.status}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col gap-4">
                    {order.cartItems.map((item: any, idx: number) =>
                  <div key={idx} className="flex gap-4">
                        <img
                      src={item.product.imageMain}
                      alt={item.product.name}
                      className="w-16 h-20 object-cover rounded-md bg-gray-100" />
                    
                        <div className="flex flex-col flex-1 justify-center">
                          <span className="text-xs font-bold text-brand-dark uppercase mb-1">
                            {item.product.name}
                          </span>
                          <span className="text-[10px] text-gray-500 mb-2">
                            {item.quantity} barang x {item.product.price}
                          </span>
                        </div>
                      </div>
                  )}
                  </div>

                  <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                        Total Belanja
                      </span>
                      <span className="text-sm font-bold text-brand-accent">
                        IDR {formattedTotal}
                      </span>
                    </div>
                    <button
                    onClick={() =>
                    navigate('/product/' + order.cartItems[0].product.id)
                    }
                    className="px-4 py-2 border border-brand-dark text-brand-dark rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-gray-50 transition-colors">
                    
                      Beli Lagi
                    </button>
                  </div>
                </div>);

          })}
          </div>
        }
      </div>
    </motion.div>);

}