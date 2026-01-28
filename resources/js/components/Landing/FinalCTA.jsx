import { ArrowRight, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { handleSmoothScroll } from '../../Utils/smoothScroll';

const FinalCTA = () => {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Full-screen background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Fashion design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538] via-[#8B1538]/90 to-[#8B1538]/70"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
          <Sparkles className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-white font-semibold">Inscripciones Abiertas 2025</span>
        </div>

        {/* Main headline */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Tu futuro en la moda{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">
            comienza aquí
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          No esperes más para dar el primer paso hacia tu sueño. Únete a la comunidad ANSIMAR y transforma tu pasión en profesión.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#postular" onClick={handleSmoothScroll}  className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#8B1538] rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-white/30 transform hover:scale-105">
            <Sparkles className="w-6 h-6" />
            Inscríbete ahora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-[#25D366]/30 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp
          </a>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#D4AF37]" />
            <span>(01) 234-5678</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
            <span>+51 999 999 999</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
