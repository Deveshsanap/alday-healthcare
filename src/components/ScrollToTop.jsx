import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly snaps the view to the top whenever the URL changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}