import { Award, Users, Calendar, Building2 } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '15+', label: 'Años de experiencia', color: 'from-[#8B1538] to-[#B8174C]' },
  { icon: Users, value: '2,500+', label: 'Egresados', color: 'from-[#D4AF37] to-[#B8860B]' },
  { icon: Award, value: '100%', label: 'Prácticas profesionales', color: 'from-[#8B1538] to-[#6B0F28]' },
  { icon: Building2, value: '50+', label: 'Empresas aliadas', color: 'from-[#B8174C] to-[#D4AF37]' },
];

const AboutUs = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B1538]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#8B1538]/10 px-6 py-3 rounded-full">
                <Building2 className="w-5 h-5 text-[#8B1538]" />
                <span className="text-[#8B1538] font-semibold">Sobre Nosotros</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                ANSIMAR: Formando los{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#B8174C]">
                  diseñadores del mañana
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Somos el instituto de moda más prestigioso del Perú, con más de 15 años formando profesionales que destacan en la industria nacional e internacional.
              </p>
            </div>

            {/* Key points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B1538] to-[#B8174C] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Excelencia Académica</h3>
                  <p className="text-gray-600">Programas diseñados con estándares internacionales y actualizados constantemente.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Comunidad Global</h3>
                  <p className="text-gray-600">Una red de egresados que trabajan en las principales marcas del mundo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/20 to-[#D4AF37]/20 rounded-3xl blur-2xl"></div>

            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6765367/pexels-photo-6765367.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="ANSIMAR campus"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#B8174C] rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">15+</p>
                    <p className="text-gray-600 text-sm">Años de excelencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
