
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const footerLinks = {
  Company: ['About Us', 'Blog', 'Contact Us'],
  Resources: ['FAQ', 'Terms of Service', 'Privacy Policy'],
};

const socialLinks = [
  { icon: <Instagram className="w-5 h-5" />, href: '#' },
  { icon: <Twitter className="w-5 h-5" />, href: '#' },
  { icon: <Youtube className="w-5 h-5" />, href: '#' },
  { icon: <Facebook className="w-5 h-5" />, href: '#' },
];

export default function Footer() {
  const getPath = (link: string): string => {
    switch (link.toLowerCase()) {
      case 'home':
        return '/';
      case 'about us':
        return '/about';
      case 'contact us':
        return '/contact';
      default:
        return `/${link.toLowerCase().replace(/\s+/g, '-')}`;
    }
  };

  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold">cult.studio</Link>
            <p className="mt-4 text-gray-400 max-w-md">
              A creative tech studio specializing in event production, photography, videography, and virtual production.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link 
                      to={getPath(link)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} cult.studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}