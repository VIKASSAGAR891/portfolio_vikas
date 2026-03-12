'use client';

import { cn } from '@/utils';

import { NavbarBrand } from './brand';
import { NavbarList } from './list';
import { MobileNav } from './mobile-nav';

/**
 * Global Navbar Component
 * @param {Object} props
 * @param {'absolute' | 'fixed' | 'relative' | 'sticky'} props.variant - Position variant
 * @param {'light' | 'dark' | 'auto'} props.theme - Color theme
 * @param {'normal' | 'compact'} props.size - Size variant
 * @param {string} props.className - Additional classes
 * @param {boolean} props.mobileIsOpen - Controlled open state for mobile nav
 * @param {Function} props.onMobileToggle - Callback for mobile nav toggle
 * @param {boolean} props.hideDefaultHamburger - Hide default hamburger button
 */
export function Navbar({ 
  variant = 'absolute', 
  theme = 'light',
  size = 'normal',
  className,
  mobileIsOpen,
  onMobileToggle,
  hideDefaultHamburger = false
}) {
  const positionClasses = {
    absolute: 'absolute inset-x-0 top-0',
    fixed: 'fixed inset-x-0 top-0 bg-background/80 backdrop-blur-sm border-b border-border/40',
    relative: 'relative',
    sticky: 'sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border/40',
  };

  const themeClasses = {
    light: 'text-background',
    dark: 'text-foreground',
    auto: '',
  };

  const sizeClasses = {
    normal: 'px-8 py-4',
    compact: 'px-4 py-2',
  };

  return (
    <nav 
      className={cn(
        positionClasses[variant],
        themeClasses[theme],
        sizeClasses[size],
        'z-50 transition-all duration-300',
        className
      )}
    >
      <div className='flex items-center justify-between'>
        <NavbarBrand theme={theme} size={size} />
        <NavbarList theme={theme} size={size} />
        <MobileNav 
          theme={theme} 
          isOpen={mobileIsOpen}
          onToggle={onMobileToggle}
          hideDefaultHamburger={hideDefaultHamburger}
        />
      </div>
    </nav>
  );
}
