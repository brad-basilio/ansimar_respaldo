import { Palette, Scissors, Briefcase, ShoppingBag, Eye, Sparkles, TrendingUp, Camera } from 'lucide-react';
import { handleSmoothScroll } from '../../Utils/smoothScroll';

const careers = [
  { icon: Palette, title: 'Diseñador de Modas', gradient: 'from-[#8B1538] to-[#B8174C]' },
  { icon: Scissors, title: 'Fashion Stylist', gradient: 'from-[#B8174C] to-[#D4AF37]' },
  { icon: Briefcase, title: 'Brand Manager', gradient: 'from-[#8B1538] to-[#6B0F28]' },
  { icon: ShoppingBag, title: 'Personal Shopper', gradient: 'from-[#D4AF37] to-[#B8860B]' },
  { icon: Eye, title: 'Visual Merchandiser', gradient: 'from-[#8B1538] to-[#B8174C]' },
  { icon: Camera, title: 'Director de Arte', gradient: 'from-[#B8174C] to-[#8B1538]' },
  { icon: Sparkles, title: 'Coolhunter', gradient: 'from-[#D4AF37] to-[#8B1538]' },
  { icon: TrendingUp, title: 'Y mucho más', gradient: 'from-[#6B0F28] to-[#D4AF37]' },
];

const CareerField = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B1538' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 bg-[#8B1538]/10 px-6 py-3 rounded-full mb-6">
            <Briefcase className="w-5 h-5 text-[#8B1538]" />
            <span className="text-[#8B1538] font-semibold">Campo Laboral</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            La moda es{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#B8174C]">
              más que diseño
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Descubre las múltiples oportunidades profesionales que se abren ante ti
          </p>
        </div>

        {/* Careers grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {careers.map((career, index) => {
            const Icon = career.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#8B1538]/30 transform hover:scale-105"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${career.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${career.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#8B1538] transition-colors duration-300">
                    {career.title}
                  </h3>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${career.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/5 to-[#D4AF37]/5 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#8B1538] rounded-3xl p-12 lg:p-16 shadow-2xl">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                Tu carrera, tus posibilidades
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                En ANSIMAR te preparamos para trabajar en todas las áreas de la industria de la moda, desde el diseño hasta la gestión empresarial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <a
                  href="#planDeEstudio" 
                              onClick={handleSmoothScroll}
                
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Ver plan de estudios
                </a>
                <a
                 href="#postular" 
                              onClick={handleSmoothScroll}
                className="px-8 py-4 bg-[#D4AF37] text-gray-900 rounded-full font-bold hover:bg-[#B8860B] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Postular ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerField;
