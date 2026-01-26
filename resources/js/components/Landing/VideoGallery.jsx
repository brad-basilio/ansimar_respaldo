import { useState, useEffect } from 'react';
import { Play, X, Film, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  {
    id: '1',
    title: 'Desfile de Graduación 2024',
    thumbnail: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Desfiles',
    duration: '15:30',
  },
  {
    id: '2',
    title: 'Masterclass: Patronaje Avanzado',
    thumbnail: 'https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Masterclass',
    duration: '45:00',
  },
  {
    id: '3',
    title: 'Vida en el Campus ANSIMAR',
    thumbnail: 'https://images.pexels.com/photos/3756168/pexels-photo-3756168.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Campus',
    duration: '8:45',
  },
  {
    id: '4',
    title: 'Entrevista con Egresada Exitosa',
    thumbnail: 'https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Testimonios',
    duration: '12:20',
  },
  {
    id: '5',
    title: 'Proceso Creativo: De la Idea al Diseño',
    thumbnail: 'https://images.pexels.com/photos/5705489/pexels-photo-5705489.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Masterclass',
    duration: '30:00',
  },
  {
    id: '6',
    title: 'Fashion Week ANSIMAR 2023',
    thumbnail: 'https://images.pexels.com/photos/6046229/pexels-photo-6046229.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Desfiles',
    duration: '25:15',
  },
];

const categories = ['Todos', 'Desfiles', 'Masterclass', 'Campus', 'Testimonios'];

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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
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
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 text-[#8B1538] ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{video.duration}</span>
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
          <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#8B1538] to-[#B8174C] text-white rounded-full font-bold text-lg hover:from-[#6B0F28] hover:to-[#8B1538] transition-all duration-300 shadow-2xl hover:shadow-[#8B1538]/30 transform hover:scale-105">
            <Film className="w-6 h-6" />
            Ver más videos
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[#D4AF37] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video container */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
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
              <p className="text-gray-400 mt-2">{selectedVideo.category} • {selectedVideo.duration}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
