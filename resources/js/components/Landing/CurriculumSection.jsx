import { Download, BookOpen } from 'lucide-react';

const CurriculumSection = () => {
  return (
    <section id='planDeEstudio' className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-[#8B1538] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 lg:p-16 border border-white/10 shadow-2xl">
          <div className="text-center space-y-8">
            {/* Icon */}
            <div className="inline-flex w-20 h-20 bg-gradient-to-br from-[#8B1538] to-[#D4AF37] rounded-2xl items-center justify-center shadow-xl">
              <BookOpen className="w-10 h-10 text-white" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Malla Curricular
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Descubre el plan de estudios completo diseñado para convertirte en un profesional integral de la moda en solo 2 años.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              {/* /assets/ansimar/brochure.pdf */}
              <button
                onClick={() => window.open('/assets/ansimar/brochure.pdf', '_blank')}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-[#D4AF37]/30 transform hover:scale-105">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                Descargar Brochure Académico
              </button>
            </div>

            {/* Additional info */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Incluye: Plan de estudios completo, perfiles de egreso, y campo laboral
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
