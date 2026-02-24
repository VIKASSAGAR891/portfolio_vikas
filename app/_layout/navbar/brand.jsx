'use client';

import Link from 'next/link';
import { Copyright } from 'lucide-react';
import { cn } from '@/utils';

/**
 * Navbar Brand Component
 * @param {Object} props
 * @param {'light' | 'dark' | 'auto'} props.theme - Color theme
 * @param {'normal' | 'compact'} props.size - Size variant
 */
export function NavbarBrand({ theme = 'light', size = 'normal' }) {
  return (
    <Link href='/'>
      <div className={cn('group flex cursor-pointer', size === 'normal' ? 'pb-5' : 'pb-2')}>
        <div className={cn('transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]', size === 'compact' && 'scale-75')}>
          <Copyright />
        </div>

        <div className='relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8'>
          <h5 className={cn('transition-transform duration-500 ease-in-expo group-hover:-translate-x-full', size === 'compact' && 'text-sm')}>
            Vikas
          </h5>
          <h5 className={cn('ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14', size === 'compact' && 'text-sm')}>
            Narlakanti
          </h5>
          <h5 className={cn('absolute left-20 ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14', size === 'compact' && 'text-sm')}>
            
          </h5>
        </div>
      </div>
    </Link>
  );
}
