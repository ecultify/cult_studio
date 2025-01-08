
import About from './pages/About';
import Contact from './pages/Contact';
import CycWall from './pages/CycWall';
import Blog from './pages/Blog';
import HomePage from './pages/Home';

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <About /> },
  { path: '/cyc-wall', element: <CycWall /> },
  { path: '/blog', element: <Blog /> },
  { path: '/contact', element: <Contact /> }
];