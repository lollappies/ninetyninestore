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
  }
  return totalMinutes < openMinutes && openMinutes - totalMinutes <= soonMinutes
    ? 'opening-soon'
    : 'closed';
}

function StatusBadge({ status, lang }: { status: StoreStatus; lang: string }) {
  const dotColor: Record<StoreStatus, string> = {
    open:           '#34d399', // emerald
    closed:         '#f87171', // red
    'closing-soon': '#fb923c', // orange
    'opening-soon': '#fb923c', // orange
  };

  const ping = status !== 'closed';

  // label hardcode dua bahasa langsung di sini supaya pasti tampil
  const labelMap: Record<StoreStatus, { id: string; en: string }> = {
    open:           { id: 'BUKA',         en: 'OPEN' },
    closed:         { id: 'TUTUP',        en: 'CLOSED' },
    'closing-soon': { id: 'SEGERA TUTUP', en: 'CLOSING SOON' },
    'opening-soon': { id: 'SEGERA BUKA',  en: 'OPENING SOON' },
  };

  const label = lang === 'ID' ? labelMap[status].id : labelMap[status].en;
  const color = dotColor[status];

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      backgroundColor: 'rgba(0,0,0,0.75)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      padding: '6px 12px',
      borderRadius: '8px',
      border: '1px solid rgba(255,255,255,0.15)',
      minWidth: 'max-content',
    }}>
      {/* Dot */}
      <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px', flexShrink: 0 }}>
        {ping && (
          <span style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            backgroundColor: color,
            opacity: 0.6,
            animation: 'ping 1.4s ease-in-out infinite',
          }} />
        )}
        <span style={{
          position: 'relative',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: color,
          flexShrink: 0,
        }} />
      </span>
      {/* Label teks */}
      <span style={{
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.08em',
        color: '#ffffff',
        whiteSpace: 'nowrap',
        lineHeight: 1,
        fontFamily: 'inherit',
      }}>
        {label}
      </span>
    </div>
  );
}

export function StoresSection() {
  const { lang, t } = useLang();
  const [status, setStatus] = useState<StoreStatus>(getStoreStatus());

  useEffect(() => {
    const interval = setInterval(() => setStatus(getStoreStatus()), 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const hoursLabel = {
    open:           '09.00 – 21.00 WIB',
    closed:         lang === 'ID' ? 'Buka pukul 09.00 WIB' : 'Opens at 09.00 WIB',
    'closing-soon': lang === 'ID' ? 'Tutup pukul 21.00 WIB' : 'Closes at 21.00 WIB',
    'opening-soon': lang === 'ID' ? 'Buka pukul 09.00 WIB' : 'Opens at 09.00 WIB',
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

              <div className="relative aspect-square overflow-hidden bg-brand-neutral2 rounded-xl">
                <img
                  src={store.image}
                  alt={store.city}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Badge pojok kiri atas */}
                <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 10 }}>
                  <StatusBadge status={status} lang={lang} />
                </div>
              </div>

              <div className="flex flex-col gap-0.5 px-1 text-center">
                <h3 className="font-serif text-base font-medium text-brand-dark">
                  {store.city}
                </h3>
                <p className="text-xs text-gray-500">{store.address}</p>
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