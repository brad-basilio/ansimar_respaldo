import { useState, useRef } from 'react';
import { Phone, Download, CheckCircle2, ChevronDown, Monitor, Users, Check } from 'lucide-react';
import MessagesRest from '../../actions/MessagesRest';
import Swal from 'sweetalert2';

const modalities = [
  {
    value: 'Virtual',
    label: 'Virtual',
    icon: Monitor,
    description: 'Estudia desde cualquier lugar'
  },
  {
    value: 'Presencial',
    label: 'Presencial',
    icon: Users,
    description: 'Campus en Lima Norte'
  }
];

const CustomDropdown = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(opt => opt.value === value);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 border rounded-xl text-left transition-all duration-300 outline-none flex items-center justify-between ${
          isOpen
            ? 'border-[#8B1538] ring-2 ring-[#8B1538]/20 bg-white'
            : 'border-gray-300 bg-white hover:border-[#8B1538]/50'
        }`}
      >
        <div className="flex items-center gap-3">
          {selectedOption ? (
            <>
              <selectedOption.icon className="w-5 h-5 text-[#8B1538]" />
              <div>
                <div className="font-medium text-gray-900">{selectedOption.label}</div>
                <div className="text-xs text-gray-500">{selectedOption.description}</div>
              </div>
            </>
          ) : (
            <span className="text-gray-400">Selecciona una modalidad</span>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {options.map((option) => {
              const Icon = option.icon;
              const isSelected = value === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full px-4 py-3 flex items-center gap-3 transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#8B1538]/10 to-[#D4AF37]/10 border-l-4 border-[#8B1538]'
                      : 'hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#8B1538] to-[#D4AF37] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className={`font-semibold ${isSelected ? 'text-[#8B1538]' : 'text-gray-900'}`}>
                      {option.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {option.description}
                    </div>
                  </div>
                  {isSelected && (
                    <Check className="w-5 h-5 text-[#8B1538]" />
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

const LeadForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    modalidad: '',
    telefono: '',
    email: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const messagesRest = new MessagesRest();

  useState(() => {
    setTimeout(() => setIsVisible(true), 300);
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleModalityChange = (value) => {
    setFormData({
      ...formData,
      modalidad: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.modalidad) {
      Swal.fire({
        icon: 'warning',
        title: 'Modalidad requerida',
        text: 'Por favor selecciona una modalidad de estudio.',
      });
      return;
    }
    
    setSending(true);
    
    const request = {
      name: formData.nombre + " " + formData.apellido,
      email: formData.email,
      subject: `Postulación - ${formData.modalidad} - Edad: ${formData.edad}`,
      description: `Teléfono: ${formData.telefono}\nModalidad: ${formData.modalidad}\nEdad: ${formData.edad}`,
    };

    try {
      const result = await messagesRest.save(request);
      setSending(false);

      if (result) {
        setIsSubmitted(true);
      }
    } catch (error) {
      setSending(false);
      console.error("Error enviando mensaje:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar tu postulación. Por favor, inténtalo de nuevo.",
      });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola, soy ${formData.nombre} ${formData.apellido} y me interesa estudiar en modalidad ${formData.modalidad}`);
    window.open(`https://wa.me/51999999999?text=${message}`, '_blank');
  };

  const handleDownload = () => {
    // Trigger brochure download
    window.open('/assets/brochure-ansimar.pdf', '_blank');
  };

  if (isSubmitted) {
    return (
      <div
        className={`w-full lg:w-[420px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform transition-all duration-700 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
        }`}
      >
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-900">
              ¡Gracias, {formData.nombre}!
            </h3>
            <p className="text-gray-600">
              Hemos recibido tu postulación. Nos pondremos en contacto contigo pronto.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <button
              onClick={handleWhatsApp}
              className="w-full px-6 py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#20BA5A] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Hablar por WhatsApp
            </button>

            <button
              onClick={handleDownload}
              className="w-full px-6 py-4 bg-[#8B1538] text-white rounded-xl font-semibold hover:bg-[#6B0F28] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Descargar brochure
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full lg:w-[420px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform transition-all duration-700 delay-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
      }`}
    >
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-bold text-[#8B1538]">
            Postula hoy
          </h3>
          <p className="text-gray-600 text-sm">
            Comienza tu carrera en la industria de la moda
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8B1538] focus:border-transparent outline-none transition-all"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                Apellido
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8B1538] focus:border-transparent outline-none transition-all"
                placeholder="Tu apellido"
              />
            </div>
          </div>

          <div>
            <label htmlFor="edad" className="block text-sm font-medium text-gray-700 mb-1">
              Edad
            </label>
            <input
              type="number"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              required
              min="15"
              max="100"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8B1538] focus:border-transparent outline-none transition-all"
              placeholder="Tu edad"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Modalidad
            </label>
            <CustomDropdown
              value={formData.modalidad}
              onChange={handleModalityChange}
              options={modalities}
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8B1538] focus:border-transparent outline-none transition-all"
              placeholder="+51 999 999 999"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8B1538] focus:border-transparent outline-none transition-all"
              placeholder="tu@email.com"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full px-6 py-4 bg-[#8B1538] text-white rounded-xl font-bold text-lg hover:bg-[#6B0F28] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? 'ENVIANDO...' : 'QUIERO ESTUDIAR MODA'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
