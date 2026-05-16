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
  import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage }))
);

const CheckoutPage = lazy(() =>
  import('./pages/CheckoutPage').then(m => ({ default: m.CheckoutPage }))
);

const PaymentPage = lazy(() =>
  import('./pages/PaymentPage').then(m => ({ default: m.PaymentPage }))
);

const OrderCompletePage = lazy(() =>
  import('./pages/OrderCompletePage').then(m => ({ default: m.OrderCompletePage }))
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage').then(m => ({ default: m.LoginPage }))
);

const PurchaseHistoryPage = lazy(() =>
  import('./pages/PurchaseHistoryPage').then(m => ({ default: m.PurchaseHistoryPage }))
);

const CartPage = lazy(() =>
  import('./pages/CartPage').then(m => ({ default: m.CartPage }))
);

const ProfilePage = lazy(() =>
  import('./pages/ProfilePage').then(m => ({ default: m.ProfilePage }))
);

const AddressPage = lazy(() =>
  import('./pages/AddressPage').then(m => ({ default: m.AddressPage }))
);

const OrdersPage = lazy(() =>
  import('./pages/OrdersPage').then(m => ({ default: m.OrdersPage }))
);

const CategoryPage = lazy(() =>
  import('./pages/CategoryPage').then(m => ({ default: m.CategoryPage }))
);

const SalePage = lazy(() =>
  import('./pages/SalePage').then(m => ({ default: m.SalePage }))
);

const SaleDetailPage = lazy(() =>
  import('./pages/SaleDetailPage').then(m => ({ default: m.SaleDetailPage }))
);

const LooksDetailPage = lazy(() =>
  import('./pages/LooksDetailPage').then(m => ({ default: m.LooksDetailPage }))
);

/* ================= APP ================= */
function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isLooksOpen, setIsLooksOpen] = useState(false);
  const [isAllProductsOpen, setIsAllProductsOpen] = useState(false);

  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const location = useLocation();

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
  const cartCount = cartItems.reduce((a, b) => a + b.quantity, 0);

  const handleToggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.find(p => isSameProduct(p, product));
      if (exists) return prev.filter(p => !isSameProduct(p, product));
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

      return [...prev, { product, quantity, color, size, bundleName }];
    });
  };

  const handleOpenWishlist = () => setIsWishlistOpen(true);
  const handleCloseWishlist = () => setIsWishlistOpen(false);

  const showFooter = !location.pathname.includes('/checkout') &&
    !location.pathname.includes('/payment');

  const showFaqButton = !location.pathname.includes('/checkout');

  return (
    <div className="min-h-screen bg-white">

      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>

        <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <SeoHelmet
                title="NineTynine Store | Fashion Wanita Trendy Dress, Blouse, Outer"
                description="NineTynine Store menyediakan fashion wanita modern mulai dari dress, blouse, tunic, outer, sweater, dan koleksi trend terbaru dengan gaya kekinian."
                keywords="fashion wanita,dress wanita,blouse,tunik,outer,sweater,baju wanita kekinian,ninetynine store"
                url="https://ninetyninestore-nine.vercel.app/"
                image="https://ninetyninestore-nine.vercel.app/og-image.jpg"
              />

              <WebsiteJsonLd />
              <StoreJsonLd />
              <FaqJsonLd />
              <SpeakableJsonLd />

              <HeroSection
                onExploreLooks={() => setIsLooksOpen(true)}
              />

              <Marquee />

              <BestsellerSection
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={handleAddToCart}
              />

              <CollectionBanner
                onExploreLooks={() => setIsLooksOpen(true)}
              />

              <OurPicksSection
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={handleAddToCart}
                onBrowseAll={() => setIsAllProductsOpen(true)}
              />

              <StoresSection />
            </>
          }
        />
          {/* PRODUCT DETAIL */}
          <Route
            path="/product/:id"
            element={
              <ProductDetailPage
                onAddToCart={handleAddToCart}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onOpenWishlist={handleOpenWishlist}
              />
            }
          />

          {/* CART */}
          <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />

          {/* CHECKOUT */}
          <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />

          {/* PAYMENT */}
          <Route path="/payment" element={<PaymentPage />} />

          {/* ORDER COMPLETE */}
          <Route path="/order-complete" element={<OrderCompletePage setCartItems={setCartItems} />} />

          {/* LOGIN */}
          <Route path="/login" element={<LoginPage />} />

          {/* PROFILE */}
          <Route path="/profile" element={<ProfilePage onOpenWishlist={handleOpenWishlist} />} />

          {/* ADDRESS */}
          <Route path="/address" element={<AddressPage onOpenWishlist={handleOpenWishlist} />} />

          {/* ORDERS */}
          <Route path="/orders" element={<OrdersPage onOpenWishlist={handleOpenWishlist} />} />

          {/* PURCHASE HISTORY */}
          <Route path="/purchase-history" element={<PurchaseHistoryPage onOpenWishlist={handleOpenWishlist} />} />

          {/* CATEGORY */}
          <Route
            path="/category/:categoryName"
            element={
              <CategoryPage
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={handleAddToCart}
                onOpenWishlist={handleOpenWishlist}
                wishlistCount={wishlistCount}
                cartCount={cartCount}
              />
            }
          />

          {/* SALE */}
          <Route path="/sale" element={<SalePage />} />
          <Route path="/sale/:lookId" element={<SaleDetailPage />} />

          {/* LOOKS */}
          <Route
            path="/looks/:lookId"
            element={
              <LooksDetailPage
                onAddToCart={handleAddToCart}
                onOpenWishlist={() => setIsLooksOpen(true)}
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
        onClose={handleCloseWishlist}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <LooksModal
        isOpen={isLooksOpen}
        onClose={() => setIsLooksOpen(false)}
      />

      <AllProductsModal
        isOpen={isAllProductsOpen}
        onClose={() => setIsAllProductsOpen(false)}
      />

    </div>
  );
}

/* ================= DEFAULT EXPORT FIX ================= */
export default function App() {
  return (
    <LanguageProvider>
      <CustomToastProvider>
        <AppContent />
      </CustomToastProvider>
    </LanguageProvider>
  );
}