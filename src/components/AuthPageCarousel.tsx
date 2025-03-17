import { useState, useEffect } from 'react';

import flight from '../assets/flight.jpg';
import hotel from '../assets/hotel.jpg';

const AuthPageCarousel = () => {
  const images: string[] = [flight, hotel];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSwitch = (index: number) => setCurrentIndex(index);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
      4000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full hidden md:w-[466px] h-full md:block overflow-hidden">
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 rounded-2xl ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center gap-x-1 absolute w-full bottom-3">
        {images.map((_, index) => {
          return (
            <button
              key={index}
              className={`h-2 rounded-full cursor-pointer ${
                currentIndex === index
                  ? 'bg-secondary-bg w-5'
                  : 'bg-primary-bg w-2'
              }`}
              onClick={() => handleSwitch(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default AuthPageCarousel;
