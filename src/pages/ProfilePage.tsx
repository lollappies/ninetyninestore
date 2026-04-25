import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, MapPin, Package, Clock, LogIn } from 'lucide-react';
export function ProfilePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-30">
        <h1 className="font-serif text-xl font-medium text-brand-dark">
          Pengaturan Akun
        </h1>
        <button
          onClick={() => navigate('/')}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
          
          <X size={16} />
        </button>
      </header>

      <div className="max-w-3xl mx-auto w-full px-4 py-8">
        <div className="flex flex-col gap-4">
          {/* Daftar / Masuk Button */}
          <button
            onClick={() => navigate('/login')}
            className="w-full flex items-center gap-4 p-6 bg-brand-dark rounded-xl shadow-sm hover:bg-brand-accent transition-all duration-300 text-left group">
            
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
              <LogIn size={24} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Daftar / Masuk</h3>
              <p className="text-sm text-white/70 mt-1">
                Login atau buat akun baru untuk pengalaman belanja lebih baik
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate('/address')}
            className="w-full flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left group">
            
            <div className="w-12 h-12 rounded-full bg-brand-neutral1 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-base font-bold text-brand-dark">
                Alamat Saya
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Atur alamat pengiriman untuk pesanan Anda
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate('/orders?tab=selesai')}
            className="w-full flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left group">
            
            <div className="w-12 h-12 rounded-full bg-brand-neutral1 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-base font-bold text-brand-dark">
                Riwayat Pembelian
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Lihat semua transaksi yang telah selesai
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>);

}