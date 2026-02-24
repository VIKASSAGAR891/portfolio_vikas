'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20'>
        {/* Left Side */}
        <div className='flex flex-col gap-8 flex-1'>
          <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
            <ImageWrapper>
              <Image
                src='/profile.jpg' // 👈 your image
                alt='Vikas Sagar Profile Picture'
                fill
                className='rounded-full object-cover'
              />
            </ImageWrapper>
            <div className='text-center md:text-left flex flex-col gap-1'>
              <MainTitle>Let’s work</MainTitle>
              <MainTitle>together</MainTitle>
            </div>
          </div>

          <div className='flex flex-col gap-3 w-full max-w-md'>
            <a href='mailto:vikassagar891@gmail.com'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground hover:bg-background hover:text-foreground transition-colors'
              >
                vikassagar891@gmail.com
              </MagneticButton>
            </a>
            <a href='tel:+91 7382149073'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground hover:bg-background hover:text-foreground transition-colors'
              >
                +91 7382149073
              </MagneticButton>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className='flex items-center justify-center flex-1'>
          <motion.div style={{ x: transformX }}>
            <Link href='/contact'>
              <MagneticButton variant='primary' size='lg'>
                Get in touch
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
