
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: "Mastering Cyc Wall Photography",
    excerpt: "Learn essential techniques for perfect cyc wall shots",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800",
    category: "Photography"
  },
  {
    title: "Virtual Production Guide",
    excerpt: "How to utilize cyc walls for virtual production",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800",
    category: "Production"
  }
];

export default function CycWallBlog() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Latest from Our Blog</h2>
          <p className="text-lg text-gray-600">
            Discover tips, techniques, and insights about cyc wall production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-[16/9]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <span className="text-purple-400 text-sm uppercase tracking-wider mb-2">
                  {post.category}
                </span>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-200 mb-4">{post.excerpt}</p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}