'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import { useHeroScroll } from '@/hooks';

import { Navbar } from './index';
import { MobileNav } from './mobile-nav';
import { FixedHamburger } from './fixed-hamburger';

/**
 * Global Navbar Component
 * 
 * Automatically adapts navbar style based on current route.
 * This component is included in the root layout and appears on all pages.
 * 
 * Configuration:
 * - variant: Controls positioning (absolute, fixed, relative, sticky)
 * - theme: Controls color scheme (light, dark, auto)
 * 
 * Special behavior on Home page (/):
 * - When scrolled past hero section on desktop, the top navbar hides
 * - A fixed hamburger menu appears at top-right
 * - The hamburger opens the mobile navigation sidebar
 * 
 * Usage:
 * This component is already included in the root layout. No need to add manually to pages.
 * 
 * To customize for specific routes, edit the navbarConfig object below.
 * 
 * To use Navbar manually on a specific page (overriding global):
 * import { Navbar } from '@/layout';
 * <Navbar variant="fixed" theme="dark" />
 */
export function GlobalNavbar() {
  const pathname = usePathname();
  const { isPastHero } = useHeroScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  // Define page-specific navbar configurations
  const navbarConfig = {
    '/': {
      variant: 'absolute',
      theme: 'light',
    },
    '/about': {
      variant: 'fixed',
      theme: 'dark',
    },
    '/work': {
      variant: 'fixed',
      theme: 'dark',
    },
    '/contact': {
      variant: 'fixed',
      theme: 'dark',
    },
  };

  // Get config for current page, or use default
  const config = navbarConfig[pathname] || {
    variant: 'fixed',
    theme: 'dark',
  };

  // Use normal size for home page, compact for others
  const size = pathname === '/' ? 'normal' : 'compact';

  // On home page, hide navbar when scrolled past hero (desktop only)
  const isHomePageAndScrolled = pathname === '/' && isPastHero;
  const shouldShowNavbar = !isHomePageAndScrolled;

  return (
    <>
      {/* Top Navbar - Hidden when scrolled past hero on home page */}
      <AnimatePresence>
        {shouldShowNavbar && (
          <Navbar 
            variant={config.variant} 
            theme={config.theme} 
            size={size}
            mobileIsOpen={menuOpen}
            onMobileToggle={() => setMenuOpen(!menuOpen)}
            hideDefaultHamburger={false}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Sidebar - Rendered separately to persist when navbar is hidden */}
      {isHomePageAndScrolled ? (
        <MobileNav 
          theme={config.theme}
          isOpen={menuOpen}
          onToggle={() => setMenuOpen(!menuOpen)}
          hideDefaultHamburger={true}
        />
      ) : (
        <></>
      )}

      {/* Fixed Hamburger - Only visible after scrolling past hero on home page */}
      <AnimatePresence>
        {isHomePageAndScrolled && (
          <FixedHamburger 
            isVisible={isHomePageAndScrolled}
            isOpen={menuOpen}
            onToggle={() => setMenuOpen(!menuOpen)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
