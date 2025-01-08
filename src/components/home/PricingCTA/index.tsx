import React, { useState } from 'react';
import PricingModal from './PricingModal';
import Button from '../../ui/Button';
import AnimatedSection from '../../animations/AnimatedSection';

export default function PricingCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AnimatedSection background="offset" once>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Request our detailed pricing guide and start planning your next production
        </p>
        <Button 
          variant="primary" 
          size="lg"
          onClick={() => setIsModalOpen(true)}
        >
          Get Pricing Guide
        </Button>
      </div>

      <PricingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </AnimatedSection>
  );
}