// src/App.tsx
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import { StoreJsonLd, FaqJsonLd } from './components/JsonLd';
import { Product } from './utils/data';
import { ScrollToTop } from './components/ScrollToTop';

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
  size: string;
  bundleName?: string;
}

const isSameProduct = (a: Product, b: Product) =>
  a.name.trim().toLowerCase() === b.name.trim().toLowerCase();

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isLooksOpen, setIsLooksOpen] = useState(false);
  const [isAllProductsOpen, setIsAllProductsOpen] = useState(false);
  const [wishlistOpenedFrom, setWishlistOpenedFrom] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

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
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => isSameProduct(item, product));
      if (exists) return prev.filter((item) => !isSameProduct(item, product));
      return [...prev, product];
    });
  };

  const ProductDetailPage = lazy(() =>
  import('./pages/ProductDetailPage').then(module => ({
    default: module.ProductDetailPage
  }))
);

const CheckoutPage = lazy(() =>
  import('./pages/CheckoutPage').then(module => ({
    default: module.CheckoutPage
  }))
);

const PaymentPage = lazy(() =>
  import('./pages/PaymentPage').then(module => ({
    default: module.PaymentPage
  }))
);

const OrderCompletePage = lazy(() =>
  import('./pages/OrderCompletePage').then(module => ({
    default: module.OrderCompletePage
  }))
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage').then(module => ({
    default: module.LoginPage
  }))
);

const PurchaseHistoryPage = lazy(() =>
  import('./pages/PurchaseHistoryPage').then(module => ({
    default: module.PurchaseHistoryPage
  }))
);

const CartPage = lazy(() =>
  import('./pages/CartPage').then(module => ({
    default: module.CartPage
  }))
);

const ProfilePage = lazy(() =>
  import('./pages/ProfilePage').then(module => ({
    default: module.ProfilePage
  }))
);

const AddressPage = lazy(() =>
  import('./pages/AddressPage').then(module => ({
    default: module.AddressPage
  }))
);

const OrdersPage = lazy(() =>
  import('./pages/OrdersPage').then(module => ({
    default: module.OrdersPage
  }))
);

const CategoryPage = lazy(() =>
  import('./pages/CategoryPage').then(module => ({
    default: module.CategoryPage
  }))
);

const SalePage = lazy(() =>
  import('./pages/SalePage').then(module => ({
    default: module.SalePage
  }))
);

const SaleDetailPage = lazy(() =>
  import('./pages/SaleDetailPage').then(module => ({
    default: module.SaleDetailPage
  }))
);

