'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;

  @media (min-width: 640px) {
    width: 6rem;
    height: 6rem;
  }

  @media (min-width: 1024px) {
    width: 8rem;
    height: 8rem;
  }
`;

export const MainTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 600;
  margin: 0;
`;
