
import SlideInView from '../animations/SlideInView';

export default function IntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideInView direction="left">
            <h2 className="text-4xl font-bold mb-8">What We Do</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <span className="font-semibold">cult.studio</span>, we're your comprehensive event partner. We offer creative concept development, stage design, event branding, artist bookings, staff logistics, technical production management (including lighting, audio, video, IT), and the integration of special effects. We operate globally, leveraging an extensive network of industry specialists.
            </p>
          </SlideInView>

          <SlideInView direction="right" className="relative">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920"
              alt="Event Production"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#f78800] text-white p-8 rounded-xl">
              <p className="text-2xl font-bold">Global Impact</p>
              <p>Industry Leaders</p>
            </div>
          </SlideInView>
        </div>
      </div>
    </section>
  );
}