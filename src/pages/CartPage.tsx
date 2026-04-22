import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../App';
interface CartPageProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}
export function CartPage({
  cartItems,
  setCartItems
}: CartPageProps) {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  // Initialize all items as selected when cart changes
  useEffect(() => {
    setSelectedItems(cartItems.map((_, index) => index));
  }, [cartItems.length]);
  const toggleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((_, index) => index));
    }
  };
  const toggleSelectItem = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };
  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const newItems = [...cartItems];
    newItems[index].quantity = newQuantity;
    setCartItems(newItems);
  };
  const removeItem = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
    setSelectedItems(selectedItems.filter((i) => i !== index).map((i) => i > index ? i - 1 : i));
  };
  const removeSelected = () => {
    const newItems = cartItems.filter((_, index) => !selectedItems.includes(index));
    setCartItems(newItems);
    setSelectedItems([]);
  };
  const selectedCartItems = cartItems.filter((_, index) => selectedItems.includes(index));
  const subtotal = selectedCartItems.reduce((acc, item) => {
    const priceStr = item.product.price?.replace(/[^0-9]/g, '') || '0';
    return acc + parseInt(priceStr) * item.quantity;
  }, 0);
  const formatCurrency = (val: number) => new Intl.NumberFormat('id-ID').format(val);
  return <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 py-4 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-medium text-brand-dark">
            Ninetynine
          </span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-gray-400">
            / Shopping Cart
          </span>
        </div>
        <button onClick={() => navigate(-1)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
          <X size={16} />
        </button>
      </header>

      {cartItems.length === 0 /* Empty State */ ? <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag size={32} className="text-gray-400" />
          </div>
          <h2 className="text-lg font-medium text-brand-dark mb-2">
            Keranjang kamu kosong
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Yuk, tambahkan produk favorit kamu!
          </p>
          <button onClick={() => navigate('/')} className="px-8 py-3 bg-[#111] text-white text-sm font-medium rounded-lg hover:bg-black transition-colors">
            Belanja Sekarang
          </button>
        </div> /* Filled State */ : <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={selectedItems.length === cartItems.length && cartItems.length > 0} onChange={toggleSelectAll} className="w-5 h-5 rounded border-gray-300 accent-[#D32F2F] cursor-pointer" />
              <span className="text-sm text-brand-dark">Pilih Semua</span>
            </label>
            <button onClick={removeSelected} className="text-sm text-[#D32F2F] hover:opacity-80 transition-opacity">
              Hapus Dipilih
            </button>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <ShoppingBag size={16} className="text-[#D32F2F]" />
            <span className="text-sm font-bold text-brand-dark">
              Ninetynine Official Store
            </span>
            <span className="text-[10px] font-bold text-[#D32F2F] border border-[#D32F2F] px-1.5 py-0.5 rounded uppercase">
              Official
            </span>
          </div>

          <div className="flex flex-col gap-6 mb-40">
            {cartItems.map((item, index) => <div key={index} className="flex gap-4 items-start">
                <input type="checkbox" checked={selectedItems.includes(index)} onChange={() => toggleSelectItem(index)} className="w-5 h-5 rounded border-gray-300 accent-[#D32F2F] cursor-pointer mt-2" />
                <img src={item.product.imageMain} alt={item.product.name} className="w-20 h-24 object-cover rounded-lg bg-gray-100" />
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold text-brand-dark">
                        {item.product.name}
                      </h3>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                        Code {item.product.series}
                      </p>
                      <p className="text-sm text-[#D32F2F] mt-2">
                        {item.product.price || '-'}
                      </p>
                    </div>
                    <button onClick={() => removeItem(index)} className="text-gray-300 hover:text-red-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="flex items-center border border-gray-200 rounded-md">
                      <button onClick={() => updateQuantity(index, item.quantity - 1)} className="px-3 py-1 text-gray-500 hover:bg-gray-50 transition-colors">
                        -
                      </button>
                      <span className="w-10 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button onClick={() => updateQuantity(index, item.quantity + 1)} className="px-3 py-1 text-gray-500 hover:bg-gray-50 transition-colors">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Bottom Sticky Bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 z-20">
            <div className="max-w-4xl mx-auto flex flex-col gap-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">
                  Subtotal ({selectedItems.length} produk)
                </span>
                <span className="text-gray-500">
                  Rp{formatCurrency(subtotal)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-brand-dark">Total</span>
                <span className="text-lg font-bold text-brand-dark">
                  Rp{formatCurrency(subtotal)}
                </span>
              </div>
              <button onClick={() => navigate('/checkout')} disabled={selectedItems.length === 0} className={`w-full py-4 rounded-lg text-sm font-bold text-white flex items-center justify-center gap-2 transition-colors ${selectedItems.length > 0 ? 'bg-[#D32F2F] hover:bg-red-700' : 'bg-gray-300 cursor-not-allowed'}`}>
                <ArrowRight size={18} />
                Checkout Sekarang
              </button>
            </div>
          </div>
        </div>}
    </div>;
}