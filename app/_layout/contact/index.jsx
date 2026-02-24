'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useContactSlider } from '@/hooks';

import { SocialInfo, UserDetails } from './components';

export function Contact() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX, transformY } = useContactSlider(containerRef);

  return (
    <motion.footer
      ref={containerRef}
      className='relative min-h-screen bg-foreground text-background flex items-center justify-center'
      style={{ y: transformY }}
    >
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-center space-y-16'>
          <UserDetails transformX={transformX} />
          <SocialInfo />
        </div>
      </div>
    </motion.footer>
  );
}
