import { Lightbulb, Palette, Scissors, Users } from 'lucide-react';

const trainingAspects = [
  {
    image: '/assets/ansimar/DSC02539.webp',
    caption: 'Workshops creativos',
  },
  {
    image: '/assets/ansimar/DSC09706.webp',
    caption: 'Desarrollo de patrones',
  },
  {
    image: '/assets/ansimar/DSC09777.webp',
    caption: 'Boards de diseño',
  },
  {
    image: '/assets/ansimar/DSC09818.webp',
    caption: 'Proyectos reales',
  },
];

const VanguardTraining = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B1538]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 bg-[#8B1538]/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-[#8B1538]/30">
            <Lightbulb className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-white font-semibold">Vanguardia Educativa</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Formación{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#D4AF37]">
              Vanguardista y Vivencial
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Formación basada en el{' '}
            <span className="font-semibold text-white">aprendizaje práctico</span>{' '}
            y el{' '}
            <span className="font-semibold text-white">desarrollo integral del estudiante</span>,
            combinando creatividad, dominio técnico y comprensión del entorno laboral.
          </p>
        </div>

        {/* Key pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#8B1538]/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-[#8B1538] to-[#B8174C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Palette className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Creatividad</h3>
            <p className="text-gray-400 leading-relaxed">
              Desarrolla tu visión única y aprende a expresar tus ideas a través del diseño.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#8B1538]/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-[#8B1538] to-[#B8174C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Scissors className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dominio Técnico</h3>
            <p className="text-gray-400 leading-relaxed">
              Maestría en patronaje, confección y procesos de producción industrial.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#8B1538]/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-[#8B1538] to-[#B8174C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Entorno Laboral</h3>
            <p className="text-gray-400 leading-relaxed">
              Comprende las dinámicas de la industria y prepárate para el mercado real.
            </p>
          </div>
        </div>

        {/* Image grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingAspects.map((aspect, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[#8B1538]/30 transition-all duration-500"
            >
              <div className="relative h-80">
                <img
                  src={aspect.image}
                  alt={aspect.caption}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                <div className="absolute inset-0 bg-[#8B1538]/0 group-hover:bg-[#8B1538]/20 transition-all duration-500"></div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-lg">{aspect.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VanguardTraining;
