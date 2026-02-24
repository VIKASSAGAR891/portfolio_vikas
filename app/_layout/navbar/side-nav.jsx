'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import { MagneticButton } from '@/components';
import { navItems } from '@/data';
import { randomId, cn } from '@/utils';

/**
 * Side Navigation Component - displays nav items as bubbles on the right side
 * @param {Object} props
 * @param {boolean} props.visible - Whether to show the side nav
 */
export function SideNav({ visible = true }) {
  const pathname = usePathname();
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show side nav only after scrolling past header (roughly screen height)
      setShowSideNav(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = navItems.map(({ href, title }) => {
    const id = randomId();
    const isActive = pathname === href;

    return (
      <motion.li
        key={id}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link href={href} passHref>
          <MagneticButton
            className={cn(
              'px-4 py-2 text-xs md:text-sm rounded-full',
              isActive
                ? 'bg-foreground text-background'
                : 'bg-muted text-foreground hover:bg-foreground hover:text-background'
            )}
          >
            <span className='capitalize font-medium'>{title}</span>
          </MagneticButton>
        </Link>
      </motion.li>
    );
  });

  if (!visible || !showSideNav) return null;

  return (
    <motion.div
      className='fixed right-6 md:right-10 top-1/2 transform -translate-y-1/2 z-40'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <ul className='flex flex-col gap-4 items-center'>{items}</ul>
    </motion.div>
  );
}
