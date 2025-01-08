
import SlideInView from '../animations/SlideInView';

export default function WhoWeAreSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideInView direction="left" className="relative">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920"
              alt="Creative Studio"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#f78800] text-white p-8 rounded-xl">
              <p className="text-2xl font-bold">Creative</p>
              <p>Excellence</p>
            </div>
          </SlideInView>

          <SlideInView direction="right">
            <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                We are cult.studio, a creative powerhouse dedicated to pushing the boundaries of event production through innovative technology and artistic excellence. With our state-of-the-art facilities and expert team, we transform ordinary spaces into extraordinary experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our studio stands as a testament to our commitment to quality and innovation, featuring cutting-edge technology and versatile spaces that adapt to your creative vision.
              </p>
            </div>
          </SlideInView>
        </div>
      </div>
    </section>
  );
}