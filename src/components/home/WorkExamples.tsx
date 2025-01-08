
import FadeInView from '../animations/FadeInView';
import Carousel from '../ui/Carousel';
import { projects } from '../../data/projects';

export default function WorkExamples() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInView className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-gray-600">
            Discover what's possible with our professional studio services
          </p>
        </FadeInView>

        <Carousel 
          items={projects.map(project => ({
            image: project.image,
            title: project.title,
            description: project.description,
            category: project.category
          }))}
        />
      </div>
    </section>
  );
}