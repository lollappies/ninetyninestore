import React, { useState } from 'react';
import { useCustomToast } from './CustomToast';
import { useLanguage } from '../context/LanguageContext';
import { Link } from "react-router-dom";

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z"/>
    </svg>
  );
}

function ShopeeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.243 2 7 4.243 7 7h2c0-1.654 1.346-3 3-3s3 1.346 3 3h2c0-2.757-2.243-5-5-5zM4 7l-1 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2L20 7H4z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.75.46 3.46 1.34 4.97L2 22l5.24-1.38a9.9 9.9 0 0 0 4.8 1.23h.01c5.48 0 9.94-4.46 9.94-9.94S17.52 2 12.04 2z"/>
    </svg>
  );
}

const socialLinks = [
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/99outfitstore?igsh=MWtlMWRvanBzZnVo',
    label:'Instagram'
  },
  {
    icon:TikTokIcon,
    href:'https://www.tiktok.com/@always.ninetynine',
    label:'TikTok'
  },
  {
    icon:ShopeeIcon,
    href:'https://id.shp.ee/RHtRFQfp',
    label:'Shopee'
  },
  {
    icon:WhatsAppIcon,
    href:'https://api.whatsapp.com/send/?phone=6281335579050',
    label:'WhatsApp'
  }
];

export function Footer() {

const {showToast}=useCustomToast();
const {t}=useLanguage();

const [email,setEmail]=useState('');

const handleSubscribe=(e:React.FormEvent)=>{
e.preventDefault();

const trimmed=email.trim();

if(!trimmed){
showToast(t('toast_email_empty'));
return;
}

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(trimmed)){
showToast(t('toast_email_invalid'));
return;
}

showToast(t('toast_subscribe_success'));
setEmail('');
};

return(

<footer className="bg-black pt-20 pb-10 border-t border-white/10">

<div className="max-w-[1440px] mx-auto px-4 md:px-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

{/* Brand */}

<div className="flex flex-col gap-6">

<span className="font-serif text-3xl text-white">
Ninetynine
</span>

<p className="text-sm text-gray-400 leading-relaxed max-w-xs">
{t('footer_brand_desc')}
</p>

<div className="flex items-center gap-3">

{socialLinks.map((social)=>(

<a
key={social.label}
href={social.href}
target="_blank"
rel="noopener noreferrer"
className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-accent hover:scale-110 transition-all"
>

<social.icon/>

</a>

))}

</div>

</div>

{/* Fashion */}

<div>

<h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-6">
Fashion
</h4>

<ul className="flex flex-col gap-4">

<li>
<Link to="/about" className="text-sm text-gray-400 hover:text-white">
About Ninetynine
</Link>
</li>

<li>
<Link to="/about#story" className="text-sm text-gray-400 hover:text-white">
Our Story
</Link>
</li>

<li>
<Link to="/#stores" className="text-sm text-gray-400 hover:text-white">
Offline Store
</Link>
</li>

</ul>

</div>

{/* Customer Service */}

<div>

<h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-6">
Customer Service
</h4>

<ul className="flex flex-col gap-4">

<li>
<Link to="/contact" className="text-sm text-gray-400 hover:text-white">
Shipping Information
</Link>
</li>

<li>
<Link to="/contact#faq" className="text-sm text-gray-400 hover:text-white">
FAQ
</Link>
</li>

<li>
<Link to="/contact" className="text-sm text-gray-400 hover:text-white">
Contact Us
</Link>
</li>

</ul>

</div>

{/* Newsletter */}

<div>

<h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-6">
Stay Updated
</h4>

<p className="text-sm text-gray-400 mb-4">
Subscribe for new arrivals, exclusive offers, and style inspiration.
</p>

<form className="flex flex-col gap-3" onSubmit={handleSubscribe}>

<input
type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="Your email address"
className="w-full px-4 py-3 bg-white/10 border border-white/10 text-white rounded-md"
/>

<button
type="submit"
className="w-full bg-white text-black py-3 rounded-md text-xs font-bold"
>

SUBSCRIBE

</button>

</form>

</div>

{/* Fashion Journal */}

<div>

<h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-6">
Fashion Journal
</h4>

<ul className="flex flex-col gap-4">

<li>
<Link to="/blog/trend-fashion-wanita-2026" className="text-sm text-gray-400 hover:text-white">
Trend Fashion Wanita 2026
</Link>
</li>

<li>
<Link to="/blog/outfit-casual-wanita" className="text-sm text-gray-400 hover:text-white">
Outfit Casual Wanita
</Link>
</li>

<li>
<Link to="/blog/tips-mix-and-match-wanita" className="text-sm text-gray-400 hover:text-white">
Tips Mix & Match Wanita
</Link>
</li>

</ul>

</div>

</div>

<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">

<span className="text-xs text-gray-500">
{t('footer_copyright')}
</span>

<div className="flex gap-6">

<Link to="/privacy" className="text-xs text-gray-500 hover:text-white">
Privacy Policy
</Link>

<Link to="/terms" className="text-xs text-gray-500 hover:text-white">
Terms of Service
</Link>

<Link to="/privacy#cookies" className="text-xs text-gray-500 hover:text-white">
Cookie Policy
</Link>

</div>

</div>

</div>

</footer>

);

}

export default Footer;