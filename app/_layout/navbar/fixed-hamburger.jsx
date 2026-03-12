'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/**
 * Fixed Hamburger Component - appears after scrolling past hero section
 * @param {Object} props
 * @param {boolean} props.isVisible - Whether the hamburger should be visible
 * @param {boolean} props.isOpen - Whether the menu is open
 * @param {Function} props.onToggle - Callback to toggle menu
 */
export function FixedHamburger({ isVisible = false, isOpen = false, onToggle = () => {} }) {
  if (!isVisible) return null;

  return (
    <motion.button
      aria-label="Toggle navigation menu"
      onClick={onToggle}
      className="fixed top-4 right-4 z-40 p-3 md:p-4 rounded-lg bg-background border border-border/40 hover:bg-muted transition-colors"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
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
            <X size={24} className="md:w-8 md:h-8 text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Menu size={24} className="md:w-8 md:h-8 text-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
