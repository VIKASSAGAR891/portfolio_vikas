'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { navItems } from '@/data';
import { randomId, cn } from '@/utils';

/**
 * Mobile Navigation Component - Hamburger menu with sidebar
 * @param {Object} props
 * @param {'light' | 'dark' | 'auto'} props.theme - Color theme
 * @param {boolean} props.isOpen - Controlled open state (optional, uses internal state if not provided)
 * @param {Function} props.onToggle - Callback when menu is toggled (optional)
 * @param {boolean} props.hideDefaultHamburger - Hide the hamburger button (useful when using fixed hamburger)
 */
export function MobileNav({ theme = 'light', isOpen: controlledIsOpen, onToggle: externalOnToggle, hideDefaultHamburger = false }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef(null);

  // Use controlled state if provided, otherwise use internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = controlledIsOpen !== undefined ? externalOnToggle : setInternalIsOpen;

  // Close sidebar when route changes (only for internal state)
  useEffect(() => {
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(false);
    }
  }, [pathname]);

  // Handle clicking outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Don't close if clicking the hamburger button itself
        if (event.target.closest('button[aria-label="Toggle navigation"]')) {
          return;
        }
        // For controlled state, only toggle if menu is open
        if (controlledIsOpen !== undefined) {
          if (controlledIsOpen && externalOnToggle) {
            externalOnToggle();
          }
        } else {
          // For internal state, just close it
          setInternalIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, controlledIsOpen, externalOnToggle]);

  const themeClasses = {
    light: 'text-background',
    dark: 'text-foreground',
    auto: 'text-foreground',
  };

  const items = navItems.map(({ href, title }) => {
    const id = randomId();
    const isActive = pathname === href;

    return (
      <motion.div
        key={id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link href={href} passHref>
          <div
            className={cn(
              'px-6 py-3 capitalize text-lg font-medium transition-colors cursor-pointer',
              isActive
                ? 'text-foreground bg-muted rounded-lg'
                : 'text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-lg'
            )}
          >
            {title}
          </div>
        </Link>
      </motion.div>
    );
  });

  return (
    <>
      {/* Hamburger Button - Only visible on mobile (unless hidden) */}
      {!hideDefaultHamburger && (
        <motion.button
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'md:hidden p-2 transition-colors',
            themeClasses[theme]
          )}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      )}

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={sidebarRef}
            key="sidebar"
            className="fixed left-0 top-0 h-screen w-64 bg-background border-r border-border/40 z-50"
            initial={{ x: -'100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -'100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 50 }}
          >
            {/* Close button inside sidebar */}
            <div className="flex items-center justify-between p-4 border-b border-border/40">
              <h2 className="text-lg font-semibold text-foreground">Menu</h2>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 transition-colors hover:bg-muted rounded-lg"
                whileTap={{ scale: 0.95 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 p-4">
              {items}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
