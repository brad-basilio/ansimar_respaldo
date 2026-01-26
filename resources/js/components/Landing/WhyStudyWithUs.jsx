import { Star, Users, Award, Lightbulb, Globe, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Excelencia Académica',
    description: 'Programas con estándares internacionales y docentes de élite',
    color: 'from-[#8B1538] to-[#B8174C]',
  },
  {
    icon: Users,
    title: 'Comunidad Global',
    description: 'Red de egresados en las principales marcas del mundo',
    color: 'from-[#D4AF37] to-[#B8860B]',
  },
  {
    icon: Lightbulb,
    title: 'Innovación Constante',
    description: 'Currículum actualizado con las últimas tendencias',
    color: 'from-[#8B1538] to-[#6B0F28]',
  },
  {
    icon: Globe,
    title: 'Visión Internacional',
    description: 'Convenios con universidades de Argentina y Europa',
    color: 'from-[#B8174C] to-[#D4AF37]',
  },
  {
    icon: TrendingUp,
    title: 'Alta Empleabilidad',
    description: '95% de nuestros egresados trabajan en el sector',
    color: 'from-[#D4AF37] to-[#8B1538]',
  },
  {
    icon: Star,
    title: 'Infraestructura de Punta',
    description: 'Talleres equipados con tecnología de vanguardia',
    color: 'from-[#8B1538] to-[#B8174C]',
  },
];

const WhyStudyWithUs = () => {
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
            <Star className="w-5 h-5 text-[#8B1538]" />
            <span className="text-[#8B1538] font-semibold">¿Por Qué Elegirnos?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Lo que nos hace{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#B8174C]">
              diferentes
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las razones por las que ANSIMAR es la mejor opción para tu carrera en moda
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#8B1538]/30"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#8B1538] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#8B1538] to-[#B8174C] text-white rounded-full font-bold text-lg hover:from-[#6B0F28] hover:to-[#8B1538] transition-all duration-300 shadow-2xl hover:shadow-[#8B1538]/30 transform hover:scale-105">
            <Star className="w-6 h-6" />
            Únete a nuestra comunidad
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyStudyWithUs;
