import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useEscapeBack(customHandler?: () => void) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (customHandler) {
          customHandler();
        } else if (location.state?.fromModal === 'looks') {
          navigate('/', { state: { openLooks: true } });
        } else if (location.state?.fromModal === 'allProducts') {
          navigate('/', { state: { openAllProducts: true } });
        } else {
          navigate(-1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, location.state, customHandler]);
}