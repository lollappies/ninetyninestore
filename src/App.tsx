// src/App.tsx

import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';

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

import {
  OrganizationJsonLd,
  StoreJsonLd,
  WebsiteJsonLd,
  WebPageJsonLd,
  FaqJsonLd,
  SpeakableJsonLd
} from './components/JsonLd';

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
import Blog from './pages/blog/Blog';
import TrendFashionWanita2026 from './pages/blog/TrendFashionWanita2026';
import OutfitCasualWanita from './pages/blog/OutfitCasualWanita';
import TipsMixAndMatchWanita from './pages/blog/tips-mix-and-match-wanita';

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

  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const [isLooksOpen, setIsLooksOpen] = useState(false);

  const [isAllProductsOpen, setIsAllProductsOpen] = useState(false);

  const [wishlistOpenedFrom, setWishlistOpenedFrom] =
    useState<string | null>(null);

  const [wishlist, setWishlist] =
    useState<Product[]>([]);

  const [cartItems, setCartItems] =
    useState<CartItem[]>([]);

  useEffect(() => {

    if(location.state?.openAllProducts){

      setIsAllProductsOpen(true);

      window.history.replaceState({},'');

    }

    if(location.state?.openLooks){

      setIsLooksOpen(true);

      window.history.replaceState({},'');

    }

  },[location.state]);


  const wishlistCount=wishlist.length;

  const cartCount=cartItems.reduce(

    (acc,item)=>acc+item.quantity,

    0

  );


  const handleToggleWishlist=(product:Product)=>{

    setWishlist(prev=>{

      const exists=prev.find(item=>

        isSameProduct(item,product)

      );

      if(exists){

        return prev.filter(item=>

          !isSameProduct(item,product)

        )

      }

      return [...prev,product]

    })

  }



const handleAddToCart=(

product:Product,
quantity:number=1,
color:string='Default',
size:string='All Size',
bundleName?:string

)=>{

setCartItems(prev=>{

const index=prev.findIndex(

item=>

isSameProduct(
item.product,
product
)

&&

item.bundleName===bundleName

)

if(index>-1){

const copy=[...prev]

copy[index].quantity+=quantity

return copy

}

return[

...prev,

{
product,
quantity,
color,
size,
bundleName
}

]

})

}


const handleOpenWishlist=(from?:string)=>{

setWishlistOpenedFrom(
from||null
)

setIsWishlistOpen(true)

}


const handleCloseWishlist=()=>{

setIsWishlistOpen(false)

if(
wishlistOpenedFrom==='looks'
){

setIsLooksOpen(true)

}

setWishlistOpenedFrom(null)

}



const isLandingPage=
location.pathname==='/'



const noFooterPages=[

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
'/blog'

]

const showFooter=

!noFooterPages.some(

path=>

location.pathname.startsWith(path)

)



const hideFaqPages=[

'/checkout',
'/payment',
'/order-complete',
'/login'

]

const showFaqButton=

!hideFaqPages.some(

path=>

location.pathname.startsWith(path)

)


