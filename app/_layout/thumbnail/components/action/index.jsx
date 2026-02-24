import Link from 'next/link';

import { Center, MagneticButton } from '@/components';

/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailAction({ children }) {
  return (
    <Center>
      <MagneticButton
        variant='outline'
        className='px-10 py-8 text-base before:-top-1/2 hover:text-background'
        href='/work'
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </MagneticButton>
    </Center>
  );
}
