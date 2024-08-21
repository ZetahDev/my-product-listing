import React from 'react';
import Image from 'next/image';

interface CarouselSlideProps {
  src: string;
  alt: string;
  isActive: boolean;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ src, alt, isActive }) => {
  return (
    <div
      className={`absolute inset-0 transition-transform duration-700 ease-in-out ${isActive ? 'block' : 'hidden'}`}
      data-carousel-item
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
    </div>
  );
};

export default CarouselSlide;
