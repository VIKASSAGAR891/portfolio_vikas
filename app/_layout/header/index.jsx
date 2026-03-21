'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {/* 🔥 Profile Image */}
      <Image
        src='/profile.jpg'
        alt='Vikas Narlakanti'
        fill
        priority
        className='scale-110 object-cover object-[50%_center]'
      />

      <div className='absolute inset-0 bg-black/10' />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-start max-md:justify-end'>
        <div className='select-none max-md:order-3 max-md:absolute max-md:left-4 max-md:bottom-12'>
          <h1 className='text-[max(5em,15vw)] md:text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Vikas Narlakanti
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='max-md:absolute max-md:right-0 max-md:top-0 max-md:pt-20 max-md:px-4 md:ml-auto'>
          <div className='mx-10 max-md:mx-0 md:mx-36'>
            <div className='mb-4 md:mb-20 max-md:hidden'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)] max-md:text-sm max-md:text-right'>
              <span className='block'>AI & ML Engineer</span>
              <span className='block'>Full Stack Developer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
