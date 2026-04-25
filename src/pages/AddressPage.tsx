import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCustomToast } from '../components/CustomToast';
interface Address {
  id: string;
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  postalCode: string;
  fullAddress: string;
  details: string;
}
export function AddressPage() {
  const navigate = useNavigate();
  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') navigate(-1);
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);
  const { showToast } = useCustomToast();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    province: '',
    city: '',
    district: '',
    postalCode: '',
    fullAddress: '',
    details: ''
  });
  useEffect(() => {
    const saved = localStorage.getItem('ninetynine_addresses');
    if (saved) {
      setAddresses(JSON.parse(saved));
    }
  }, []);
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const newAddress: Address = {
      ...formData,
      id: `addr_${Date.now()}`
    };
    const updatedAddresses = [...addresses, newAddress];
    setAddresses(updatedAddresses);
    localStorage.setItem(
      'ninetynine_addresses',
      JSON.stringify(updatedAddresses)
    );
    setIsAdding(false);
    setFormData({
      name: '',
      phone: '',
      province: '',
      city: '',
      district: '',
      postalCode: '',
      fullAddress: '',
      details: ''
    });
    showToast('Alamat berhasil disimpan');
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
      
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-3xl mx-auto flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
            
            <ArrowLeft size={24} />
          </button>
          <span className="font-serif text-xl font-medium ml-2">
            Alamat Saya
          </span>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">
        {!isAdding ?
        <>
            {addresses.length === 0 ?
          <div className="bg-white p-12 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                  <MapPin size={32} />
                </div>
                <h2 className="font-serif text-xl font-medium text-brand-dark mb-2">
                  Belum ada alamat
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Tambahkan alamat pengiriman untuk mempermudah proses checkout.
                </p>
                <button
              onClick={() => setIsAdding(true)}
              className="px-6 py-3 bg-brand-dark text-white rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-brand-accent transition-colors flex items-center gap-2">
              
                  <Plus size={16} />
                  Tambah Alamat Baru
                </button>
              </div> :

          <div className="flex flex-col gap-4">
                {addresses.map((addr) =>
            <div
              key={addr.id}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-brand-dark">{addr.name}</h3>
                      <span className="text-xs text-brand-accent font-medium">
                        Utama
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{addr.phone}</p>
                    <p className="text-sm text-gray-600">{addr.fullAddress}</p>
                    <p className="text-sm text-gray-600">
                      {addr.district}, {addr.city}, {addr.province}{' '}
                      {addr.postalCode}
                    </p>
                    {addr.details &&
              <p className="text-sm text-gray-500 mt-2">
                        Patokan: {addr.details}
                      </p>
              }
                  </div>
            )}

                <button
              onClick={() => setIsAdding(true)}
              className="w-full py-4 border border-dashed border-gray-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors flex items-center justify-center gap-2 mt-2">
              
                  <Plus size={18} />
                  Tambah Alamat Baru
                </button>
              </div>
          }
          </> :

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">
              Detail Alamat
            </h2>
            <form onSubmit={handleSave} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1.5">
                  Nama Lengkap *
                </label>
                <input
                required
                type="text"
                value={formData.name}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value
                })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
              
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1.5">
                  Nomor Telepon *
                </label>
                <input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value
                })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
              
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">
                    Provinsi *
                  </label>
                  <input
                  required
                  type="text"
                  value={formData.province}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    province: e.target.value
                  })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
                
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">
                    Kota/Kabupaten *
                  </label>
                  <input
                  required
                  type="text"
                  value={formData.city}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    city: e.target.value
                  })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
                
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">
                    Kecamatan *
                  </label>
                  <input
                  required
                  type="text"
                  value={formData.district}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    district: e.target.value
                  })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
                
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">
                    Kode Pos *
                  </label>
                  <input
                  required
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    postalCode: e.target.value
                  })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
                
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1.5">
                  Alamat Lengkap *
                </label>
                <textarea
                required
                rows={3}
                value={formData.fullAddress}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  fullAddress: e.target.value
                })
                }
                placeholder="Jl. Delima, No.05, Rt.02, Rw.05"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark resize-none" />
              
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1.5">
                  Detail Lainnya
                </label>
                <input
                type="text"
                value={formData.details}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  details: e.target.value
                })
                }
                placeholder="Blok / Unit / Patokan"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
              
              </div>

              <div className="flex gap-3 mt-4">
                <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="flex-1 py-4 border border-gray-200 rounded-lg text-xs font-bold tracking-[0.15em] uppercase text-gray-600 hover:bg-gray-50 transition-colors">
                
                  Batal
                </button>
                <button
                type="submit"
                className="flex-1 py-4 bg-brand-dark rounded-lg text-xs font-bold tracking-[0.15em] uppercase text-white hover:bg-brand-accent transition-colors">
                
                  Simpan
                </button>
              </div>
            </form>
          </div>
        }
      </div>
    </motion.div>);

}