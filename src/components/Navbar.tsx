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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
          : 'bg-white border-b border-gray-200 py-3'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-14">

        {/* Kiri: Hamburger (mobile) + Logo */}
        <div className="flex items-center gap-2 md:gap-0 flex-1">
          <button
            className="md:hidden p-2 -ml-2 text-gray-800"
            onClick={onOpenMobileMenu}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          
            href="/"
            className="font-serif text-2xl md:text-[1.65rem] font-normal tracking-wide text-gray-900 hover:opacity-80 transition-opacity duration-300 select-none"
          >
            Ninetynine
          </a>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => navigate('/sale')}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-accent hover:opacity-70 transition-opacity duration-300"
          >
            Sale
          </button>

          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-[11px] font-medium tracking-[0.18em] uppercase text-gray-800 hover:text-gray-500 transition-colors duration-300">
              Category
              <ChevronDown
                size={13}
                strokeWidth={2}
                className={`mt-px transition-transform duration-300 ease-out ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-300 ease-out ${
                isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <ul className="bg-white border border-gray-100 rounded-xl py-2 min-w-[180px] shadow-xl shadow-gray-200/60">
                {categories.map((cat, idx) => (
                  <li
                    key={cat}
                    className={idx !== categories.length - 1 ? 'border-b border-gray-50' : ''}
                  >
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        navigate(`/category/${cat.toLowerCase()}`);
                      }}
                      className="w-full text-left px-5 py-2.5 text-[10.5px] tracking-[0.14em] uppercase text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
            href="#stores"
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-gray-800 hover:text-gray-500 transition-colors duration-300"
          >
            Offline Store
          </a>
        </nav>

        {/* Kanan: Icons */}
        <div className="flex items-center gap-5 md:gap-6 flex-1 justify-end text-gray-800">

          {/* Search */}
          <div className="relative" ref={searchRef}>
            <button
              aria-label="Search"
              className="hover:opacity-60 transition-opacity duration-300 flex items-center"
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (!isSearchOpen)
                  setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
              }}
            >
              {isSearchOpen
                ? <X size={20} strokeWidth={1.5} />
                : <Search size={20} strokeWidth={1.5} />
              }
            </button>

            {isSearchOpen && (
              <div className="absolute right-0 top-full mt-4 w-[300px] md:w-[400px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-3 border-b border-gray-100">
                  <div className="relative">
                    <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="searchInput"
                      type="text"
                      placeholder="Search products, series..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-800 border-none focus:ring-0 focus:outline-none placeholder:text-gray-400"
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
                            className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200 text-left w-full"
                          >
                            <img
                              src={product.imageMain}
                              alt={product.name}
                              className="w-12 h-16 object-cover rounded-lg bg-gray-100"
                            />
                            <div className="flex flex-col flex-1">
                              <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                                {product.series}
                              </span>
                              <span className="text-sm font-medium text-gray-900 line-clamp-1">
                                {product.name}
                              </span>
                              {product.price && (
                                <span className="text-xs text-gray-600 mt-0.5">
                                  {product.price}
                                </span>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-sm text-gray-400">
                        No products found for "{searchQuery}"
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
            className="relative hover:opacity-60 transition-opacity duration-300"
          >
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
            className="relative hover:opacity-60 transition-opacity duration-300"
          >
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
            className="hover:opacity-60 transition-opacity duration-300"
          >
            <User size={20} strokeWidth={1.5} />
          </button>

        </div>
      </div>
    </header>
  );
}