return(

<div className="min-h-screen bg-white">

<ScrollToTop/>


<OrganizationJsonLd/>
<WebsiteJsonLd/>
<WebPageJsonLd/>
<StoreJsonLd/>
<FaqJsonLd/>
<SpeakableJsonLd/>


{isLandingPage&&(

<Navbar
wishlistCount={wishlistCount}
cartCount={cartCount}
onOpenMobileMenu={()=>
setIsMobileMenuOpen(true)
}
onOpenWishlist={()=>
handleOpenWishlist()
}
/>

)}


<MobileMenu
isOpen={isMobileMenuOpen}
onClose={()=>
setIsMobileMenuOpen(false)
}
/>


<main>

<Routes>

<Route
path="/"
element={
<>
<HeroSection
onExploreLooks={()=>
setIsLooksOpen(true)
}
/>

<Marquee/>

<BestsellerSection
wishlist={wishlist}
onToggleWishlist={handleToggleWishlist}
onAddToCart={(p)=>
handleAddToCart(p)
}
/>

<CollectionBanner
onExploreLooks={()=>
setIsLooksOpen(true)
}
/>

<OurPicksSection
wishlist={wishlist}
onToggleWishlist={handleToggleWishlist}
onAddToCart={(p)=>
handleAddToCart(p)
}
onBrowseAll={()=>
setIsAllProductsOpen(true)
}
/>

<div className="max-w-7xl mx-auto px-6 py-20">

<h2 className="text-4xl font-bold mb-8">

Fashion Journal

</h2>

<p className="text-gray-500 mb-8">

Inspirasi fashion terbaru dari Ninetynine

</p>

<Link to="/blog/trend-fashion-wanita-2026">

<div className="border rounded-2xl p-8 hover:shadow-xl transition cursor-pointer">

<p className="text-sm uppercase text-gray-400">

Fashion Trend

</p>

<h3 className="text-2xl font-semibold mt-3">

Trend Fashion Wanita 2026:
Inspirasi Outfit Casual dan Elegan

</h3>

<p className="mt-4 text-gray-600">

Temukan inspirasi dress, blouse,
tunic hingga outfit casual wanita terbaru.

</p>

</div>

</Link>

</div>

<StoresSection/>

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
onOpenWishlist={()=>
handleOpenWishlist()
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
element={<PaymentPage/>}
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
element={<LoginPage/>}
/>

<Route
path="/profile"
element={
<ProfilePage
onOpenWishlist={()=>
handleOpenWishlist()
}
/>
}
/>

<Route
path="/address"
element={
<AddressPage
onOpenWishlist={()=>
handleOpenWishlist()
}
/>
}
/>

<Route
path="/orders"
element={
<OrdersPage
onOpenWishlist={()=>
handleOpenWishlist()
}
/>
}
/>

<Route
path="/purchase-history"
element={
<PurchaseHistoryPage
onOpenWishlist={()=>
handleOpenWishlist()
}
/>
}
/>

<Route
path="/category/:categoryName"
element={
<CategoryPage
wishlist={wishlist}
onToggleWishlist={handleToggleWishlist}
onAddToCart={(p)=>
handleAddToCart(p)
}
onOpenWishlist={()=>
handleOpenWishlist()
}
wishlistCount={wishlistCount}
cartCount={cartCount}
/>
}
/>

<Route
path="/sale"
element={
<SalePage
onOpenWishlist={()=>
handleOpenWishlist()
}
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
onOpenWishlist={()=>
handleOpenWishlist()
}
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
onOpenWishlist={()=>
handleOpenWishlist('looks')
}
wishlist={wishlist}
onToggleWishlist={handleToggleWishlist}
wishlistCount={wishlistCount}
cartCount={cartCount}
/>
}
/>

<Route
path="/blog"
element={<Blog />}
/>

<Route
path="/blog/trend-fashion-wanita-2026"
element={<TrendFashionWanita2026 />}
/>

<Route
path="/blog/outfit-casual-wanita"
element={<OutfitCasualWanita />}
/>

<Route
path="/blog/tips-mix-and-match-wanita"
element={<TipsMixAndMatchWanita />}
/>

</Routes>

</main>


{showFooter&&<Footer/>}

{showFaqButton&&<FaqButton/>}


<WishlistModal
isOpen={isWishlistOpen}
onClose={handleCloseWishlist}
wishlist={wishlist}
onToggleWishlist={handleToggleWishlist}
onAddToCart={(p)=>
handleAddToCart(p)
}
/>

<LooksModal
isOpen={isLooksOpen}
onClose={()=>
setIsLooksOpen(false)
}
onOpenWishlist={()=>
handleOpenWishlist('looks')
}
wishlistCount={wishlistCount}
cartCount={cartCount}
/>

<AllProductsModal
isOpen={isAllProductsOpen}
onClose={()=>
setIsAllProductsOpen(false)
}
wishlist={wishlist}
onToggleWishlist={handleToggleWishlist}
onAddToCart={(p)=>
handleAddToCart(p)
}
onOpenWishlist={()=>
handleOpenWishlist()
}
wishlistCount={wishlistCount}
cartCount={cartCount}
/>

</div>

)

}

export function App(){

return(

<LanguageProvider>

<CustomToastProvider>

<AppContent/>

</CustomToastProvider>

</LanguageProvider>

)

}

export default App