import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Cloud } from 'lucide-react';
export function Footer() {
  return <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <span className="font-serif text-3xl text-white">Ninetynine</span>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              A women's fashion brand celebrating timeless elegance, modern
              femininity, and the beauty of simplicity.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Twitter, Linkedin, Cloud].map((Icon, i) => <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-accent transition-colors">
                    <Icon size={14} fill={i === 2 || i === 4 ? 'currentColor' : 'none'} />
                  </a>)}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-6">
              Fashion
            </h4>
            <ul className="flex flex-col gap-4">
              {['About Ninetynine', 'Our Story', 'Offline Store'].map((link) => <li key={link}>
                    <a href={link === 'Offline Store' ? '#stores' : '#'} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-6">
              Customer Service
            </h4>
            <ul className="flex flex-col gap-4">
              {['Shipping Information', 'FAQ', 'Contact Us'].map((link) => <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-6">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for new arrivals, exclusive offers, and style
              inspiration.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="w-full px-4 py-3 bg-white/10 border border-white/10 focus:border-white outline-none text-sm text-white placeholder:text-gray-500 rounded-md transition-colors" />
              <button type="submit" className="w-full bg-white text-black px-4 py-3 text-xs font-bold tracking-[0.15em] uppercase rounded-md hover:bg-brand-accent hover:text-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <span className="text-xs text-gray-500">
            © 2026 Ninetynine. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => <a key={link} href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                  {link}
                </a>)}
          </div>
        </div>
      </div>
    </footer>;
}