const LooksDetailPage = lazy(() =>
  import('./pages/LooksDetailPage').then(module => ({
    default: module.LooksDetailPage
  }))
);

  const handleAddToCart = (
    product: Product,
    quantity: number = 1,
    color: string = 'Default',
    size: string = 'All Size',
    bundleName?: string
  ) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) =>
          isSameProduct(item.product, product) &&
          item.bundleName === bundleName
      );
      if (existingItemIndex > -1) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }
      return [...prev, { product, quantity, color, size, bundleName }];
    });
  };

  const handleOpenWishlist = (from?: string) => {
    setWishlistOpenedFrom(from || null);
    setIsWishlistOpen(true);
  };

  const handleCloseWishlist = () => {
    setIsWishlistOpen(false);
    if (wishlistOpenedFrom === 'looks') {
      setIsLooksOpen(true);
    }
    setWishlistOpenedFrom(null);
  };

  const isLandingPage = location.pathname === '/';

  const noFooterPages = [
    '/checkout',
    '/payment',
    '/order-complete',
    '/profile',
    '/address',
    '/orders',
    '/purchase-history',
    '/login',
    '/sale',
    '/looks',
    '/category',
  ];

  const showFooter = !noFooterPages.some(path => location.pathname.startsWith(path));

  const hideFaqPages = ['/checkout', '/payment', '/order-complete', '/login'];
  const showFaqButton = !hideFaqPages.some(path => location.pathname.startsWith(path));

  return (
    <div className="min-h-screen bg-white">
      {isLandingPage && (
        <Navbar
          wishlistCount={wishlistCount}
          cartCount={cartCount}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onOpenWishlist={() => handleOpenWishlist()}
        />
      )}

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center text-sm tracking-[0.2em] uppercase">
              Loading...
            </div>
          }
        >
          <Routes>
          </Suspense>

          {/* ===== HOMEPAGE ===== */}
          <Route
            path="/"
            element={
              <>
                <StoreJsonLd />
                <FaqJsonLd />
                <HeroSection onExploreLooks={() => setIsLooksOpen(true)} />
                <Marquee />
                <BestsellerSection
                  wishlist={wishlist}
                  onToggleWishlist={handleToggleWishlist}
                  onAddToCart={(p) => handleAddToCart(p)}
                />
                <CollectionBanner onExploreLooks={() => setIsLooksOpen(true)} />
                <OurPicksSection
                  wishlist={wishlist}
                  onToggleWishlist={handleToggleWishlist}
                  onAddToCart={(p) => handleAddToCart(p)}
                  onBrowseAll={() => setIsAllProductsOpen(true)}
                />
                <StoresSection />
              </>
            }
          />

          {/* ===== PRODUCT DETAIL ===== */}
          <Route
            path="/product/:id"
            element={
              <ProductDetailPage
                onAddToCart={handleAddToCart}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onOpenWishlist={() => handleOpenWishlist()}
              />
            }
          />

          {/* ===== CART & TRANSAKSI ===== */}
          <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/order-complete" element={<OrderCompletePage setCartItems={setCartItems} />} />

          {/* ===== AUTH & PROFIL ===== */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage onOpenWishlist={() => handleOpenWishlist()} />} />
          <Route path="/address" element={<AddressPage onOpenWishlist={() => handleOpenWishlist()} />} />
          <Route path="/orders" element={<OrdersPage onOpenWishlist={() => handleOpenWishlist()} />} />
          <Route path="/purchase-history" element={<PurchaseHistoryPage onOpenWishlist={() => handleOpenWishlist()} />} />

          {/* ===== KATEGORI ===== */}
          <Route
            path="/category/:categoryName"
            element={
              <CategoryPage
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={(p) => handleAddToCart(p)}
                onOpenWishlist={() => handleOpenWishlist()}
                wishlistCount={wishlistCount}
                cartCount={cartCount}
              />
            }
          />

          {/* ===== SALE ===== */}
          <Route
            path="/sale"
            element={
              <SalePage
                onOpenWishlist={() => handleOpenWishlist()}
                wishlistCount={wishlistCount}
                cartCount={cartCount}
              />
            }
          />
          <Route
            path="/sale/:lookId"
            element={
              <SaleDetailPage
                onAddToCart={handleAddToCart}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onOpenWishlist={() => handleOpenWishlist()}
                wishlistCount={wishlistCount}
                cartCount={cartCount}
              />
            }
          />

          {/* ===== LOOKS ===== */}
          <Route
            path="/looks/:lookId"
            element={
              <LooksDetailPage
                onAddToCart={handleAddToCart}
                onOpenWishlist={() => handleOpenWishlist('looks')}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                wishlistCount={wishlistCount}
                cartCount={cartCount}
              />
            }
          />

        </Routes>
      </main>

      {showFooter && <Footer />}

      {showFaqButton && <FaqButton />}

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={handleCloseWishlist}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={(p) => handleAddToCart(p)}
      />
      <LooksModal
        isOpen={isLooksOpen}
        onClose={() => setIsLooksOpen(false)}
        onOpenWishlist={() => handleOpenWishlist('looks')}
        wishlistCount={wishlistCount}
        cartCount={cartCount}
      />
      <AllProductsModal
        isOpen={isAllProductsOpen}
        onClose={() => setIsAllProductsOpen(false)}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={(p) => handleAddToCart(p)}
        onOpenWishlist={() => handleOpenWishlist()}
        wishlistCount={wishlistCount}
        cartCount={cartCount}
      />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <CustomToastProvider>
        <AppContent />
      </CustomToastProvider>
    </LanguageProvider>
  );
}