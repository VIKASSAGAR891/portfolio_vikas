'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase = `👋 Hey! I'm Vikas — an AI & Machine Learning engineer currently pursuing a Bachelor of Engineering in Artificial Intelligence & Machine Learning at Chandigarh University (CU '27).

I build data-driven, scalable and ethical AI systems that solve real-world problems. With a strong foundation in Python, C++, and modern data science libraries, I enjoy turning complex ideas into intelligent, practical solutions.

Alongside AI, I work as a full stack developer — building complete digital products from backend logic to intuitive user interfaces.

I thrive on experimentation, rapid learning, and collaborative environments where innovation meets impact.`;

export function Description() {
  return (
    <article className='container relative py-20'>
      <Wrapper>
        {/* Main Description */}
        <div className='basis-full lg:basis-9/12'>
          <Title>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        {/* Side Supporting Text */}
        <div className='basis-7/12 lg:basis-3/12'>
          <ParallaxFade>
            <Balancer
              as='p'
              className='mt-4 text-base text-muted-foreground lg:text-lg'
            >
              Combining intelligent systems, scalable software engineering, and
              thoughtful user experiences allows me to build complete AI-driven
              digital solutions.
            </Balancer>
          </ParallaxFade>
        </div>

        {/* About Button */}
        <motion.div
          whileInView={{ y: '-15%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className='absolute right-0 top-3/4 lg:top-full lg:me-10'>
            <Link href='/about'>
              <MagneticButton variant='ghost' size='xl'>
                About Me
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </Wrapper>
    </article>
  );
}
