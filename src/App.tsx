import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
  size: string;
  bundleName?: string;
}
export function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isLooksOpen, setIsLooksOpen] = useState(false);
  const [isAllProductsOpen, setIsAllProductsOpen] = useState(false);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const location = useLocation();
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };
  const handleAddToCart = (
  product: Product,
  quantity: number = 1,
  color: string = 'Default',
  size: string = 'All Size',
  bundleName?: string) =>
  {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) =>
        item.product.id === product.id &&
        item.color === color &&
        item.size === size &&
        item.bundleName === bundleName
      );
      if (existingItemIndex > -1) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }
      return [
      ...prev,
      {
        product,
        quantity,
        color,
        size,
        bundleName
      }];

    });
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
  '/sale'
];

  const showFooter = !noFooterPages.some(path => location.pathname.startsWith(path));
  return (
    <CustomToastProvider>
      <div className="min-h-screen bg-white">
        {isLandingPage &&
        <Navbar
          wishlistCount={wishlist.length}
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)} />

        }

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)} />
        

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
                  onAddToCart={(p) => handleAddToCart(p)} />
                
                  <CollectionBanner
                  onExploreLooks={() => setIsLooksOpen(true)} />
                
                  <OurPicksSection
                  wishlist={wishlist}
                  onToggleWishlist={handleToggleWishlist}
                  onAddToCart={(p) => handleAddToCart(p)}
                  onBrowseAll={() => setIsAllProductsOpen(true)} />
                
                  <StoresSection />
                </>
              } />
            
            <Route
              path="/product/:id"
              element={<ProductDetailPage onAddToCart={handleAddToCart} />} />
            
            <Route
              path="/cart"
              element={
              <CartPage cartItems={cartItems} setCartItems={setCartItems} />
              } />
            
            <Route
              path="/checkout"
              element={<CheckoutPage cartItems={cartItems} />} />
            
            <Route path="/payment" element={<PaymentPage />} />
            <Route
              path="/order-complete"
              element={<OrderCompletePage setCartItems={setCartItems} />} />
            
            <Route
               path="/looks/:lookId"
               element={<LooksDetailPage />}
/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/address" element={<AddressPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/purchase-history" element={<PurchaseHistoryPage />} />
            <Route
              path="/category/:categoryName"
              element={
              <CategoryPage
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={(p) => handleAddToCart(p)} />

              } />
            
            <Route path="/sale" element={<SalePage />} />
            <Route
              path="/sale/:lookId"
              element={<SaleDetailPage onAddToCart={handleAddToCart} />} />
            
          </Routes>
              path="/looks/:lookId"
              element={<LooksDetailPage />}
            />
        </main>

        {showFooter && <Footer />}

        {/* Modals */}
        <WishlistModal
          isOpen={isWishlistOpen}
          onClose={() => setIsWishlistOpen(false)}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={(p) => handleAddToCart(p)} />
        

        <LooksModal
          isOpen={isLooksOpen}
          onClose={() => setIsLooksOpen(false)} />
        

        <AllProductsModal
          isOpen={isAllProductsOpen}
          onClose={() => setIsAllProductsOpen(false)}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={(p) => handleAddToCart(p)} />
        
      </div>
    </CustomToastProvider>);

}