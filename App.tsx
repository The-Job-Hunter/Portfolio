import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Expertise from './components/Expertise';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden">
        <Hero />
        <Stats />
        <About />
        <Expertise />
        <TechStack />
        <Timeline />
        <Footer />
    </main>
  );
};

export default App;