'use client';

import { Dot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Center, MagneticButton } from '@/components';
import { navItems } from '@/data';
import { randomId, cn } from '@/utils';

/**
 * Navbar List Component
 * @param {Object} props
 * @param {'light' | 'dark' | 'auto'} props.theme - Color theme
 * @param {'normal' | 'compact'} props.size - Size variant
 */
export function NavbarList({ theme = 'light', size = 'normal' }) {
  const pathname = usePathname();
  
  const items = navItems.map(({ href, title }) => {
    const id = randomId();
    const isActive = pathname === href;
    
    return (
      <li key={id} className={cn('group', size === 'normal' ? 'p-4' : 'p-2')}>
        <Link href={href} passHref>
          <MagneticButton>
            <span className={cn(
              'capitalize transition-colors text-black',
              size === 'normal' ? 'text-base' : 'text-sm',
              isActive && 'font-semibold'
            )}>
              {title}
            </span>
            <Center>
              <Dot className={cn(
                'transition-transform duration-200 ease-in-expo text-black',
                isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'
              )} />
            </Center>
          </MagneticButton>
        </Link>
      </li>
    );
  });

  return <ul className='flex items-center max-lg:hidden'>{items}</ul>;
}
