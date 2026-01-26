import { Sparkles } from 'lucide-react';

const WhyStudyFashion = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B1538' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 bg-[#8B1538]/10 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-[#8B1538]" />
            <span className="text-[#8B1538] font-semibold">Tu futuro en la moda</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            ¿Por qué estudiar Moda{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#B8174C]">
              en ANSIMAR?
            </span>
          </h2>
        </div>

        {/* Editorial section with large images */}
        <div className="space-y-20">
          {/* First block - Image left */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/20 to-[#D4AF37]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/assets/ansimar/DSC09767.webp"
                  alt="Fashion runway"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
                <p className="text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed">
                  Forma parte de la{' '}
                  <span className="font-bold text-[#8B1538]">industria de la moda</span>{' '}
                  con una formación práctica y especializada que integra{' '}
                  <span className="font-semibold text-gray-900">creatividad, dominio técnico y enfoque productivo</span>,
                  preparada para el trabajo real y el emprendimiento.
                </p>
              </div>
            </div>
          </div>

          {/* Image grid - Multiple moments */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/assets/ansimar/DSC09818.webp"
                alt="Fashion show"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B1538]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-xl">Desfiles de Moda</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/assets/ansimar/DSC02747.webp"
                alt="Runway fashion"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B1538]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-xl">Alta Costura</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/assets/ansimar/DSC04932.webp"
                alt="Runway moments"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B1538]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-xl">Pasarela Internacional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudyFashion;
