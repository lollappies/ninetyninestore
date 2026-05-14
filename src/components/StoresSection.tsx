import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { stores } from '../utils/data';
import { useLanguage } from '../context/LanguageContext';

const OPEN_HOUR = 9;
const CLOSE_HOUR = 21;
const SOON_THRESHOLD = 1;

type StoreStatus = 'open' | 'closed' | 'closing-soon' | 'opening-soon';

function getStoreStatus(): StoreStatus {
  const now = new Date();
  const wibOffset = 7 * 60;
  const localOffset = now.getTimezoneOffset();
  const wibTime = new Date(now.getTime() + (wibOffset + localOffset) * 60 * 1000);
  const hour = wibTime.getHours();
  const minute = wibTime.getMinutes();
  const totalMinutes = hour * 60 + minute;
  const openMinutes = OPEN_HOUR * 60;
  const closeMinutes = CLOSE_HOUR * 60;
  const soonMinutes = SOON_THRESHOLD * 60;
  const isOpen = totalMinutes >= openMinutes && totalMinutes < closeMinutes;
  if (isOpen) {
    if (closeMinutes - totalMinutes <= soonMinutes) return 'closing-soon';
    return 'open';
  } else {
    if (totalMinutes < openMinutes && openMinutes - totalMinutes <= soonMinutes) return 'opening-soon';
    return 'closed';
  }
}

function StatusBadge({ status }: { status: StoreStatus }) {
  const { t } = useLanguage();

  const config = {
    open: { bg: 'bg-black/80', text: 'text-white', dot: 'bg-emerald-400', ping: true, label: t('store_status_open'), sub: t('store_hours') },
    closed: { bg: 'bg-black/80', text: 'text-white', dot: 'bg-red-400', ping: false, label: t('store_status_closed'), sub: t('store_opens_at') },
    'closing-soon': { bg: 'bg-black/80', text: 'text-white', dot: 'bg-amber-400', ping: true, label: t('store_status_closing_soon'), sub: t('store_closes_at') },
    'opening-soon': { bg: 'bg-black/80', text: 'text-white', dot: 'bg-blue-400', ping: false, label: t('store_status_opening_soon'), sub: t('store_opens_at') },
  }[status];

  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`inline-flex items-center gap-1.5 ${config.bg} px-2.5 py-1 rounded-sm`}>
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          {config.ping && (
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.dot} opacity-70`} />
          )}
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${config.dot}`} />
        </span>
        <span className={`text-[9px] font-bold tracking-[0.15em] uppercase ${config.text}`}>
          {config.label}
        </span>
      </div>
      <span className="text-[8px] tracking-wide text-gray-400">{config.sub}</span>
    </div>
  );
}

export function StoresSection() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<StoreStatus>(getStoreStatus());

  useEffect(() => {
    const interval = setInterval(() => setStatus(getStoreStatus()), 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stores" className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto bg-brand-neutral1/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-center mb-16"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 block mb-3">
          {t('section_stores_label')}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">
          {t('section_stores_title')}
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
        {stores.map((store, idx) => (
          <motion.div
            key={store.city}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className="group"
          >
            <a
              href={store.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 cursor-pointer no-underline"
            >
              <div className="relative aspect-square overflow-hidden bg-brand-neutral2 rounded-xl">
                <img
                  src={store.image}
                  alt={store.city}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2">
                  <StatusBadge status={status} />
                </div>
              </div>
              <div className="flex flex-col gap-1 px-1 text-center">
                <h3 className="font-serif text-base font-medium text-brand-dark">{store.city}</h3>
                <p className="text-xs text-gray-500">{store.address}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-2xl mx-auto text-center mt-32 mb-12"
      >
        <h2 className="font-serif md:text-5xl text-brand-dark mb-6 text-[36px]">
          {t('section_stores_experience_title')}
        </h2>
        <p className="text-gray-500 md:text-base max-w-lg mx-auto text-[12px]">
          {t('section_stores_experience_desc')}
        </p>
      </motion.div>
    </section>
  );
}