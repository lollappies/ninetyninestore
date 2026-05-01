import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Jangan scroll ke top kalau ada state (berarti navigasi purposeful)
    if (!state) {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
}