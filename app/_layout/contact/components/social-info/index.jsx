'use client';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

import { ListTitle } from './index.styled';

export function SocialInfo() {
  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li key={id} className='transition-all duration-300 ease-in-expo'>
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton variant='ghost' size='sm'>
            {title}
          </MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div className='w-full max-w-4xl mx-auto'>
      <div className='flex flex-col items-center justify-center text-center'>
        <div>
          <ListTitle>Socials</ListTitle>
          <ul className='flex flex-wrap justify-center gap-4 mt-4'>
            {medias}
          </ul>
        </div>
      </div>
    </div>
  );
}
