'use client';

import { useEffect, useRef, useState } from 'react';

const images = [
    '/image/banner1.png',
    '/image/banner1.png',
    '/image/banner1.png',
    '/image/banner1.png',
    '/image/banner1.png'
]
  

export default function ImageSlider() {
  const [index, setIndex] = useState(1); // Start at 1 due to clone at the beginning
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

  const extendedImages = [
    images[images.length - 1], // clone last image at beginning
    ...images,
    images[0], // clone first image at end
  ];

  const goToSlide = (i) => {
    setIndex(i);
    setTransition(true);
  };

  const nextSlide = () => goToSlide(index + 1);
  const prevSlide = () => goToSlide(index - 1);

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });

  // Handle seamless looping on transition end
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (index === 0) {
        setTransition(false);
        setIndex(images.length);
      }
      if (index === images.length + 1) {
        setTransition(false);
        setIndex(1);
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener('transitionend', handleTransitionEnd);

    return () => slider.removeEventListener('transitionend', handleTransitionEnd);
  }, [index]);

  return (
    <div className="relative w-full h-[100%] max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div
        ref={sliderRef}
        className="flex"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? 'transform 0.6s ease' : 'none',
          width: `${extendedImages.length * 100}%`,
        }}
      >
        {extendedImages.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-auto object-cover flex-shrink-0"
            alt={`Slide ${i}`}
          />
        ))} 
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow z-10"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black  p-2 rounded-full shadow z-10"
      >
        ▶
      </button>
    </div>
  );
}
