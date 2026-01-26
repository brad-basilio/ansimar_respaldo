import { Globe, Award, TrendingUp, CheckCircle } from 'lucide-react';

const benefits = [
  'Convalidación de estudios',
  'Licenciatura internacional',
  'Proyección global',
  'Intercambio académico',
];

const InternationalConventions = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gray-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B1538]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 bg-[#8B1538]/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-[#8B1538]/30">
            <Globe className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-white font-semibold">Proyección Internacional</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tu talento,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#D4AF37]">
              sin fronteras
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual content */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/30 to-[#D4AF37]/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="International fashion"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>

                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#8B1538] rounded-xl flex items-center justify-center shadow-xl">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-xl">Universidad Gran Rosario</p>
                      <p className="text-gray-300">Argentina</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Convenio con la Universidad Gran Rosario
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Ampliamos tus horizontes con convenios internacionales que te permiten proyectar tu carrera más allá de las fronteras nacionales.
              </p>

              {/* Benefits list */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white font-semibold">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#8B1538] to-[#6B0F28] rounded-2xl p-6 text-center shadow-xl">
                <Globe className="w-8 h-8 text-white mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">1</p>
                <p className="text-sm text-gray-300">Convenio internacional</p>
              </div>

              <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-2xl p-6 text-center shadow-xl">
                <TrendingUp className="w-8 h-8 text-white mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">100%</p>
                <p className="text-sm text-gray-900">Proyección global</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#8B1538] via-[#B8174C] to-[#D4AF37] rounded-3xl p-8 shadow-2xl">
            <p className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Convierte tu formación en una licenciatura internacional
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Conoce más sobre el convenio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalConventions;
