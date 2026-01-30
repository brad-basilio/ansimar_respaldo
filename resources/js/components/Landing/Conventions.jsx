import React from 'react';

const partners = [
    { name: 'Baldecash', logo: '/assets/ansimar/baldecash.png' },
    { name: 'Audaces', logo: '/assets/ansimar/audaces.png' },
    { name: 'Vicunha', logo: '/assets/ansimar/vicunha.png' },
    { name: 'UGR', logo: '/assets/ansimar/ugr.png' },

];

const Conventions = () => {
    // Duplicate partners for seamless loop
    const allPartners = [...partners, ...partners, ...partners, ...partners];

    return (
        <section id="convenios" className="py-20 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Nuestros{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#B8174C]">
                        Convenios
                    </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#8B1538] to-[#B8174C] mx-auto rounded-full mt-6" />
            </div>

            <div className="slider-container relative w-full overflow-hidden mb-12">
                <div className="slider-track flex gap-8 whitespace-nowrap">
                    {allPartners.map((partner, index) => (
                        <div key={index} className="cursor-pointer flex-shrink-0 w-64 h-32 bg-white  flex items-center justify-center p-6  shadow-sm hover:shadow-md transition-shadow duration-300">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-w-full max-h-full  transition-opacity duration-300 filter "
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-xl text-gray-600 font-light">
                    Y distintas empresas del sector de la moda y textil
                </p>
            </div>

            <style>{`
                .slider-container {
                     mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                     -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
                .slider-track {
                    animation: scroll 40s linear infinite;
                    width: max-content;
                }
                .slider-track:hover {
                    animation-play-state: paused;
                }
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default Conventions;
