'use client';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

export function OffcanvasFooter() {
  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li key={id}>
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <ul className='flex w-full flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12'>
      {medias}
    </ul>
  );
}
