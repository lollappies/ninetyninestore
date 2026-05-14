// src/components/Marquee.tsx
import React, { Fragment } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Marquee() {
  const { t } = useLanguage();

  const items = [
    t('marquee_express'),
    t('marquee_payment'),
    t('marquee_shipping'),
  ];

  const repeatedItems = Array(8).fill(items).flat();

  return (
    <div className="bg-brand-neutral1 py-3 overflow-hidden border-b border-brand-neutral2 flex whitespace-nowrap">
      <div className="animate-marquee flex items-center">
        {repeatedItems.map((item, idx) => (
          <Fragment key={idx}>
            <span className="text-[11px] tracking-[0.1em] uppercase text-brand-dark font-medium px-4">
              {item}
            </span>
            <span className="text-brand-accent px-2">—</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}