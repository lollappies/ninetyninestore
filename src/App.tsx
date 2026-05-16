import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { CustomToastProvider } from './components/CustomToast';
import { LanguageProvider } from './context/LanguageContext';

import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';

import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { BestsellerSection } from './components/BestsellerSection';
import { CollectionBanner } from './components/CollectionBanner';
import { OurPicksSection } from './components/OurPicksSection';
import { StoresSection } from './components/StoresSection';
import { Footer } from './components/Footer';

import { WishlistModal } from './components/WishlistModal';
import { LooksModal } from './components/LooksModal';
import { AllProductsModal } from './components/AllProductsModal';
import { FaqButton } from './components/FaqButton';

import { Product } from './utils/data';

import { SeoHelmet } from './components/SeoHelmet';

import {
  StoreJsonLd,
  FaqJsonLd,
  WebsiteJsonLd,
  SpeakableJsonLd
} from './components/JsonLd';

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
  size: string;
  bundleName?: string;
}

const isSameProduct = (a: Product, b: Product) =>
  a.name.trim().toLowerCase() === b.name.trim().toLowerCase();

/* ================= LAZY PAGES ================= */

const ProductDetailPage = lazy(() =>
  import('./pages/ProductDetailPage').then(m => ({
    default: m.ProductDetailPage
  }))
);

const CheckoutPage = lazy(() =>
  import('./pages/CheckoutPage').then(m => ({
    default: m.CheckoutPage
  }))
);

const PaymentPage = lazy(() =>
  import('./pages/PaymentPage').then(m => ({
    default: m.PaymentPage
  }))
);

const OrderCompletePage = lazy(() =>
  import('./pages/OrderCompletePage').then(m => ({
    default: m.OrderCompletePage
  }))
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage').then(m => ({
    default: m.LoginPage
  }))
);

const PurchaseHistoryPage = lazy(() =>
  import('./pages/PurchaseHistoryPage').then(m => ({
    default: m.PurchaseHistoryPage
  }))
);

const CartPage = lazy(() =>
  import('./pages/CartPage').then(m => ({
    default: m.CartPage
  }))
);

const ProfilePage = lazy(() =>
  import('./pages/ProfilePage').then(m => ({
    default: m.ProfilePage
  }))
);

const AddressPage = lazy(() =>
  import('./pages/AddressPage').then(m => ({
    default: m.AddressPage
  }))
);

const OrdersPage = lazy(() =>
  import('./pages/OrdersPage').then(m => ({
    default: m.OrdersPage
  }))
);

const CategoryPage = lazy(() =>
  import('./pages/CategoryPage').then(m => ({
    default: m.CategoryPage
  }))
);

const SalePage = lazy(() =>
  import('./pages/SalePage').then(m => ({
    default: m.SalePage
  }))
);

const SaleDetailPage = lazy(() =>
  import('./pages/SaleDetailPage').then(m => ({
    default: m.SaleDetailPage
  }))
);

const LooksDetailPage = lazy(() =>
  import('./pages/LooksDetailPage').then(m => ({
    default: m.LooksDetailPage
  }))
);

/* ================= APP CONTENT ================= */

