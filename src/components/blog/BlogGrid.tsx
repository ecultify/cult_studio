
import FadeInView from '../animations/FadeInView';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export default function BlogGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <FadeInView
              key={post.id}
              delay={index * 0.1}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#f78800] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[#f78800] hover:text-[#e67a00] transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}