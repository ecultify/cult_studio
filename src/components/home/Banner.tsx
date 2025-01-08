
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <section className="relative h-screen">
      <img 
        src="https://images.squarespace-cdn.com/content/v1/60d60c8f1d2e285bfc9384b9/69169471-f213-481c-ac27-f746b2bd5ad9/RESONANT+STUDIO+WEBSITE+9.14.21-8.jpg"
        alt="Cyc Wall Studio"
        className="absolute inset-0 w-full h-full object-cover fixed"
      />
      <div className="absolute inset-0 bg-black/50" />
    </section>
  );
}