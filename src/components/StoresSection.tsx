// src/components/StoresSection.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { stores } from '../utils/data';

// Jam operasional toko (WIB = UTC+7)
const OPEN_HOUR = 9;   // 09.00
const CLOSE_HOUR = 21; // 21.00
const SOON_THRESHOLD = 1; // "segera buka/tutup" dalam 1 jam ke depan

type StoreStatus = 'open' | 'closed' | 'closing-soon' | 'opening-soon';

function getStoreStatus(): StoreStatus {
  // Ambil jam saat ini dalam timezone WIB (UTC+7)
  const now = new Date();
  const wibOffset = 7 * 60; // menit
  const localOffset = now.getTimezoneOffset(); // menit (negatif untuk timur)
  const wibTime = new Date(now.getTime() + (wibOffset + localOffset) * 60 * 1000);

  const hour = wibTime.getHours();
  const minute = wibTime.getMinutes();
  const totalMinutes = hour * 60 + minute;

  const openMinutes = OPEN_HOUR * 60;
  const closeMinutes = CLOSE_HOUR * 60;
  const soonMinutes = SOON_THRESHOLD * 60;

  const isOpen = totalMinutes >= openMinutes && totalMinutes < closeMinutes;

  if (isOpen) {
    // Cek apakah segera tutup (dalam 1 jam)
    if (closeMinutes - totalMinutes <= soonMinutes) {
      return 'closing-soon';
    }
    return 'open';
  } else {
    // Cek apakah segera buka (dalam 1 jam, sebelum jam buka)
    if (totalMinutes < openMinutes && openMinutes - totalMinutes <= soonMinutes) {
      return 'opening-soon';
    }
    return 'closed';
  }
}

function StatusBadge({ status }: { status: StoreStatus }) {
  const config = {
    open: {
      dot: 'bg-emerald-500',
      text: 'text-emerald-600',
      label: 'Buka',
      sublabel: `09.00 – 21.00 WIB`,
    },
    closed: {
      dot: 'bg-red-400',
      text: 'text-red-500',
      label: 'Tutup',
      sublabel: `Buka pukul 09.00 WIB`,
    },
    'closing-soon': {
      dot: 'bg-amber-500',
      text: 'text-amber-600',
      label: 'Segera Tutup',
      sublabel: `Tutup pukul 21.00 WIB`,
    },
    'opening-soon': {
      dot: 'bg-blue-400',
      text: 'text-blue-500',
      label: 'Segera Buka',
      sublabel: `Buka pukul 09.00 WIB`,
    },
  }[status];

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-1.5">
        {/* Dot dengan animasi pulse kalau buka */}
        <span className="relative flex h-2 w-2">
          {(status === 'open' || status === 'closing-soon') && (
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.dot} opacity-60`} />
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${config.dot}`} />
        </span>
        <span className={`text-[9px] tracking-widest uppercase font-bold ${config.text}`}>
          {config.label}
        </span>
      </div>
      <span className="text-[8px] tracking-wide text-gray-400">
        {config.sublabel}
      </span>
    </div>
  );
}

export function StoresSection() {
  const [status, setStatus] = useState<StoreStatus>(getStoreStatus());

  // Update status setiap menit
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getStoreStatus());
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

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
          Find Us
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">
          Visit Our Store
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
              </div>
              <div className="flex flex-col gap-1 px-1 text-center">
                <h3 className="font-serif text-base font-medium text-brand-dark">
                  {store.city}
                </h3>
                <p className="text-xs text-gray-500 mb-1">{store.address}</p>
                {/* Status buka/tutup real-time — sama untuk semua toko */}
                <StatusBadge status={status} />
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
          Experience <span className="italic">Ninetynine</span>
          <br />
          Fashion in Person
        </h2>
        <p className="text-gray-500 md:text-base max-w-lg mx-auto text-[12px]">
          Step into our beautifully curated spaces and discover the full
          <br />
          Ninetynine collection with our style team.
        </p>
      </motion.div>
    </section>
  );
}