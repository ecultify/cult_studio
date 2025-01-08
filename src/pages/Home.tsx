
import Hero from '../components/home/Hero';
import WhoWeAreSection from '../components/home/WhoWeAreSection';
import IntroSection from '../components/home/IntroSection';
import FeaturedCarousel from '../components/home/FeaturedCarousel';
import CycWallUSP from '../components/home/CycWallUSP';
import TechnicalSpecs from '../components/home/TechnicalSpecs';
import ServicesSection from '../components/home/ServicesSection';
import PricingCTA from '../components/home/PricingCTA';
import ContactSection from '../components/home/ContactSection';
import WhatsAppButton from '../components/ui/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAreSection />
      <IntroSection />
      <FeaturedCarousel />
      <CycWallUSP />
      <TechnicalSpecs />
      <ServicesSection />
      <PricingCTA />
      <ContactSection />
      <WhatsAppButton />
    </>
  );
}