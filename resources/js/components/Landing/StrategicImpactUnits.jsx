import { Globe, Heart, Sparkles } from 'lucide-react';

const impactAreas = [
  {
    image: '/assets/ansimar/DSC09681.webp',
    title: 'Inspiración Cultural',
    description: 'Conectamos la moda con nuestras raíces y tradiciones',
  },
  {
    image: '/assets/ansimar/DSC02747.webp',
    title: 'Referencias Globales',
    description: 'Estudiamos las principales pasarelas y tendencias mundiales',
  },
  {
    image: '/assets/ansimar/DSC07677.webp',
    title: 'Diseño Sostenible',
    description: 'Formamos profesionales conscientes del impacto ambiental',
  },
];

const StrategicImpactUnits = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B1538]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 bg-[#8B1538]/10 px-6 py-3 rounded-full mb-6">
            <Globe className="w-5 h-5 text-[#8B1538]" />
            <span className="text-[#8B1538] font-semibold">Impacto Estratégico</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Creemos en la moda que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#B8174C]">
              conecta con el mundo
            </span>
          </h2>
        </div>

        {/* Visual storytelling sections */}
        <div className="space-y-16">
          {impactAreas.map((area, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/20 to-[#D4AF37]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8B1538] to-[#B8174C] rounded-xl flex items-center justify-center shadow-lg">
                      {index === 0 && <Heart className="w-6 h-6 text-white" />}
                      {index === 1 && <Globe className="w-6 h-6 text-white" />}
                      {index === 2 && <Sparkles className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicImpactUnits;
