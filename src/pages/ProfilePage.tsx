import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, MapPin, Clock, LogIn } from 'lucide-react';
import { useEscapeBack } from '../hooks/useEscapeBack';
import { useLanguage } from '../context/LanguageContext';

interface ProfilePageProps {
  onOpenWishlist: () => void;
}

export function ProfilePage({ onOpenWishlist }: ProfilePageProps) {
  const navigate = useNavigate();
  const { t } = useLanguage();
  useEscapeBack();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-100 py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-30">
        <h1 className="font-serif text-xl font-medium text-brand-dark">
          {t('profile_title')}
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/')}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
            <X size={16} />
          </button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto w-full px-4 py-8">
        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate('/login')}
            className="w-full flex items-center gap-4 p-6 bg-brand-dark rounded-xl shadow-sm hover:bg-brand-accent transition-all duration-300 text-left group">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
              <LogIn size={24} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{t('profile_login_signup')}</h3>
              <p className="text-sm text-white/70 mt-1">{t('profile_login_signup_desc')}</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/address')}
            className="w-full flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left group">
            <div className="w-12 h-12 rounded-full bg-brand-neutral1 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-base font-bold text-brand-dark">{t('profile_my_address')}</h3>
              <p className="text-sm text-gray-500 mt-1">{t('profile_my_address_desc')}</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/orders?tab=selesai')}
            className="w-full flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left group">
            <div className="w-12 h-12 rounded-full bg-brand-neutral1 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-base font-bold text-brand-dark">{t('profile_purchase_history')}</h3>
              <p className="text-sm text-gray-500 mt-1">{t('profile_purchase_history_desc')}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}