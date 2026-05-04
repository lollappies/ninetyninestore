import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const scrollPositions = useRef<Record<string, number>>({});
  const prevPathname = useRef<string>('');

  useEffect(() => {
    // Simpan posisi scroll halaman sebelumnya
    scrollPositions.current[prevPathname.current] = window.scrollY;

    // Cek apakah halaman baru punya posisi scroll tersimpan (artinya user back)
    const savedPosition = scrollPositions.current[pathname];

    if (savedPosition !== undefined) {
      // Kembalikan ke posisi scroll sebelumnya
      setTimeout(() => {
        window.scrollTo(0, savedPosition);
      }, 50);
    } else {
      // Halaman baru, scroll ke atas
      window.scrollTo(0, 0);
    }

    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}