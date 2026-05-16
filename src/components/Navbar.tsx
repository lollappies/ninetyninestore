// src/components/Navbar.tsx
import React, { useEffect, useState, useRef } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  ChevronDown,
  X,
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { allProducts, Product } from '../utils/data';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  wishlistCount: number;
  cartCount: number;
  onOpenMobileMenu: () => void;
  onOpenWishlist: () => void;
}

export function Navbar({
  wishlistCount,
  cartCount,
  onOpenMobileMenu,
  onOpenWishlist,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const results = allProducts.filter(
      (product) =>
        product.name?.toLowerCase().includes(query) ||
        product.series?.toLowerCase().includes(query) ||
        product.price?.toLowerCase().includes(query)
    );
    setSearchResults(results);
  }, [searchQuery]);

  const handleOfflineStoreClick = () => {
    if (isHomepage) {
      document.getElementById('stores')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: 'stores' } });
    }
  };

  const categories = [
    { key: 'dress',   label: t('category_dress') },
    { key: 'blouse',  label: t('category_blouse') },
    { key: 'tunic',   label: t('category_tunic') },
    { key: 'outer',   label: t('category_outer') },
    { key: 'sweater', label: t('category_sweater') },
    { key: 'pants',   label: t('category_pants') },
    { key: 'skirt',   label: t('category_skirt') },
  ];

  // Navbar jadi solid (non-transparent) jika bukan di homepage, atau sudah di-scroll
  const isSolid = !isHomepage || isScrolled;

  const headerClass = `fixed top-0 left-0 right-0 z-40 will-change-[background,padding] transition-all duration-500 ease-in-out ${
    isSolid
      ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm'
      : 'bg-transparent py-6'
  }`;

  const logoClass = `font-serif text-2xl md:text-3xl font-medium tracking-wide transition-colors duration-500 ease-in-out ${
    isSolid ? 'text-brand-dark' : 'text-brand-dark md:text-white'
  }`;

  const categoryBtnClass = `flex items-center gap-1 text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-500 ease-in-out ${
    isSolid ? 'text-brand-dark' : 'text-white'
  }`;

  const offlineStoreClass = `text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-500 ease-in-out ${
    isSolid ? 'text-brand-dark hover:text-brand-accent' : 'text-white hover:text-brand-neutral2'
  }`;

  const iconsClass = `flex items-center gap-4 md:gap-6 transition-colors duration-500 ease-in-out ${
    isSolid || isSearchOpen ? 'text-brand-dark' : 'text-brand-dark md:text-white'
  }`;

  const chevronClass = `transition-transform duration-300 ease-out ${
    isDropdownOpen ? 'rotate-180' : ''
  }`;

  const dropdownClass = `absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${
    isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
  }`;

  return (
    <header className={headerClass}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* Kiri: Hamburger + Logo */}
        <div className="flex items-center gap-2 md:gap-0">
          <button
            className="md:hidden p-2 -ml-2 text-brand-dark"
            onClick={onOpenMobileMenu}
            aria-label="Open menu">
            <Menu size={24} />
          </button>
          {/* Pakai Link bukan <a href="#"> supaya tidak full reload */}
          <Link to="/" className={logoClass}>
            Ninetynine
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => navigate('/sale')}
            className="text-brand-accent text-xs font-bold tracking-[0.15em] uppercase hover:opacity-80 transition-opacity duration-300">
            {t('nav_sale')}
          </button>

          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className={categoryBtnClass}>
              {t('nav_category')}
              <ChevronDown size={14} className={chevronClass} />
            </button>
            <div className={dropdownClass}>
              <ul className="bg-brand-dark rounded-lg py-2 min-w-[180px] shadow-xl">
                {categories.map((cat, idx) => (
                  <li
                    key={cat.key}
                    className={idx !== categories.length - 1 ? 'border-b border-white/5' : ''}>
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        navigate(`/category/${cat.key}`);
                      }}
                      className="w-full text-left block px-5 py-3 text-[11px] tracking-[0.12em] uppercase text-white/80 hover:text-white transition-colors duration-200">
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Offline Store — scroll ke #stores jika di homepage, navigate + scroll jika di halaman lain */}
          <button onClick={handleOfflineStoreClick} className={offlineStoreClass}>
            {t('nav_offline_store')}
          </button>
        </nav>

        {/* Icons + Language Toggle */}
        <div className={iconsClass}>

          {/* Search */}
          <div className="relative" ref={searchRef}>
            <button
              aria-label="Search"
              className="hover:opacity-70 transition-opacity duration-300 flex items-center"
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (!isSearchOpen)
                  setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
              }}>
              {isSearchOpen ? <X size={20} strokeWidth={1.5} /> : <Search size={20} strokeWidth={1.5} />}
            </button>

            {isSearchOpen && (
              <div className="absolute right-0 top-full mt-4 w-[300px] md:w-[400px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-3 border-b border-gray-100">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="searchInput"
                      type="text"
                      placeholder={t('nav_search_placeholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm text-brand-dark focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
                {searchQuery && (
                  <div className="max-h-[60vh] overflow-y-auto p-2">
                    {searchResults.length > 0 ? (
                      <div className="flex flex-col gap-1">
                        {searchResults.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery('');
                              navigate(`/product/${product.id}`);
                            }}
                            className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-left w-full">
                            <img
                              src={product.imageMain}
                              alt={product.name}
                              className="w-12 h-16 object-cover rounded-md bg-gray-100"
                            />
                            <div className="flex flex-col flex-1">
                              <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                                {product.series}
                              </span>
                              <span className="text-sm font-medium text-brand-dark line-clamp-1">
                                {product.name}
                              </span>
                              {product.price && (
                                <span className="text-xs text-brand-dark mt-1">
                                  {product.price}
                                </span>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-sm text-gray-500">
                        {t('nav_search_empty')} "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Wishlist */}
          <button
            aria-label="Wishlist"
            onClick={onOpenWishlist}
            className="relative hover:opacity-70 transition-opacity duration-300">
            <Heart size={20} strokeWidth={1.5} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-accent text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            aria-label="Cart"
            onClick={() => navigate('/cart')}
            className="relative hover:opacity-70 transition-opacity duration-300">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-accent text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Account */}
          <button
            aria-label="Account"
            onClick={() => navigate('/profile')}
            className="hover:opacity-70 transition-opacity duration-300">
            <User size={20} strokeWidth={1.5} />
          </button>

          {/* Language Toggle */}
          <div className={`hidden md:flex items-center rounded-full p-[3px] transition-all duration-500 ease-in-out ${
            isSolid
              ? 'bg-[#f5ede4] border border-[#d6c4b0]'
              : 'bg-white/10 border border-white/25'
          }`}>
            {(['ID', 'EN'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] font-medium tracking-widest px-[9px] py-1 rounded-full transition-all duration-500 ease-in-out ${
                  lang === l
                    ? isSolid
                      ? 'bg-[#2c1810] text-[#f5ede4]'
                      : 'bg-white/85 text-[#2c1810]'
                    : isSolid
                      ? 'text-[#a0876e]'
                      : 'text-white/45'
                }`}>
                {l}
              </button>
            ))}
          </div>

        </div>
      </div>
    </header>
  );
}