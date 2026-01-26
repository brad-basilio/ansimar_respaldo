import { useState, useEffect } from 'react';

const slides = [
  {
    url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    alt: 'Fashion runway with models'
  },
  {
    url: 'https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    alt: 'Fashion designer working in atelier'
  },
  {
    url: 'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    alt: 'High fashion model on runway'
  },
  {
    url: 'https://images.pexels.com/photos/7148455/pexels-photo-7148455.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    alt: 'Designer creating fashion pieces'
  },
  {
    url: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    alt: 'Fashion atelier workspace'
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsTransitioning(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`w-full h-full bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
              index === currentIndex && !isTransitioning ? 'scale-110' : 'scale-100'
            }`}
            style={{
              backgroundImage: `url(${slide.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
