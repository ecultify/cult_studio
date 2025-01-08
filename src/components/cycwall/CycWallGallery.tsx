
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeInView from '../animations/FadeInView';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1595521969746-7e9f07692d8e?auto=format&fit=crop&w=800",
    caption: "Fashion Editorial",
    category: "Photography",
    link: "/blog/fashion-photography"
  },
  {
    url: "https://images.unsplash.com/photo-1576824228862-5a3c1f6b4c78?auto=format&fit=crop&w=800",
    caption: "Product Photography",
    category: "Commercial",
    link: "/blog/product-photography"
  },
  {
    url: "https://images.unsplash.com/photo-1589830400053-5600d42d5e7f?auto=format&fit=crop&w=800",
    caption: "Commercial Video",
    category: "Video",
    link: "/blog/commercial-video"
  },
  {
    url: "https://images.unsplash.com/photo-1574427797991-2abcef40ebf5?auto=format&fit=crop&w=800",
    caption: "Behind the Scenes",
    category: "Studio",
    link: "/blog/behind-the-scenes"
  }
];

const duplicatedImages = [...galleryImages, ...galleryImages];

export default function CycWallGallery() {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    });
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInView className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Studio Gallery</h2>
          <p className="text-lg text-gray-600 mb-12">
            Take a look at some of the amazing work produced in our cyc wall studio
          </p>
        </FadeInView>

        <div className="relative">
          <motion.div 
            className="flex gap-8"
            initial={{ x: 0 }}
            animate={controls}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {duplicatedImages.map((image, index) => (
              <Link
                key={`${image.caption}-${index}`}
                to={image.link}
                className="w-[400px] flex-shrink-0 group cursor-pointer"
              >
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-purple-900/80 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <span className="text-purple-400 text-sm uppercase tracking-wider mb-2 block">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-semibold">{image.caption}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}