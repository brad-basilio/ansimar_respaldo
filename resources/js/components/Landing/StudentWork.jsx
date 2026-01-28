import { Sparkles } from 'lucide-react';
import { handleSmoothScroll } from '../../Utils/smoothScroll';

const studentWorks = [
  {
    image: '/assets/ansimar/DSC07852.webp',
    title: 'Colección Urbana',
    student: 'María García',
  },
  {
    image: '/assets/ansimar/DSC07703.webp',
    title: 'Alta Costura',
    student: 'Ana Rodríguez',
  },
  {
    image: '/assets/ansimar/DSC04932.webp',
    title: 'Moda Sostenible',
    student: 'Carlos López',
  },
  {
    image: '/assets/ansimar/DSC07769.webp',
    title: 'Avant Garde',
    student: 'Laura Méndez',
  },
  {
    image: '/assets/ansimar/DSC07677.webp',
    title: 'Street Style',
    student: 'Diego Torres',
  },
  {
    image: '/assets/ansimar/DSC04905.webp',
    title: 'Minimalismo',
    student: 'Sofía Herrera',
  },
];

const StudentWork = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B1538]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 bg-[#8B1538]/10 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-[#8B1538]" />
            <span className="text-[#8B1538] font-semibold">Portafolio Estudiantil</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Creaciones de Nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#B8174C]">
              Estudiantes
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre el talento que florece en nuestras aulas a través de estos proyectos creativos
          </p>
        </div>

        {/* Masonry gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {studentWorks.map((work, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ marginBottom: '24px' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  style={{ height: index % 3 === 0 ? '450px' : index % 3 === 1 ? '350px' : '400px' }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      {work.title}
                    </h3>
                    <p className="text-gray-300 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      por {work.student}
                    </p>
                  </div>
                </div>
              </div>

              {/* Guinda accent */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#8B1538] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-[#8B1538]/50"></div>
            </div>
          ))}
        </div>

        {/* See more button */}
        <div className="text-center mt-12">
          <a
            href="#postular" 
            onClick={handleSmoothScroll}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#8B1538] to-[#B8174C] text-white rounded-full font-bold text-lg hover:from-[#6B0F28] hover:to-[#8B1538] transition-all duration-300 shadow-2xl hover:shadow-[#8B1538]/30 transform hover:scale-105">
            <Sparkles className="w-6 h-6" />
          Postular ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentWork;
