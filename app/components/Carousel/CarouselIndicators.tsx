import React from 'react';

interface CarouselIndicatorsProps {
  count: number;
  currentIndex: number;
  onClick: (index: number) => void;
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ count, currentIndex, onClick }) => {
  return (
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white/50' : 'bg-white/30'} hover:bg-white/50 dark:${index === currentIndex ? 'bg-gray-800/50' : 'bg-gray-800/30'}`}
          aria-current={index === currentIndex ? 'true' : 'false'}
          aria-label={`Slide ${index + 1}`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
