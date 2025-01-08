
import BlogBanner from '../components/blog/BlogBanner';
import BlogFeatured from '../components/blog/BlogFeatured';
import BlogGrid from '../components/blog/BlogGrid';
import BlogCategories from '../components/blog/BlogCategories';
import BlogNewsletter from '../components/blog/BlogNewsletter';

export default function Blog() {
  return (
    <div className="overflow-x-hidden">
      <BlogBanner />
      <BlogCategories />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
    </div>
  );
}