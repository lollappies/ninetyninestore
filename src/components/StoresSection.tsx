import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { stores } from '../utils/data';
export function StoresSection() {
  return (
    <section
      id="stores"
      className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto bg-brand-neutral1/30">
      
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-100px'
        }}
        className="text-center mb-16">
        
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 block mb-3">
          Find Us
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">
          Visit Our Store
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
        {stores.map((store, idx) =>
        <motion.div
          key={store.city}
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            delay: idx * 0.05,
            duration: 0.5
          }}
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
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              </div>
              <div className="flex flex-col gap-1 px-1 text-center">
                <h3 className="font-serif text-base font-medium text-brand-dark">
                  {store.city}
                </h3>
                <p className="text-xs text-gray-500 mb-1">{store.address}</p>
                <span className="text-[9px] tracking-widest uppercase text-brand-accent font-bold">
                  Open Daily
                </span>
              </div>
            </a>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-100px'
        }}
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
    </section>);

}