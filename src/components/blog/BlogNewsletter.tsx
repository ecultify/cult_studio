
import FadeInView from '../animations/FadeInView';
import AnimatedButton from '../ui/AnimatedButton';

export default function BlogNewsletter() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest industry insights, tips, and stories.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#f78800] focus:border-transparent"
                required
              />
              <AnimatedButton variant="primary">
                Subscribe
              </AnimatedButton>
            </form>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}