'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useMagnetic } from '@/hooks';
import { cn } from '@/utils';

import { MagneticItem } from './index.styled';
import { magneticVariance } from './index.variance';

/** @param {import('react').ButtonHTMLAttributes<HTMLButtonElement> & { variant: 'default' | 'primary' | 'destructive' | 'secondary' | 'ghost' | 'outline'; size: 'default' | 'md' | 'lg' | 'xl'; href?: string; target?: string; rel?: string;}} */
export function MagneticButton({
  children,
  className,
  variant,
  size,
  href,
  target,
  rel,
  ...props
}) {
  /** @type {import('react').MutableRefObject<HTMLButtonElement | HTMLAnchorElement>} */
  const elementRef = useRef(null);
  const {
    position: { x, y },
    handleMagneticMove,
    handleMagneticOut,
  } = useMagnetic(elementRef);

  const commonProps = {
    ref: elementRef,
    className: cn(magneticVariance({ variant, size, className })),
    animate: { x, y },
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 150,
      mass: 0.1,
    },
    onPointerMove: handleMagneticMove,
    onPointerOut: handleMagneticOut,
    whileHover: { scale: 1.1 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        {...commonProps}
        {...props}
      >
        <MagneticItem>{children}</MagneticItem>
      </motion.a>
    );
  }

  return (
    <motion.button
      {...commonProps}
      {...props}
    >
      <MagneticItem>{children}</MagneticItem>
    </motion.button>
  );
}
