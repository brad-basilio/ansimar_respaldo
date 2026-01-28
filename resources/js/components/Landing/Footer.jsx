import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, Send, ChevronRight } from 'lucide-react';
import Swal from 'sweetalert2';
import SubscriptionsRest from '../../actions/SubscriptionsRest';

const quickLinks = [
  { name: 'Inicio', href: '#' },
  { name: 'Programas', href: '#' },
  { name: 'Nosotros', href: '#' },
  { name: 'Galería', href: '#' },
  { name: 'Testimonios', href: '#' },
  { name: 'Contacto', href: '#' },
];

const programs = [
  { name: 'Carrera Técnica', href: '#' },
  { name: 'Alta Costura', href: '#' },
  { name: 'Licenciatura', href: '#' },
  { name: 'Cursos Cortos', href: '#' },
  { name: 'Talleres', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const subscriptionsRest = new SubscriptionsRest();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const result = await subscriptionsRest.save({ email });

      if (result) {
        Swal.fire({
          icon: 'success',
          title: '¡Suscrito!',
          text: 'Te has suscrito exitosamente a nuestro newsletter.',
          confirmButtonColor: '#8B1538',
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Error al suscribirse:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al procesar tu suscripción. Por favor, inténtalo de nuevo.',
        confirmButtonColor: '#8B1538',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1538] via-[#D4AF37] to-[#8B1538]"></div>

      {/* Newsletter section */}
      <div className="relative border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Mantente al día con las{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">
                  tendencias
                </span>
              </h3>
              <p className="text-gray-400 text-lg">
                Suscríbete a nuestro newsletter y recibe novedades sobre moda, eventos y oportunidades exclusivas.
              </p>
            </div>
            <div>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-[#8B1538] to-[#B8174C] text-white rounded-full font-bold hover:from-[#6B0F28] hover:to-[#8B1538] transition-all duration-300 shadow-lg hover:shadow-[#8B1538]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Suscribirse
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-white">ANSIMAR</h4>
              <p className="text-[#D4AF37] text-sm font-semibold">Instituto de Moda</p>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Más de 15 años formando a los mejores profesionales de la moda en el Perú. Tu sueño, nuestra pasión.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#8B1538] hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h5>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Programs */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6">Programas</h5>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6">Contacto</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <span className="text-gray-400">Av. La Marina 1234, San Miguel, Lima - Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+5112345678" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  (01) 234-5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:info@ansimar.edu.pe" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  info@ansimar.edu.pe
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Lun - Vie: 8:00 AM - 9:00 PM<br />
                  Sáb: 9:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ANSIMAR Instituto de Moda. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-gray-500 hover:text-[#D4AF37] transition-colors">
                Política de Privacidad
              </a>
              <a href="/terms-conditions" className="text-gray-500 hover:text-[#D4AF37] transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
