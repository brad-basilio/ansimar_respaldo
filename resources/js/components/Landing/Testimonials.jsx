import { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'María García',
    role: 'Diseñadora de Modas',
    company: 'Saga Falabella',
    image: 'https://images.pexels.com/photos/3756168/pexels-photo-3756168.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'ANSIMAR me dio las herramientas y la confianza para emprender en la industria de la moda. Hoy tengo mi propia marca y trabajo con las mejores tiendas del país.',
    rating: 5,
    year: '2022',
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    role: 'Fashion Stylist',
    company: 'Revista Cosas',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'La formación práctica que recibí en ANSIMAR fue fundamental para mi carrera. Los docentes son profesionales activos en la industria y eso marca la diferencia.',
    rating: 5,
    year: '2021',
  },
  {
    id: '3',
    name: 'Ana Rodríguez',
    role: 'Visual Merchandiser',
    company: 'Ripley',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Gracias a las prácticas profesionales que ofrece el instituto, conseguí trabajo antes de graduarme. ANSIMAR abre puertas reales en el mercado.',
    rating: 5,
    year: '2023',
  },
  {
    id: '4',
    name: 'Roberto Silva',
    role: 'Director de Arte',
    company: 'Estudio Propio',
    image: 'https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'La visión internacional que te da ANSIMAR es invaluable. El convenio con la Universidad Gran Rosario me permitió expandir mis horizontes profesionales.',
    rating: 5,
    year: '2020',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-[#8B1538]/80 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
            <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-white font-semibold">Testimonios</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Lo que dicen nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">
              egresados
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Historias reales de profesionales que iniciaron su camino en ANSIMAR
          </p>
        </div>

        {/* Testimonial slider */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 lg:p-16 shadow-2xl">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Portrait */}
              <div className="lg:col-span-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 to-[#8B1538]/30 rounded-3xl blur-2xl"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>

                  {/* Info overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-xl">{currentTestimonial.name}</p>
                    <p className="text-[#D4AF37]">{currentTestimonial.role}</p>
                    <p className="text-gray-300 text-sm">{currentTestimonial.company}</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="lg:col-span-3 space-y-6">
                <Quote className="w-12 h-12 text-[#D4AF37]" />

                <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed italic">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" />
                  ))}
                  <span className="text-gray-400 ml-2">Egresado {currentTestimonial.year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#D4AF37] w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
        
          <div className="text-center">
            <p className="text-4xl lg:text-7xl font-bold text-white">95%</p>
            <p className="text-gray-400 mt-2">Satisfacción</p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-7xl font-bold text-[#D4AF37]">4.9</p>
            <p className="text-gray-400 mt-2">Calificación promedio</p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-7xl font-bold text-white">100%</p>
            <p className="text-gray-400 mt-2">Recomendación</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
