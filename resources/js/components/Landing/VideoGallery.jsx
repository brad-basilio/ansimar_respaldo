import { useState, useEffect } from 'react';
import { Play, X, Film, ChevronLeft, ChevronRight } from 'lucide-react';
import { handleSmoothScroll } from '../../Utils/smoothScroll';

const videos = [
  {
    id: '1',
    title: 'Domina el diseño, la confección y el patronaje real 👙🧥',
    youtubeId: '0cKbHbfOp_U',
    thumbnail: 'https://i.ytimg.com/vi/0cKbHbfOp_U/hq720.jpg',
    category: 'Diseño',
    type: 'short',
  },
  {
    id: '2',
    title: '¿Por qué ANSIMAR es tu futuro en la moda? ¡Descúbrelo aquí! 🚀',
    youtubeId: 'T1ZOr_NbMsg',
    thumbnail: 'https://i.ytimg.com/vi/T1ZOr_NbMsg/hq720.jpg',
    category: 'Masterclass',
    type: 'short',
  },
  {
    id: '3',
    title: 'Un día en el instituto de modas: ¡Acompáñanos a ANSIMAR! ✨✂️',
    youtubeId: 'q1ReW6Kv6ek',
    thumbnail: 'https://i.ytimg.com/vi/q1ReW6Kv6ek/hq720.jpg',
    category: 'Campus',
    type: 'short',
  },
  {
    id: '4',
    title: '✨ ¡Vive la moda sin límites en Ansimar!',
    youtubeId: 'EhkP9ljReCE',
    thumbnail: 'https://i.ytimg.com/vi/EhkP9ljReCE/hq720.jpg',
    category: 'Masterclass',
    type: 'short',
  },
  {
    id: '5',
    title: '👗 El secreto de una prenda perfecta: Domina el Patronaje Industrial en Ansimar',
    youtubeId: 'gzJwghd1Mic',
    thumbnail: 'https://i.ytimg.com/vi/gzJwghd1Mic/hq720.jpg',
    category: 'Masterclass',
    type: 'short',
  },
  {
    id: '6',
    title: '¿Qué hace diferente estudiar en Ansimar? 👗✨',
    youtubeId: 'Km90t5fKXkE',
    thumbnail: 'https://i.ytimg.com/vi/Km90t5fKXkE/hq720.jpg',
    category: 'Testimonios',
    type: 'short',
  },
];

const categories = ['Todos', 'Masterclass', 'Campus', 'Testimonios'];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredVideos = activeCategory === 'Todos'
    ? videos
    : videos.filter(v => v.category === activeCategory);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id='experiencias' className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B1538]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 bg-[#8B1538]/10 px-6 py-3 rounded-full mb-6">
            <Film className="w-5 h-5 text-[#8B1538]" />
            <span className="text-[#8B1538] font-semibold">Galería de Videos</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Conoce nuestra{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-[#B8174C]">
              experiencia
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestros videos y descubre todo lo que ANSIMAR tiene para ofrecerte
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#8B1538] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => openModal(video)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Thumbnail */}
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full aspect-[9/16] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 text-[#8B1538] ml-1" fill="currentColor" />
                    </div>
                  </div>



                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-[#8B1538] px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{video.category}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See more button */}
        <div className="text-center mt-12">
          <a href="#postular" onClick={handleSmoothScroll}  className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#8B1538] to-[#B8174C] text-white rounded-full font-bold text-lg hover:from-[#6B0F28] hover:to-[#8B1538] transition-all duration-300 shadow-2xl hover:shadow-[#8B1538]/30 transform hover:scale-105">
            <Film className="w-6 h-6" />
Postula Ahora          </a>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className={`relative w-full ${selectedVideo.type === 'short' ? 'max-w-sm' : 'max-w-5xl'}`}>
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[#D4AF37] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video container */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className={selectedVideo.type === 'short' ? 'aspect-[9/16]' : 'aspect-video'}>
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Video title */}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white">{selectedVideo.title}</h3>
              <p className="text-gray-400 mt-2">{selectedVideo.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
