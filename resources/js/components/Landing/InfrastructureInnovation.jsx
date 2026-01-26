import { Building2, Scissors, MapPin } from 'lucide-react';

const facilities = [
  {
    image: '/assets/ansimar/DSC02539.webp',
    title: 'Talleres de Confección',
  },
  {
    image: '/assets/ansimar/DSC09706.webp',
    title: 'Aulas de Diseño',
  },
  {
    image: '/assets/ansimar/DSC09735.webp',
    title: 'Espacios Creativos',
  },
  {
    image: '/assets/ansimar/DSC09777.webp',
    title: 'Laboratorios Textiles',
  },
  {
    image: '/assets/ansimar/DSC02747.webp',
    title: 'Áreas de Producción',
  },
  {
    image: '/assets/ansimar/DSC04905.webp',
    title: 'Showrooms',
  },
];

const InfrastructureInnovation = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B1538]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 bg-[#8B1538]/10 px-6 py-3 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-[#8B1538]" />
            <span className="text-[#8B1538] font-semibold">Infraestructura</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Infraestructura e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#B8174C]">
              Innovación
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Talleres y aulas acondicionadas en Lima Norte, diseñadas para facilitar el aprendizaje práctico y el trabajo aplicado en cada curso.
          </p>
        </div>

        {/* Location badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <MapPin className="w-5 h-5 text-[#8B1538]" />
            <span className="text-gray-900 font-semibold">Lima Norte</span>
          </div>
        </div>

        {/* Gallery grid with hover zoom */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Icon overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#8B1538]/90 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                  <Scissors className="w-6 h-6 text-white" />
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {facility.title}
                  </h3>
                </div>
              </div>

              {/* Accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#8B1538] to-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-[#8B1538] rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Espacios diseñados para crear
              </h3>
              <p className="text-gray-300 text-lg">
                Cada ambiente ha sido pensado para potenciar tu aprendizaje y creatividad
              </p>
            </div>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Conoce nuestras instalaciones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureInnovation;
