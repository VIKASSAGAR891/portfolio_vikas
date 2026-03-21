'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase = `I enjoy building intelligent systems that solve real-world problems.

Experimenting with data, learning rapidly, and turning complex ideas into scalable digital solutions.`;

export function Description() {
  const [scrollY, setScrollY] = useState(0);
  const [sectionBounds, setSectionBounds] = useState({ top: 0, bottom: 0 });
  const articleRef = useRef(null);

  useEffect(() => {
    const updateSectionBounds = () => {
      if (articleRef.current) {
        const rect = articleRef.current.getBoundingClientRect();
        setSectionBounds({
          top: window.scrollY + rect.top,
          bottom: window.scrollY + rect.bottom,
        });
      }
    };

    updateSectionBounds();
    window.addEventListener('resize', updateSectionBounds);
    return () => window.removeEventListener('resize', updateSectionBounds);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if mobile or desktop
      const isMobile = window.innerWidth < 768; // md breakpoint
      const multiplier = isMobile ? 0.02 : 0.15; // Increased to 0.08 for mobile to make upward movement visible
      const movement = window.scrollY * multiplier;
      setScrollY(movement);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article 
      ref={articleRef}
      className='container relative py-10'
    >
      <div>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6'>
          {/* Main Description */}
          <div className='lg:col-span-9'>
            <Title>
              <ParallaxReveal paragraph={phrase} />
            </Title>
          </div>

          {/* Side Supporting Text */}
          <div className='lg:col-span-3 flex flex-col gap-16'>
            <ParallaxFade delay={0.2}>
              <div className='mt-4 text-sm text-muted-foreground lg:text-base'>
                Combining intelligent systems, scalable software engineering, and
                thoughtful user experiences allows me to build complete AI-driven
                digital solutions.
              </div>
            </ParallaxFade>
            <motion.div
              animate={{ y: scrollY }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <Link href='/about'>
                <MagneticButton variant='ghost' size='xl'>
                  About Me
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </article>
  );
}
