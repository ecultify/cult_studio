
import AboutHero from '../components/about/AboutHero';
import FoundingStory from '../components/about/FoundingStory';
import Founders from '../components/about/Founders';
import Presence from '../components/about/Presence';
import Expertise from '../components/about/Expertise';

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <AboutHero />
      <FoundingStory />
      <Founders />
      <Presence />
      <Expertise />
    </div>
  );
}