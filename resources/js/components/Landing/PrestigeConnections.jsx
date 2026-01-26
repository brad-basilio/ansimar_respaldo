import { Award, Briefcase, TrendingUp, Users } from 'lucide-react';

const highlights = [
  { icon: Briefcase, text: 'Alta empleabilidad' },
  { icon: TrendingUp, text: 'Apoyo al emprendimiento' },
  { icon: Users, text: 'Proyectos reales' },
  { icon: Award, text: 'Conexión con el sector productivo' },
];

const PrestigeConnections = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/30 to-[#D4AF37]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Prestige and trajectory"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center justify-center gap-2 bg-[#8B1538]/10 px-6 py-3 rounded-full mb-6">
                <Award className="w-5 h-5 text-[#8B1538]" />
                <span className="text-[#8B1538] font-semibold">Prestigio y Trayectoria</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Más de 15 años formando{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#B8174C]">
                  profesionales en moda
                </span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <p className="text-xl text-gray-700 leading-relaxed">
                ANSIMAR ha consolidado un{' '}
                <span className="font-semibold text-[#8B1538]">modelo educativo práctico y especializado</span>{' '}
                alineado a las necesidades reales de la industria. Nuestra experiencia nos permite ofrecer una formación que trasciende el aula.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#8B1538]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8B1538] to-[#B8174C] rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-900 font-semibold">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-gray-900 to-[#8B1538] rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold text-[#D4AF37] mb-2">15+</p>
                  <p className="text-white text-sm">Años de experiencia</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#D4AF37] mb-2">100%</p>
                  <p className="text-white text-sm">Conexión industria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrestigeConnections;
