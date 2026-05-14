// src/components/StoresSection.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { stores } from '../utils/data';
import { useLang } from '../context/LanguageContext';

const OPEN_HOUR = 9;
const CLOSE_HOUR = 21;
const SOON_THRESHOLD = 1;

type StoreStatus = 'open' | 'closed' | 'closing-soon' | 'opening-soon';

function getStoreStatus(): StoreStatus {
  const now = new Date();
  const wibOffset = 7 * 60;
  const localOffset = now.getTimezoneOffset();
  const wibTime = new Date(now.getTime() + (wibOffset + localOffset) * 60 * 1000);
  const totalMinutes = wibTime.getHours() * 60 + wibTime.getMinutes();
  const openMinutes = OPEN_HOUR * 60;
  const closeMinutes = CLOSE_HOUR * 60;
  const soonMinutes = SOON_THRESHOLD * 60;
  const isOpen = totalMinutes >= openMinutes && totalMinutes < closeMinutes;
  if (isOpen) {
    return closeMinutes - totalMinutes <= soonMinutes ? 'closing-soon' : 'open';
  } else {
    return totalMinutes < openMinutes && openMinutes - totalMinutes <= soonMinutes
      ? 'opening-soon'
      : 'closed';
  }
}

function StatusBadge({ status, t }: { status: StoreStatus; t: (k: any) => string }) {
  const config = {
    open:          { dot: 'bg-emerald-400', ping: true,  label: () => t('store_open') },
    closed:        { dot: 'bg-red-400',     ping: false, label: () => t('store_closed') },
    'closing-soon':{ dot: 'bg-amber-400',   ping: true,  label: () => t('store_closing_soon') },
    'opening-soon':{ dot: 'bg-blue-400',    ping: false, label: () => t('store_opening_soon') },
  }[status];

  return (
    <div className="inline-flex items-center gap-1.5 bg-black/80 px-2.5 py-1 rounded-sm">
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        {config.ping && (
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.dot} opacity-70`} />
        )}
        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${config.dot}`} />
      </span>
      <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-white">
        {config.label()}
      </span>
    </div>
  );
}

export function StoresSection() {
  const { t } = useLang();
  const [status, setStatus] = useState<StoreStatus>(getStoreStatus());

  useEffect(() => {
    const interval = setInterval(() => setStatus(getStoreStatus()), 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Sub-label jam sesuai status
  const hoursLabel = {
    open:           t('store_hours'),
    closed:         t('store_opens_at'),
    'closing-soon': t('store_closes_at'),
    'opening-soon': t('store_opens_at'),
  }[status];

  return (
    <section
      id="stores"
      className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto bg-brand-neutral1/30">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-center mb-16">
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
            className="group">
            <a
              href={store.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 cursor-pointer no-underline">

              {/* Foto + badge status di pojok kiri atas */}
              <div className="relative aspect-square overflow-hidden bg-brand-neutral2 rounded-xl">
                <img
                  src={store.image}
                  alt={store.city}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2">
                  <StatusBadge status={status} t={t} />
                </div>
              </div>

              {/* Info toko — nama, alamat, jam operasional */}
              <div className="flex flex-col gap-0.5 px-1 text-center">
                <h3 className="font-serif text-base font-medium text-brand-dark">
                  {store.city}
                </h3>
                <p className="text-xs text-gray-500">{store.address}</p>
                {/* Jam operasional — di bawah alamat, seperti semula */}
                <p className="text-[9px] tracking-widest uppercase text-brand-accent font-bold mt-1">
                  {hoursLabel}
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-2xl mx-auto text-center mt-32 mb-12">
        <h2 className="font-serif md:text-5xl text-brand-dark mb-6 text-[36px]">
          {t('section_stores_experience')} <span className="italic">Ninetynine</span>
          <br />
          Fashion in Person
        </h2>
        <p className="text-gray-500 md:text-base max-w-lg mx-auto text-[12px]">
          {t('section_stores_experience_desc')}
        </p>
      </motion.div>
    </section>
  );
}