import { ArrowRight, Sparkles } from 'lucide-react';

const FromClassToRunway = () => {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Fashion runway"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/40"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B1538]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-white font-semibold">Tu Momento Es Ahora</span>
          </div>

          {/* Main headline */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Del aula a la{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">
              pasarela
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
            En ANSIMAR no solo estudias moda, la vives. Cada proyecto, cada desfile, cada creación te acerca a tu sueño de brillar en la industria.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-xl">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-2">95%</div>
              <p className="text-gray-400 text-sm">Empleabilidad</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">2</div>
              <p className="text-gray-400 text-sm">Desfiles anuales</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-2">+50</div>
              <p className="text-gray-400 text-sm">Empresas aliadas</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-gray-900 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-[#D4AF37]/30 transform hover:scale-105">
              Comenzar mi camino
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30">
              Conocer más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromClassToRunway;
