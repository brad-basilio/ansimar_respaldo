import { useState, useEffect } from 'react';
import { ChevronRight, Download } from 'lucide-react';
import LeadForm from './LeadForm';
import ImageSlider from './ImageSlider';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full-screen slider background */}
      <ImageSlider />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#8B1538]/40 z-10" />

      {/* Content container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col lg:flex-row items-center justify-between gap-8 py-12 lg:py-20">

          {/* Left side - Hero text with parallax */}
          <div
            className="flex-1 text-white space-y-6 lg:space-y-8 text-center lg:text-left"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Donde nace la nueva{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#D4AF37]">
                élite de la moda
              </span>
            </h1>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide">
                Instituto Superior de Moda ANSIMAR
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-light italic">
                Formación real para diseñadores reales
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="group px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Ver carreras
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl">
                <Download className="w-5 h-5" />
                Descargar brochure
              </button>
            </div>
          </div>

          {/* Right side - Floating form (desktop) / Below text (mobile) */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <LeadForm />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
