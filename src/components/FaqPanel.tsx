import { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FaqPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FaqPanel({ isOpen, onClose }: FaqPanelProps) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: t('faq_q1'), answer: t('faq_a1') },
    { question: t('faq_q2'), answer: t('faq_a2') },
    { question: t('faq_q3'), answer: t('faq_a3') },
    { question: t('faq_q4'), answer: t('faq_a4') },
    { question: t('faq_q5'), answer: t('faq_a5') },
    { question: t('faq_q6'), answer: t('faq_a6') },
    { question: t('faq_q7'), answer: t('faq_a7') },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setOpenIndex(null);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={t('faq_title')}
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl
          transition-transform duration-300 ease-out max-h-[80vh] flex flex-col
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <svg width="26" height="26" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="36" y="32" width="62" height="44" rx="10" fill="none" stroke="#111111" strokeWidth="5" />
              <polygon points="68,76 80,76 70,90" fill="none" stroke="#111111" strokeWidth="4" strokeLinejoin="round" />
              <rect x="8" y="14" width="72" height="50" rx="10" fill="#111111" />
              <polygon points="22,64 14,80 38,64" fill="#111111" />
              <text x="44" y="48" textAnchor="middle" fill="white" fontSize="20" fontWeight="900" fontFamily="'Arial Black', Arial, sans-serif" letterSpacing="2">FAQ</text>
            </svg>
            <h2 className="text-base font-bold text-gray-900 tracking-wide">{t('faq_title')}</h2>
          </div>
          <button
            onClick={onClose}
            aria-label={t('faq_close')}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-4 py-2 divide-y divide-gray-100">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-start justify-between gap-3 py-3.5 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-black transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 mt-0.5 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180 text-black' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="pb-4 text-sm text-gray-600 leading-relaxed pr-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 py-3 border-t border-gray-100 bg-gray-50">
          <p className="text-xs text-center text-gray-400">
            {t('faq_still_question')}{' '}
            <a
              href="https://wa.me/6281335579050"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold underline underline-offset-2"
            >
              {t('faq_chat_whatsapp')}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}