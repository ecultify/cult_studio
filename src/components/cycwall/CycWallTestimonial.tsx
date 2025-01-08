
import FadeInView from '../animations/FadeInView';
import { Quote } from 'lucide-react';

export default function CycWallTestimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <Quote className="w-16 h-16 text-purple-600" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-light text-gray-800 mb-8 pt-12">
              "The cyc wall at cult.studio has transformed our production capabilities. 
              The quality of the space and the technical support are unmatched. It's become 
              our go-to studio for all high-end shoots."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100"
                alt="Mayur & Vivek"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-lg">Mayur & Vivek</p>
                <p className="text-gray-600">Founders, Ecultify</p>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}