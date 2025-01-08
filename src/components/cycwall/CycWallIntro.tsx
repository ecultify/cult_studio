
import SlideInView from '../animations/SlideInView';

export default function CycWallIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideInView direction="left">
            <h2 className="text-4xl font-bold mb-8">What is a Cyc Wall?</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                A cyclorama (cyc) wall is a seamless, curved surface that creates the illusion of infinite space. It's a fundamental tool in professional photography and film production, eliminating corners and providing a clean, uninterrupted background.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our state-of-the-art cyc wall facility offers the perfect canvas for your creative vision, whether you're shooting photos, videos, or creating virtual productions.
              </p>
            </div>
          </SlideInView>

          <SlideInView direction="right" className="relative">
            <img 
              src="https://images.unsplash.com/photo-1589830400053-5600d42d5e7f?auto=format&fit=crop&w=1000"
              alt="Cyc Wall Example"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-purple-600 text-white p-8 rounded-xl">
              <p className="text-2xl font-bold">2000+ sq ft</p>
              <p>Studio Space</p>
            </div>
          </SlideInView>
        </div>
      </div>
    </section>
  );
}