import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCustomToast } from './CustomToast';
import { Product } from '../utils/data';
interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  hideWishlistToast?: boolean;
}
export function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  hideWishlistToast = false
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') navigate(-1);
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);
  const { showToast } = useCustomToast();
  return (
    <div
      className="group flex flex-col gap-3 cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}>
      
      <div
        className="relative aspect-[3/4] overflow-hidden bg-brand-neutral1 rounded-2xl cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        
        <img
          src={product.imageMain}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
        
        <img
          src={product.imageHover}
          alt={`${product.name} hover`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        

        {product.isSoldOut &&
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-medium">
            Sold Out
          </div>
        }

        <div
          className={`absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-t from-black/40 to-transparent transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
              if (!hideWishlistToast) {
                if (isWishlisted) {
                  showToast('Dihapus dari Wishlist');
                } else {
                  showToast('Ditambahkan ke Wishlist');
                }
              }
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${isWishlisted ? 'bg-brand-accent/10 text-brand-accent' : 'bg-white text-brand-dark hover:bg-brand-dark hover:text-white'}`}
            aria-label="Toggle wishlist">
            
            <Heart
              size={18}
              className={
              isWishlisted ? 'fill-brand-accent stroke-brand-accent' : ''
              } />
            
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
              showToast('Ditambahkan ke Keranjang');
            }}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-colors shadow-sm"
            aria-label="Add to cart">
            
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">
          {product.series}
        </span>
        <h3 className="text-sm font-medium text-brand-dark">{product.name}</h3>
        {product.price &&
        <span className="text-xs text-brand-dark mt-1">{product.price}</span>
        }
      </div>
    </div>);

}