function AppContent() {
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isLooksOpen, setIsLooksOpen] = useState(false);
  const [isAllProductsOpen, setIsAllProductsOpen] = useState(false);

  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (location.state?.openAllProducts) {
      setIsAllProductsOpen(true);
      window.history.replaceState({}, '');
    }

    if (location.state?.openLooks) {
      setIsLooksOpen(true);
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  const wishlistCount = wishlist.length;

  const cartCount = cartItems.reduce(
    (a, b) => a + b.quantity,
    0
  );

  const handleToggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.find(
        p => isSameProduct(p, product)
      );

      if (exists) {
        return prev.filter(
          p => !isSameProduct(p, product)
        );
      }

      return [...prev, product];
    });
  };

  const handleAddToCart = (
    product: Product,
    quantity = 1,
    color = 'Default',
    size = 'All Size',
    bundleName?: string
  ) => {
    setCartItems(prev => {
      const index = prev.findIndex(
        item =>
          isSameProduct(item.product, product) &&
          item.bundleName === bundleName
      );

      if (index > -1) {
        const copy = [...prev];
        copy[index].quantity += quantity;
        return copy;
      }

      return [
        ...prev,
        {
          product,
          quantity,
          color,
          size,
          bundleName
        }
      ];
    });
  };

  /* HIDE COMPONENTS PADA HALAMAN TERTENTU */

  const hiddenRoutes = [
    '/checkout',
    '/payment',
    '/login'
  ];

  const showNavbar =
    !hiddenRoutes.some(route =>
      location.pathname.startsWith(route)
    );

  const showFooter =
    !hiddenRoutes.some(route =>
      location.pathname.startsWith(route)
    );

  const showFaqButton =
    !location.pathname.includes('/checkout');

  return (
    <div className="min-h-screen bg-white">

      {showNavbar && (
        <>
          <Navbar
            wishlistCount={wishlistCount}
            cartCount={cartCount}
            onWishlistClick={() =>
              setIsWishlistOpen(true)
            }
            onMenuClick={() =>
              setIsMobileMenuOpen(true)
            }
          />

          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() =>
              setIsMobileMenuOpen(false)
            }
          />
        </>
      )}

      <Suspense
        fallback={
          <div className="p-10 text-center">
            Loading...
          </div>
        }
      >

        <Routes>

          <Route
            path="/"
            element={
              <>
                <SeoHelmet
                  title="NineTynine Store"
                  description="Fashion wanita modern"
                />

                <WebsiteJsonLd />
                <StoreJsonLd />
                <FaqJsonLd />
                <SpeakableJsonLd />

                <HeroSection
                  onExploreLooks={() =>
                    setIsLooksOpen(true)
                  }
                />

                <Marquee />

                <BestsellerSection
                  wishlist={wishlist}
                  onToggleWishlist={handleToggleWishlist}
                  onAddToCart={handleAddToCart}
                />

                <CollectionBanner
                  onExploreLooks={() =>
                    setIsLooksOpen(true)
                  }
                />

                <OurPicksSection
                  wishlist={wishlist}
                  onToggleWishlist={handleToggleWishlist}
                  onAddToCart={handleAddToCart}
                  onBrowseAll={() =>
                    setIsAllProductsOpen(true)
                  }
                />

                <StoresSection />
              </>
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProductDetailPage
                onAddToCart={handleAddToCart}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onOpenWishlist={() =>
                  setIsWishlistOpen(true)
                }
              />
            }
          />

          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />

          <Route
            path="/checkout"
            element={
              <CheckoutPage
                cartItems={cartItems}
              />
            }
          />

          <Route
            path="/payment"
            element={<PaymentPage />}
          />

          <Route
            path="/order-complete"
            element={
              <OrderCompletePage
                setCartItems={setCartItems}
              />
            }
          />

          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route
            path="/profile"
            element={<ProfilePage />}
          />

          <Route
            path="/address"
            element={<AddressPage />}
          />

          <Route
            path="/orders"
            element={<OrdersPage />}
          />

          <Route
            path="/purchase-history"
            element={<PurchaseHistoryPage />}
          />

          <Route
            path="/category/:categoryName"
            element={
              <CategoryPage
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={handleAddToCart}
                onOpenWishlist={() =>
                  setIsWishlistOpen(true)
                }
                wishlistCount={wishlistCount}
                cartCount={cartCount}
              />
            }
          />

          <Route
            path="/sale"
            element={<SalePage />}
          />

          <Route
            path="/sale/:lookId"
            element={<SaleDetailPage />}
          />

          <Route
            path="/looks/:lookId"
            element={
              <LooksDetailPage
                onAddToCart={handleAddToCart}
                onOpenWishlist={() =>
                  setIsLooksOpen(true)
                }
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                wishlistCount={wishlistCount}
                cartCount={cartCount}
              />
            }
          />

        </Routes>

      </Suspense>

      {showFooter && <Footer />}
      {showFaqButton && <FaqButton />}

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() =>
          setIsWishlistOpen(false)
        }
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <LooksModal
        isOpen={isLooksOpen}
        onClose={() =>
          setIsLooksOpen(false)
        }
      />

      <AllProductsModal
        isOpen={isAllProductsOpen}
        onClose={() =>
          setIsAllProductsOpen(false)
        }
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CustomToastProvider>
        <AppContent />
      </CustomToastProvider>
    </LanguageProvider>
  );
}