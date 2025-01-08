
import CycWallBanner from '../components/cycwall/CycWallBanner';
import CycWallIntro from '../components/cycwall/CycWallIntro';
import CycWallPossibilities from '../components/cycwall/CycWallPossibilities';
import CycWallGallery from '../components/cycwall/CycWallGallery';
import CycWallBlog from '../components/cycwall/CycWallBlog';
import CycWallFAQ from '../components/cycwall/CycWallFAQ';

export default function CycWall() {
  return (
    <div className="overflow-x-hidden">
      <CycWallBanner />
      <CycWallIntro />
      <CycWallPossibilities />
      <CycWallGallery />
      <CycWallBlog />
      <CycWallFAQ />
    </div>
  );
}