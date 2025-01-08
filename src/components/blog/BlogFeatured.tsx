
import FadeInView from '../animations/FadeInView';
import { ArrowRight } from 'lucide-react';

const featuredPost = {
  title: "The Evolution of Virtual Production in Modern Filmmaking",
  excerpt: "Explore how virtual production is revolutionizing the film industry and creating new possibilities for creators.",
  image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=2000",
  category: "Technology",
  author: "Sarah Johnson",
  date: "March 15, 2024"
};

export default function BlogFeatured() {
  return (
    <section id="featured" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <FadeInView className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Featured Article</h2>
          <p className="text-lg text-gray-600">
            Deep dive into our most impactful stories
          </p>
        </FadeInView>

        <FadeInView className="group relative aspect-[21/9] rounded-2xl overflow-hidden">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-end p-8 md:p-12">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-[#f78800] text-white text-sm font-semibold rounded-full mb-4">
                {featuredPost.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {featuredPost.title}
              </h3>
              <p className="text-lg text-gray-200 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-gray-300">
                  <span className="text-white font-semibold">{featuredPost.author}</span>
                  <span className="mx-2">·</span>
                  <span>{featuredPost.date}</span>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-white hover:text-[#f78800] transition-colors"
                >
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}