import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCustomToast } from '../components/CustomToast';
export function LoginPage() {
  const navigate = useNavigate();
  const { showToast } = useCustomToast();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [signupData, setSignupData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: ''
  });
  const isLoginValid =
  loginData.email.trim() !== '' && loginData.password.trim() !== '';
  const isSignupValid =
  signupData.fullName.trim() !== '' &&
  signupData.username.trim() !== '' &&
  signupData.email.trim() !== '' &&
  signupData.password.trim() !== '';
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-24 px-4 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate('/profile')}
        className="absolute top-6 left-6 p-2 text-brand-dark hover:opacity-70 transition-opacity z-10"
        aria-label="Back to profile">
        
        <ArrowLeft size={24} />
      </button>

      <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 w-full max-w-[440px] overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <button
            className={`flex-1 py-5 text-xs tracking-[0.15em] uppercase font-medium transition-colors relative ${activeTab === 'login' ? 'text-brand-dark' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => setActiveTab('login')}>
            
            Login
            {activeTab === 'login' &&
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dark" />
            }
          </button>
          <button
            className={`flex-1 py-5 text-xs tracking-[0.15em] uppercase font-medium transition-colors relative ${activeTab === 'signup' ? 'text-brand-dark' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => setActiveTab('signup')}>
            
            Sign Up
            {activeTab === 'signup' &&
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dark" />
            }
          </button>
        </div>

        {/* Form Content */}
        <div className="p-8">
          {activeTab === 'login' ?
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}>
            
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  Email or Username *
                </label>
                <input
                type="text"
                value={loginData.email}
                onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value
                })
                }
                placeholder="example@email.com or username"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-colors placeholder:text-gray-300"
                required />
              
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  Password *
                </label>
                <input
                type="password"
                value={loginData.password}
                onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value
                })
                }
                placeholder="Enter your password"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-colors placeholder:text-gray-300"
                required />
              
              </div>
              {!isLoginValid}
              <button
              type="submit"
              disabled={!isLoginValid}
              onClick={() => {
                if (isLoginValid) {
                  showToast('Login berhasil');
                }
              }}
              className={`w-full py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-colors mt-4 ${isLoginValid ? 'bg-[#111] text-white hover:bg-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
              
                Login
              </button>
            </form> :

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}>
            
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  Full Name *
                </label>
                <input
                type="text"
                value={signupData.fullName}
                onChange={(e) =>
                setSignupData({
                  ...signupData,
                  fullName: e.target.value
                })
                }
                placeholder="John Doe"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-colors placeholder:text-gray-300"
                required />
              
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  Username *
                </label>
                <input
                type="text"
                value={signupData.username}
                onChange={(e) =>
                setSignupData({
                  ...signupData,
                  username: e.target.value
                })
                }
                placeholder="johndoe"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-colors placeholder:text-gray-300"
                required />
              
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  Email *
                </label>
                <input
                type="email"
                value={signupData.email}
                onChange={(e) =>
                setSignupData({
                  ...signupData,
                  email: e.target.value
                })
                }
                placeholder="example@email.com"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-colors placeholder:text-gray-300"
                required />
              
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  Password *
                </label>
                <input
                type="password"
                value={signupData.password}
                onChange={(e) =>
                setSignupData({
                  ...signupData,
                  password: e.target.value
                })
                }
                placeholder="Create a strong password"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-colors placeholder:text-gray-300"
                required />
              
              </div>
              {!isSignupValid}
              <button
              type="submit"
              disabled={!isSignupValid}
              onClick={() => {
                if (isSignupValid) {
                  showToast('Akun berhasil dibuat');
                }
              }}
              className={`w-full py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-colors mt-4 ${isSignupValid ? 'bg-[#111] text-white hover:bg-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
              
                Sign Up
              </button>
            </form>
          }
        </div>
      </div>
    </div>);

}