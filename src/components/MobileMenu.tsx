// src/components/MobileMenu.tsx
import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useLanguage();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const categories = ['Dress', 'Blouse', 'Tunic', 'Outer', 'Sweater', 'Pants', 'Skirt'];

  const handleOfflineStore = () => {
    onClose();
    if (location.pathname === '/') {
      setTimeout(() => {
        document.getElementById('stores')?.scrollIntoView({ behavior: 'smooth' });
      }, 300); // tunggu menu close animation selesai
    } else {
      navigate('/', { state: { scrollTo: 'stores' } });
    }
  };

  const handleNavigate = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Link
                to="/"
                onClick={onClose}
                className="font-serif text-2xl text-brand-dark">
                Ninetynine
              </Link>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-gray-500 hover:text-brand-dark">
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-4">

              {/* Sale */}
              <button
                onClick={() => handleNavigate('/sale')}
                className="w-full text-left block px-6 py-4 text-[13px] tracking-[0.15em] uppercase text-brand-accent font-medium border-b border-gray-50"
              >
                {t('mobile_menu_sale')}
              </button>

              {/* Category Accordion */}
              <div>
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 text-[13px] tracking-[0.15em] uppercase text-brand-dark border-b border-gray-50"
                >
                  {t('mobile_menu_category')}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isCategoryOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => handleNavigate(`/category/${cat.toLowerCase()}`)}
                          className="w-full text-left block px-8 py-3 text-xs tracking-wider text-gray-600 hover:text-brand-dark"
                        >
                          {cat}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Offline Store */}
              <button
                onClick={handleOfflineStore}
                className="w-full text-left block px-6 py-4 text-[13px] tracking-[0.15em] uppercase text-brand-dark border-b border-gray-50"
              >
                {t('mobile_menu_offline_store')}
              </button>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}