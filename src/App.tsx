import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollContainer from './components/layout/ScrollContainer';
import { routes } from './routes';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ScrollContainer>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </ScrollContainer>
        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  );
}