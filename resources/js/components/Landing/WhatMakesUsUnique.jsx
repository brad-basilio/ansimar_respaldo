import { Award, Users, Briefcase, TrendingUp, Globe, Lightbulb } from 'lucide-react';

const uniqueFeatures = [
  {
    icon: Award,
    title: 'Prestigio y Trayectoria',
    description: 'Más de 15 años formando profesionales en moda con un modelo educativo práctico y especializado.',
    image: 'https://images.pexels.com/photos/7624226/pexels-photo-7624226.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Lightbulb,
    title: 'Formación Vanguardista',
    description: 'Aprendizaje práctico y vivencial que combina creatividad, técnica y comprensión del entorno laboral.',
    image: 'https://images.pexels.com/photos/7362987/pexels-photo-7362987.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Users,
    title: 'Docentes Líderes',
    description: 'Profesionales activos en la industria que llevan el mundo real al aula.',
    image: 'https://images.pexels.com/photos/6765363/pexels-photo-6765363.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Briefcase,
    title: 'Conexión con la Industria',
    description: 'Empleabilidad, emprendimiento y proyectos reales con el sector productivo.',
    image: 'https://images.pexels.com/photos/8112179/pexels-photo-8112179.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: TrendingUp,
    title: 'Infraestructura Moderna',
    description: 'Talleres acondicionados diseñados para facilitar el aprendizaje práctico aplicado.',
    image: 'https://images.pexels.com/photos/7624209/pexels-photo-7624209.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Globe,
    title: 'Proyección Internacional',
    description: 'Convenios internacionales para convalidación y licenciatura con Universidad Gran Rosario.',
    image: 'https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const WhatMakesUsUnique = () => {
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
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-6 w-max">
              {uniqueFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative w-[380px] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
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

          {/* Scroll hint */}
          <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Desliza para ver más
          </p>
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
