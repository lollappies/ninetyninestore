// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { useCustomToast } from '../components/CustomToast';
import { useEscapeBack } from '../hooks/useEscapeBack';
import { useLanguage } from '../context/LanguageContext';

export function LoginPage() {
  useEscapeBack();
  const navigate = useNavigate();
  const { showToast } = useCustomToast();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ fullName: '', username: '', email: '', password: '' });

  const isLoginValid = loginData.email.trim() !== '' && loginData.password.trim() !== '';
  const isSignupValid =
    signupData.fullName.trim() !== '' &&
    signupData.username.trim() !== '' &&
    signupData.email.trim() !== '' &&
    signupData.password.trim() !== '';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-24 px-4 relative">

      {/* Tombol Back kiri atas */}
      <button
        onClick={() => navigate('/profile')}
        className="absolute top-6 left-6 p-2 text-brand-dark hover:opacity-70 transition-opacity z-10"
        aria-label="Back to profile">
        <ArrowLeft size={24} />
      </button>

      {/* Tombol X kanan atas → close ke profile */}
      <button
        onClick={() => navigate('/profile')}
        className="absolute top-6 right-6 w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors z-10"
        aria-label="Close">
        <X size={16} />
      </button>

      <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 w-full max-w-[440px] overflow-hidden">
        <div className="flex border-b border-gray-100">
          <button
            className={`flex-1 py-5 text-xs tracking-[0.15em] uppercase font-medium transition-colors relative ${activeTab === 'login' ? 'text-brand-dark' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => setActiveTab('login')}>
            {t('login_title')}
            {activeTab === 'login' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dark" />}
          </button>
          <button
            className={`flex-1 py-5 text-xs tracking-[0.15em] uppercase font-medium transition-colors relative ${activeTab === 'signup' ? 'text-brand-dark' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => setActiveTab('signup')}>
            {t('login_signup_tab')}
            {activeTab === 'signup' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dark" />}
          </button>
        </div>

        <div className="p-8">
          {activeTab === 'login' ? (
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  {t('login_email')} *
                </label>
                <input
                  type="text"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  placeholder={t('login_email_placeholder')}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-colors placeholder:text-gray-300"
                  required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  {t('login_password')} *
                </label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  placeholder={t('login_password_placeholder')}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-colors placeholder:text-gray-300"
                  required />
              </div>
              <button
                type="submit"
                disabled={!isLoginValid}
                onClick={() => { if (isLoginValid) showToast(t('login_success')); }}
                className={`w-full py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-colors mt-4 ${isLoginValid ? 'bg-[#111] text-white hover:bg-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                {t('login_btn')}
              </button>
            </form>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  {t('signup_full_name')} *
                </label>
                <input
                  type="text"
                  value={signupData.fullName}
                  onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                  placeholder={t('signup_full_name_placeholder')}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-colors placeholder:text-gray-300"
                  required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  {t('signup_username')} *
                </label>
                <input
                  type="text"
                  value={signupData.username}
                  onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
                  placeholder={t('signup_username_placeholder')}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-colors placeholder:text-gray-300"
                  required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  {t('signup_email')} *
                </label>
                <input
                  type="email"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  placeholder={t('signup_email_placeholder')}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-colors placeholder:text-gray-300"
                  required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  {t('signup_password')} *
                </label>
                <input
                  type="password"
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  placeholder={t('signup_password_placeholder')}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-colors placeholder:text-gray-300"
                  required />
              </div>
              <button
                type="submit"
                disabled={!isSignupValid}
                onClick={() => { if (isSignupValid) showToast(t('signup_success')); }}
                className={`w-full py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-colors mt-4 ${isSignupValid ? 'bg-[#111] text-white hover:bg-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                {t('signup_btn')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}