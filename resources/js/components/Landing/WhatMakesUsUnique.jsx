import { useState, useRef } from 'react';
import { Award, Users, Briefcase, TrendingUp, Globe, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';

const uniqueFeatures = [
  {
    icon: Award,
    title: 'Prestigio y Trayectoria',
    description: 'Más de 15 años formando profesionales en moda con un modelo educativo práctico y especializado.',
    image: '/assets/ansimar/DSC09767.webp',
  },
  {
    icon: Lightbulb,
    title: 'Formación Vanguardista',
    description: 'Aprendizaje práctico y vivencial que combina creatividad, técnica y comprensión del entorno laboral.',
    image: '/assets/ansimar/DSC02539.webp',
  },
  {
    icon: Users,
    title: 'Docentes Líderes',
    description: 'Profesionales activos en la industria que llevan el mundo real al aula.',
    image: '/assets/ansimar/DSC09681.webp',
  },
  {
    icon: Briefcase,
    title: 'Conexión con la Industria',
    description: 'Empleabilidad, emprendimiento y proyectos reales con el sector productivo.',
    image: '/assets/ansimar/DSC02539.webp',
  },
  {
    icon: TrendingUp,
    title: 'Infraestructura Moderna',
    description: 'Talleres acondicionados diseñados para facilitar el aprendizaje práctico aplicado.',
    image: '/assets/ansimar/DSC09735.webp',
  },
  {
    icon: Globe,
    title: 'Proyección Internacional',
    description: 'Convenios internacionales para convalidación y licenciatura con Universidad Gran Rosario.',
    image: '/assets/ansimar/DSC09767.webp',
  },
];

const WhatMakesUsUnique = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = 380 + 24; // card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B1538]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Lo que hace única a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#B8174C]">
              ANSIMAR
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            Impulsamos tu talento con formación práctica, creatividad y experiencia técnica, para que construyas una carrera sólida en solo 2 años.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8B1538] to-[#B8174C] mx-auto rounded-full mt-6" />
        </div>

        {/* Horizontal scrolling cards container */}
        <div className="relative">
          {/* Navigation buttons - outside the scroll area */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute -left-6 lg:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200 ${
              canScrollLeft 
                ? 'opacity-100 hover:bg-gray-50 cursor-pointer' 
                : 'opacity-40 cursor-default'
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute -right-6 lg:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200 ${
              canScrollRight 
                ? 'opacity-100 hover:bg-gray-50 cursor-pointer' 
                : 'opacity-40 cursor-default'
            }`}
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          <div 
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="overflow-x-auto pb-8 scrollbar-hide"
          >
            <div className="flex gap-6 w-max">
              {uniqueFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative w-[340px] sm:w-[385px] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex-shrink-0"
                  >
                    {/* Image with overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                      {/* Icon */}
                      <div className="absolute top-6 right-6 w-14 h-14 bg-[#8B1538] rounded-xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Title on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white">
                          {feature.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover accent bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1538] to-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {uniqueFeatures.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const cardWidth = 380 + 24;
                  scrollContainerRef.current.scrollTo({
                    left: cardWidth * index,
                    behavior: 'smooth'
                  });
                  setTimeout(checkScrollButtons, 300);
                }
              }}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#8B1538] transition-colors duration-300"
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default WhatMakesUsUnique;
