
import SlideInView from '../animations/SlideInView';
import FadeInView from '../animations/FadeInView';
import Button from '../ui/Button';

export default function FoundingStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideInView direction="left">
            <h2 className="text-4xl font-bold mb-8">The Ecultify Journey</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                In 2020, Mayur and Vivek recognized a gap in the event production industry. With their combined expertise in technology and creative production, they founded Ecultify with a mission to revolutionize how events are conceived, designed, and executed.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                cult.studio was born from this vision - a space where cutting-edge technology meets creative excellence. Our studio represents the culmination of years of experience in the industry and a deep understanding of what creators and event producers need.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to be at the forefront of innovative event production, offering comprehensive solutions that blend technical expertise with creative vision.
              </p>
            </div>
            <FadeInView delay={0.3} className="mt-12">
              <Button href="https://ecultify.com/" variant="primary" size="lg">
                Learn More About Us
              </Button>
            </FadeInView>
          </SlideInView>

          <SlideInView direction="right" className="relative">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920"
              alt="Our Journey"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#f78800] text-white p-8 rounded-xl">
              <p className="text-2xl font-bold">Founded</p>
              <p>2020</p>
            </div>
          </SlideInView>
        </div>
      </div>
    </section>
  );
}