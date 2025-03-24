
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Values from '@/components/Values';
import Founders from '@/components/Founders';
// import ExplanationVideo from '@/components/ExplanationVideo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { initRevealAnimations } from '@/lib/animation';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize scroll animations
    initRevealAnimations();
  }, []);

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <Values />
          <Founders />
          {/* <ExplanationVideo /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
