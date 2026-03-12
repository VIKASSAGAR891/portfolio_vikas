import { useState, useEffect } from 'react';

/**
 * Hook to detect if user has scrolled past the hero section
 * @returns {Object} { isPastHero: boolean }
 */
export function useHeroScroll() {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section is approximately one viewport height tall
      // Set threshold at 80% of viewport height for better UX
      const heroBoundary = window.innerHeight * 0.8;
      setIsPastHero(window.scrollY > heroBoundary);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isPastHero };
}
