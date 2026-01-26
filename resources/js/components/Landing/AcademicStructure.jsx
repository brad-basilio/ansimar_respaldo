import { useState } from 'react';
import { GraduationCap, Clock, Calendar, BookOpen, Award, ChevronDown, ChevronUp } from 'lucide-react';

const programs = [
  {
    id: 'carrera-tecnica',
    title: 'Carrera Técnica en Diseño de Modas',
    duration: '2 años',
    modules: '4 módulos',
    certificate: 'Título Técnico',
    description: 'Formación integral en diseño, patronaje, confección y gestión de moda con certificación oficial.',
    features: [
      'Patronaje industrial y artesanal',
      'Diseño asistido por computadora',
      'Confección de alta costura',
      'Gestión de marca y emprendimiento',
      'Prácticas pre-profesionales',
      'Desfile de graduación',
    ],
    color: 'from-[#8B1538] to-[#B8174C]',
  },
  {
    id: 'especializacion',
    title: 'Especialización en Alta Costura',
    duration: '6 meses',
    modules: '2 módulos',
    certificate: 'Certificado de Especialización',
    description: 'Perfecciona tus técnicas de alta costura con los mejores maestros del país.',
    features: [
      'Técnicas avanzadas de confección',
      'Bordado y aplicaciones',
      'Drapeado y manejo de telas',
      'Acabados de lujo',
    ],
    color: 'from-[#D4AF37] to-[#B8860B]',
  },
  {
    id: 'licenciatura',
    title: 'Licenciatura en Diseño e Innovación de Moda',
    duration: '1 año adicional',
    modules: '2 semestres',
    certificate: 'Grado Universitario',
    description: 'Continúa tu formación técnica con una licenciatura internacional de la Universidad Gran Rosario.',
    features: [
      'Investigación en moda',
      'Innovación textil',
      'Gestión empresarial',
      'Proyecto de tesis',
      'Título internacional',
    ],
    color: 'from-[#8B1538] to-[#D4AF37]',
  },
];

const AcademicStructure = () => {
  const [activeProgram, setActiveProgram] = useState('carrera-tecnica');

  const currentProgram = programs.find(p => p.id === activeProgram);

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
            <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-white font-semibold">Estructura Académica</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">
              Programas
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elige el camino que mejor se adapte a tus metas profesionales
          </p>
        </div>

        {/* Program tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program) => (
            <button
              key={program.id}
              onClick={() => setActiveProgram(program.id)}
              className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeProgram === program.id
                  ? 'bg-white text-gray-900 shadow-2xl scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              {program.title.split(' ').slice(0, 3).join(' ')}
            </button>
          ))}
        </div>

        {/* Program content */}
        {currentProgram && (
          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Left - Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {currentProgram.title}
                  </h3>
                  <p className="text-xl text-gray-300">
                    {currentProgram.description}
                  </p>
                </div>

                {/* Quick info */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <Clock className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-white font-bold">{currentProgram.duration}</p>
                    <p className="text-gray-400 text-sm">Duración</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <BookOpen className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-white font-bold">{currentProgram.modules}</p>
                    <p className="text-gray-400 text-sm">Módulos</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <Award className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-white font-bold text-sm">{currentProgram.certificate}</p>
                    <p className="text-gray-400 text-sm">Certificado</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button className={`px-8 py-4 bg-gradient-to-r ${currentProgram.color} text-white rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105`}>
                    Solicitar información
                  </button>
                </div>
              </div>

              {/* Right - Features */}
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${currentProgram.color} rounded-lg flex items-center justify-center`}>
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  ¿Qué aprenderás?
                </h4>
                <ul className="space-y-4">
                  {currentProgram.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-6 h-6 bg-gradient-to-br ${currentProgram.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Mobile accordion for smaller screens - simplified version */}
        <div className="lg:hidden mt-8 space-y-4">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setActiveProgram(activeProgram === program.id ? '' : program.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-white font-semibold">{program.title}</span>
                {activeProgram === program.id ? (
                  <ChevronUp className="w-5 h-5 text-[#D4AF37]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicStructure;
