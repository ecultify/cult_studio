
import FadeInView from '../animations/FadeInView';
import Carousel from '../ui/Carousel';

const useCases = [
  {
    title: "Click to launch the Camera app. Click again to instantly take a photo.",
    image: "https://images.unsplash.com/photo-1595521969746-7e9f07692d8e?auto=format&fit=crop&w=800",
    category: "Photography"
  },
  {
    title: "Click and hold to start recording video.",
    image: "https://images.unsplash.com/photo-1589830400053-5600d42d5e7f?auto=format&fit=crop&w=800",
    category: "Video"
  },
  {
    title: "Perfect for product photography and commercial shoots.",
    image: "https://images.unsplash.com/photo-1576824228862-5a3c1f6b4c78?auto=format&fit=crop&w=800",
    category: "Commercial"
  }
];

export default function UseCases() {
  return (
    <section className="py-32 bg-[#fbfbfd]">
      <div className="container mx-auto px-4">
        <FadeInView>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-semibold text-center mb-24">
            Studio Possibilities
          </h2>
        </FadeInView>

        <Carousel 
          items={useCases.map(useCase => ({
            image: useCase.image,
            title: useCase.title,
            category: useCase.category
          }))}
          aspectRatio="4/3"
        />
      </div>
    </section>
  );
}