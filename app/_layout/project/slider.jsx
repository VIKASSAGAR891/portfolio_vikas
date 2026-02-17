'use client';

import Image from 'next/image';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  return (
    <Center
      className='relative w-1/4 overflow-hidden rounded'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      <Image
        src={`/${source}`} // 👈 IMPORTANT
        alt='project item'
        fill
        className='object-cover'
      />
    </Center>
  );
}
