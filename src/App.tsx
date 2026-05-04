import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CustomToastProvider } from './components/CustomToast';
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
import { Product } from './utils/data';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { PaymentPage } from './pages/PaymentPage';
import { OrderCompletePage } from './pages/OrderCompletePage';
import { LoginPage } from './pages/LoginPage';
import { PurchaseHistoryPage } from './pages/PurchaseHistoryPage';
import { CartPage } from './pages/CartPage';
import { ProfilePage } from './pages/ProfilePage';
import { AddressPage } from './pages/AddressPage';
import { OrdersPage } from './pages/OrdersPage';
import { CategoryPage } from './pages/CategoryPage';
import { SalePage } from './pages/SalePage';
import { SaleDetailPage } from './pages/SaleDetailPage';
import { LooksDetailPage } from './pages/LooksDetailPage';
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

export function App() {
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

  return (
    <CustomToastProvider>
      <ScrollToTop />
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
          <Routes>
            <Route
              path="/"
              element={
                <>
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
            <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order-complete" element={<OrderCompletePage setCartItems={setCartItems} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage onOpenWishlist={() => handleOpenWishlist()} />} />
            <Route path="/address" element={<AddressPage onOpenWishlist={() => handleOpenWishlist()} />} />
            <Route path="/orders" element={<OrdersPage onOpenWishlist={() => handleOpenWishlist()} />} />
            <Route path="/purchase-history" element={<PurchaseHistoryPage onOpenWishlist={() => handleOpenWishlist()} />} />
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
    </CustomToastProvider>
  );
}