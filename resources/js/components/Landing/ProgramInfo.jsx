import { Calendar, Clock, Building2, Moon, GraduationCap, TrendingUp } from 'lucide-react';

const programData = [
  {
    icon: Calendar,
    label: 'Inicio',
    value: '30 de marzo',
  },
  {
    icon: Clock,
    label: 'Duración',
    value: '2 años',
  },
  {
    icon: Building2,
    label: 'Modalidad',
    value: 'Presencial y Virtual',
  },
  {
    icon: Moon,
    label: 'Turnos',
    value: 'Mañana y Noche',
  },
];

const ProgramInfo = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gray-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B1538]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-[#8B1538]/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-[#8B1538]/30">
            <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-white font-semibold">Programa Profesional</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Información del{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#D4AF37]">
              Programa
            </span>
          </h2>
        </div>

        {/* Program data grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#8B1538]/20 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B1538] to-[#B8174C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-2 font-semibold">
                  {item.label}
                </p>
                <p className="text-2xl font-bold text-white">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certification section */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8B1538] to-[#6B0F28] rounded-2xl flex items-center justify-center shadow-xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Certificación Oficial
              </h3>
              <div className="space-y-2">
                <p className="text-lg text-gray-300 flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  Bachiller Técnico en Diseño de Modas
                </p>
                <p className="text-lg text-gray-300 flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  Título Profesional Técnico en Diseño de Modas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience highlight */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">
                  +15 años
                </p>
                <p className="text-sm text-gray-400">formando talento en moda</p>
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
            <div className="text-left">
              <p className="text-xl font-bold text-white">Instituto desde 2019</p>
              <p className="text-sm text-gray-400">Licenciamiento MINEDU</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramInfo;
