import { useEffect } from 'react';
import Base from './Components/Tailwind/Base';
import { FileText } from 'lucide-react';
import CreateReactScript from './Utils/CreateReactScript';
import { createRoot } from 'react-dom/client';
import { CarritoProvider } from './context/CarritoContext';
import Footer from './Components/Landing/Footer';


const TermsConditions = ({ content, title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#D4AF37] rounded-full mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
           
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {content ? (
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-[#8B1538] 
                  prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-8
                  prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-6
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                  prose-strong:text-[#8B1538]
                  prose-ul:my-6
                  prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  El contenido de términos y condiciones no está disponible en este momento.
                </p>
                <p className="text-gray-400 mt-2">
                  Por favor, contacta con nosotros para más información.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
            <Footer/>
    </>
 
  );
};

CreateReactScript((el, properties) => {
  createRoot(el).render(
    <CarritoProvider>
      <Base {...properties}>
        <TermsConditions {...properties} />
      </Base>
    </CarritoProvider>
  );
});



