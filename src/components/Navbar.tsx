import React, { useEffect, useState, useRef } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  ChevronDown,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { allProducts, Product } from '../utils/data';

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
  onOpenWishlist
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
        product.name.toLowerCase().includes(query) ||
        product.series.toLowerCase().includes(query) ||
        (product.price && product.price.toLowerCase().includes(query))
    );
    setSearchResults(results);
  }, [searchQuery]);

  const categories = ['Dress', 'Blouse', 'Tunic', 'Outer', 'Sweater', 'Pants', 'Skirt'];

  const headerClass = `fixed top-0 left-0 right-0 z-40 will-change-[background,padding] transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'}`;
  const logoClass = `font-serif text-2xl md:text-3xl font-medium tracking-wide transition-colors duration-500 ease-in-out ${isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-white'}`;
  const categoryBtnClass = `flex items-center gap-1 text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-500 ease-in-out ${isScrolled ? 'text-brand-dark' : 'text-white'}`;
  const offlineStoreClass = `text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-500 ease-in-out ${isScrolled ? 'text-brand-dark hover:text-brand-accent' : 'text-white hover:text-brand-neutral2'}`;
  const iconsClass = `flex items-center gap-4 md:gap-6 transition-colors duration-500 ease-in-out ${isScrolled || isSearchOpen ? 'text-brand-dark' : 'text-brand-dark md:text-white'}`;
  const chevronClass = `transition-transform duration-300 ease-out ${isDropdownOpen ? 'rotate-180' : ''}`;
  const dropdownClass = `absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`;

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
          <a href="#" className={logoClass}>
            Ninetynine
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => navigate('/sale')}
            className="text-brand-accent text-xs font-bold tracking-[0.15em] uppercase hover:opacity-80 transition-opacity duration-300">
            Sale
          </button>

          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className={categoryBtnClass}>
              Category
              <ChevronDown size={14} className={chevronClass} />
            </button>
            <div className={dropdownClass}>
              <ul className="bg-brand-dark rounded-lg py-2 min-w-[180px] shadow-xl">
                {categories.map((cat, idx) => (
                  <li key={cat} className={idx !== categories.length - 1 ? 'border-b border-white/5' : ''}>
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        navigate(`/category/${cat.toLowerCase()}`);
                      }}
                      className="w-full text-left block px-5 py-3 text-[11px] tracking-[0.12em] uppercase text-white/80 hover:text-white transition-colors duration-200">
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a href="#stores" className={offlineStoreClass}>
            Offline Store
          </a>
        </nav>

        {/* Icons */}
        <div className={iconsClass}>
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
                      placeholder="Search products, series..."
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
                        No products found for "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

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

          <button
            aria-label="Account"
            onClick={() => navigate('/profile')}
            className="hover:opacity-70 transition-opacity duration-300">
            <User size={20} strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </header>
  );
}