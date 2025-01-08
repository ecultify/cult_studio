
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import type { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <button className="text-purple-600 font-semibold hover:text-purple-700">
          Read More →
        </button>
      </div>
    </motion.article>
  );
}