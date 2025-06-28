import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TutorProfiles from './components/TutorProfiles';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <TutorProfiles />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;