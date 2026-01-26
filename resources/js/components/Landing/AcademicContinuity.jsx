import { GraduationCap, Award, Globe } from 'lucide-react';

const AcademicContinuity = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gray-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#8B1538]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 to-[#8B1538]/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Academic continuity"
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>

              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-xl flex items-center justify-center shadow-xl">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Licenciatura Internacional</p>
                    <p className="text-gray-300 text-sm">Universidad Gran Rosario</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center justify-center gap-2 bg-[#8B1538]/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-[#8B1538]/30">
                <Award className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white font-semibold">Continuidad Académica</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Tu formación en moda puede convertirse en una{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">
                  licenciatura internacional
                </span>
              </h2>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Complementa tu formación técnica con una licenciatura que te abrirá puertas en el mercado internacional.
              </p>

              {/* Key points */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4">
                  <div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">1 año adicional</p>
                    <p className="text-gray-400 text-sm">Continúa tu formación con un año más</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4">
                  <div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Licenciatura en Diseño e Innovación de Moda</p>
                    <p className="text-gray-400 text-sm">Universidad Gran Rosario, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#8B1538] to-[#D4AF37] rounded-2xl p-8 shadow-2xl">
              <p className="text-white text-lg mb-4">
                Potencia tu carrera con una titulación reconocida internacionalmente
              </p>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Conoce más sobre la licenciatura
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicContinuity;
