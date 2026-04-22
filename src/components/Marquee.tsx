import React, { Fragment } from 'react';
export function Marquee() {
  const items = ['Pengiriman 24 Jam', 'Payment via Bank BCA & Mandiri', 'Pengiriman melalui JNE / JNT'];
  // Repeat enough times to fill the screen and scroll smoothly
  const repeatedItems = Array(8).fill(items).flat();
  return <div className="bg-brand-neutral1 py-3 overflow-hidden border-b border-brand-neutral2 flex whitespace-nowrap">
      <div className="animate-marquee flex items-center">
        {repeatedItems.map((item, idx) => <Fragment key={idx}>
            <span className="text-[11px] tracking-[0.1em] uppercase text-brand-dark font-medium px-4">
              {item}
            </span>
            <span className="text-brand-accent px-2">—</span>
          </Fragment>)}
      </div>
    </div>;
}