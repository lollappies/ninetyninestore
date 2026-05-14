import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { CartItem } from '../App';
import { useEscapeBack } from '../hooks/useEscapeBack';
import { useLanguage } from '../context/LanguageContext';

interface CheckoutPageProps {
  cartItems: CartItem[];
}

export function CheckoutPage({ cartItems }: CheckoutPageProps) {
  useEscapeBack();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const checkoutItems = location.state?.checkoutItems || cartItems;

  const [shippingMethod, setShippingMethod] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });

  const isFormComplete =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.address.trim() !== '';
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
      state: { shippingMethod, paymentMethod, cartItems: checkoutItems, customerInfo: formData, subtotal, shippingCost, adminFee, handlingFee, grandTotal },
    });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-brand-dark hover:opacity-70 transition-opacity">
              <ArrowLeft size={24} />
            </button>
            <span className="font-serif text-xl font-medium ml-2">{t('checkout_title')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-brand-dark text-white flex items-center justify-center text-[10px] font-bold">1</div>
            <div className="w-4 h-[1px] bg-gray-300"></div>
            <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-[10px] font-bold">2</div>
            <div className="w-4 h-[1px] bg-gray-300"></div>
            <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-[10px] font-bold">3</div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">
        {/* Data Penerima */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">{t('checkout_recipient_data')}</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1.5">{t('checkout_name')} *</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={t('checkout_name_placeholder')} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1.5">{t('checkout_email')} *</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="email@example.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
              <p className="text-[10px] text-gray-400 mt-1.5">{t('checkout_email_hint')}</p>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1.5">{t('checkout_phone')}</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder={t('checkout_phone_placeholder')} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1.5">{t('checkout_address')} *</label>
              <textarea value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder={t('checkout_address_placeholder')} rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-dark resize-none" />
            </div>
          </div>
        </div>

        {/* Metode Pengiriman */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">{t('checkout_shipping_method')}</h2>
          <div className="flex flex-col gap-3">
            {[
              { id: 'jne', label: t('checkout_jne_label'), est: t('checkout_jne_est'), price: 'Rp12.000', original: 'Rp15.000' },
              { id: 'jnt', label: t('checkout_jnt_label'), est: t('checkout_jnt_est'), price: 'Rp15.000', original: 'Rp17.000' },
            ].map((s) => (
              <label key={s.id} onClick={() => setShippingMethod(s.id)} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${shippingMethod === s.id ? 'border-brand-dark bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${shippingMethod === s.id ? 'border-brand-dark' : 'border-gray-300'}`}>
                    {shippingMethod === s.id && <div className="w-2 h-2 rounded-full bg-brand-dark" />}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-brand-dark">{s.label}</div>
                    <div className="text-xs text-gray-500">{s.est}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-red-500 line-through">{s.original}</span>
                  <span className="text-sm font-bold text-brand-dark">{s.price}</span>
                </div>
              </label>
            ))}
            <label onClick={() => setShippingMethod('store')} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${shippingMethod === 'store' ? 'border-brand-dark bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${shippingMethod === 'store' ? 'border-brand-dark' : 'border-gray-300'}`}>
                  {shippingMethod === 'store' && <div className="w-2 h-2 rounded-full bg-brand-dark" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-brand-dark">{t('checkout_store_pickup')}</div>
                  <div className="text-xs text-gray-500">{t('checkout_store_pickup_desc')}</div>
                </div>
              </div>
              <span className="text-sm font-bold text-brand-accent">{t('checkout_free')}</span>
            </label>
          </div>
        </div>

        {/* Metode Pembayaran */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">{t('checkout_payment_method')}</h2>
          <div className="flex flex-col gap-3">
            {[
              { id: 'bca', label: t('checkout_bca_label'), desc: t('checkout_bca_desc'), badge: 'BCA', color: '#0066AE' },
              { id: 'mandiri', label: t('checkout_mandiri_label'), desc: t('checkout_mandiri_desc'), badge: 'MDR', color: '#003D79' },
              { id: 'qris', label: 'QRIS', desc: t('checkout_qris_desc'), badge: 'QRIS', color: '#ED1C24' },
            ].map((p) => (
              <label key={p.id} onClick={() => setPaymentMethod(p.id)} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${paymentMethod === p.id ? 'border-brand-dark bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === p.id ? 'border-brand-dark' : 'border-gray-300'}`}>
                    {paymentMethod === p.id && <div className="w-2 h-2 rounded-full bg-brand-dark" />}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-brand-dark">{p.label}</div>
                    <div className="text-xs text-gray-500">{p.desc}</div>
                  </div>
                </div>
                <div className="px-2 py-1 text-white text-[10px] font-bold rounded" style={{ backgroundColor: p.color }}>{p.badge}</div>
              </label>
            ))}
          </div>
        </div>

        {/* Produk yang Dipesan */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">{t('checkout_ordered_products')}</h2>
          <div className="flex flex-col gap-4">
            {checkoutItems.map((item: CartItem, idx: number) => (
              <div key={idx} className="flex gap-4 items-center">
                <img src={item.product.imageMain} alt={item.product.name} className="w-16 h-20 object-cover rounded-lg bg-gray-100" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-brand-dark">{item.product.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.product.series}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t('checkout_color')}: {item.color} · {t('checkout_size')}: {item.size}</p>
                  {item.bundleName && <p className="text-xs text-brand-accent mt-0.5">{item.bundleName}</p>}
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">x{item.quantity}</p>
                  <p className="text-sm font-medium text-brand-dark mt-0.5">{item.product.price || '-'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ringkasan */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">{t('checkout_order_summary')}</h2>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">{t('checkout_subtotal')} ({checkoutItems.length} {t('checkout_products')})</span>
              <span className="font-medium text-brand-dark">Rp{formatCurrency(subtotal)}</span>
            </div>
            {shippingMethod && (
              <div className="flex justify-between">
                <span className="text-gray-500">{t('checkout_shipping_fee')}</span>
                <span className="font-medium text-brand-dark">{shippingCost === 0 ? t('checkout_free') : `Rp${formatCurrency(shippingCost)}`}</span>
              </div>
            )}
            {paymentMethod && (
              <div className="flex justify-between">
                <span className="text-gray-500">{t('checkout_admin_fee')}</span>
                <span className="font-medium text-brand-dark">{adminFee === 0 ? t('checkout_free') : `Rp${formatCurrency(adminFee)}`}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-500">{t('checkout_handling_fee')}</span>
              <span className="font-medium text-brand-dark">Rp{formatCurrency(handlingFee)}</span>
            </div>
            <hr className="my-2 border-gray-100" />
            <div className="flex justify-between items-center">
              <span className="font-bold text-brand-dark">{t('checkout_total')}</span>
              <span className="text-lg font-bold text-brand-accent">Rp{formatCurrency(grandTotal)}</span>
            </div>
          </div>
        </div>

        {/* Action */}
        <div className="mt-4">
          {!canProceed && !paymentMethod && (
            <p className="text-xs text-red-500 text-center mb-3">{t('checkout_select_payment')}</p>
          )}
          <button
            onClick={handleProceedToPayment}
            disabled={!canProceed}
            className={`w-full py-4 rounded-lg text-xs font-bold tracking-[0.15em] uppercase transition-colors ${
              canProceed ? 'bg-brand-dark text-white hover:bg-brand-accent' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {t('checkout_place_order')}
          </button>
        </div>
      </div>
    </motion.div>
  );
}