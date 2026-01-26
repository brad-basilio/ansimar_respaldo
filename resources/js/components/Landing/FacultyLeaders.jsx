import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { useState } from 'react';

const faculty = [
  {
    name: 'Patricia Morales',
    role: 'Directora de Diseño',
    image: 'https://images.pexels.com/photos/3756168/pexels-photo-3756168.jpeg?auto=compress&cs=tinysrgb&w=600',
    experience: '20 años en la industria',
  },
  {
    name: 'Carlos Mendoza',
    role: 'Experto en Patronaje',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600',
    experience: '15 años en confección',
  },
  {
    name: 'Ana Gutiérrez',
    role: 'Especialista en Textiles',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600',
    experience: '18 años investigando',
  },
  {
    name: 'Roberto Silva',
    role: 'Director de Producción',
    image: 'https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=600',
    experience: '25 años en la industria',
  },
];

const FacultyLeaders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % faculty.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + faculty.length) % faculty.length);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B1538' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 bg-[#8B1538]/10 px-6 py-3 rounded-full mb-6">
            <Award className="w-5 h-5 text-[#8B1538]" />
            <span className="text-[#8B1538] font-semibold">Nuestro Equipo</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Docentes Líderes de la{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#B8174C]">
              Moda
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionales activos en la industria que llevan el mundo real al aula
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {faculty.map((member, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Portrait */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/20 to-[#D4AF37]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Guinda overlay on hover */}
                        <div className="absolute inset-0 bg-[#8B1538]/0 group-hover:bg-[#8B1538]/20 transition-all duration-500"></div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                          {member.name}
                        </h3>
                        <p className="text-2xl text-[#8B1538] font-semibold mb-3">
                          {member.role}
                        </p>
                        <p className="text-lg text-gray-600">
                          {member.experience}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <p className="text-gray-700 text-lg leading-relaxed italic">
                          "Nuestra misión es formar profesionales que no solo dominen las técnicas, sino que también comprendan la industria y estén listos para crear impacto."
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <div className="bg-[#8B1538] text-white px-6 py-3 rounded-full font-semibold">
                          Activo en la industria
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {faculty.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#8B1538] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyLeaders;
