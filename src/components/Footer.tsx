import React, { useState } from 'react';
import { useCustomToast } from './CustomToast';
function InstagramIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>);

}
function TikTokIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
    </svg>);

}
function ShopeeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.243 2 7 4.243 7 7h2c0-1.654 1.346-3 3-3s3 1.346 3 3h2c0-2.757-2.243-5-5-5zM4 7l-1 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2L20 7H4zm8 10c-2.757 0-5-2.243-5-5h2c0 1.654 1.346 3 3 3s3-1.346 3-3h2c0 2.757-2.243 5-5 5z" />
    </svg>);

}
function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>);

}
const socialLinks = [
{
  icon: InstagramIcon,
  href: 'https://www.instagram.com/99outfitstore?igsh=MWtlMWRvanBzZnVo',
  label: 'Instagram'
},
{
  icon: TikTokIcon,
  href: 'https://www.tiktok.com/@always.ninetynine?_r=1&_t=ZS-95mCZYXTo2f',
  label: 'TikTok'
},
{
  icon: ShopeeIcon,
  href: 'https://id.shp.ee/RHtRFQfp',
  label: 'Shopee'
},
{
  icon: WhatsAppIcon,
  href: 'https://api.whatsapp.com/send/?phone=6281335579050',
  label: 'WhatsApp'
}];

export function Footer() {
  const { showToast } = useCustomToast();
  const [email, setEmail] = useState('');
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      showToast('Masukkan alamat email terlebih dahulu');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      showToast('Format email tidak valid');
      return;
    }
    showToast('Subscribe Berhasil');
    setEmail('');
  };
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
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
              {socialLinks.map((social) =>
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-accent hover:scale-110 transition-all duration-200">
                
                  <social.icon />
                </a>
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-6">
              Fashion
            </h4>
            <ul className="flex flex-col gap-4">
              {['About Ninetynine', 'Our Story', 'Offline Store'].map(
                (link) =>
                <li key={link}>
                    <a
                    href={link === 'Offline Store' ? '#stores' : '#'}
                    className="text-sm text-gray-400 hover:text-white transition-colors">
                    
                      {link}
                    </a>
                  </li>

              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-6">
              Customer Service
            </h4>
            <ul className="flex flex-col gap-4">
              {['Shipping Information', 'FAQ', 'Contact Us'].map((link) =>
              <li key={link}>
                  <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors">
                  
                    {link}
                  </a>
                </li>
              )}
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
            <form className="flex flex-col gap-3" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/10 border border-white/10 focus:border-white outline-none text-sm text-white placeholder:text-gray-500 rounded-md transition-colors" />
              
              <button
                type="submit"
                className="w-full bg-white text-black px-4 py-3 text-xs font-bold tracking-[0.15em] uppercase rounded-md hover:bg-brand-accent hover:text-white transition-colors">
                
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
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(
              (link) =>
              <a
                key={link}
                href="#"
                className="text-xs text-gray-500 hover:text-white transition-colors">
                
                  {link}
                </a>

            )}
          </div>
        </div>
      </div>
    </footer>);

}