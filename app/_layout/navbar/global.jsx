'use client';

import { usePathname } from 'next/navigation';

import { Navbar } from './index';
import { SideNav } from './side-nav';

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

  return (
    <>
      <Navbar variant={config.variant} theme={config.theme} size={size} />
      <SideNav visible={pathname === '/'} />
    </>
  );
}
