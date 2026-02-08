import React, { useState, useEffect } from 'react';
import { HERO_KEYWORDS, AVATAR_URL } from '../constants';

const Hero: React.FC = () => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Find longest keyword to set container width naturally
  const longestKeyword = HERO_KEYWORDS.reduce((a, b) => a.length > b.length ? a : b, "");

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // Wait for fade out to complete, then swap text and fade in
      setTimeout(() => {
        setCurrentKeywordIndex((prev) => (prev + 1) % HERO_KEYWORDS.length);
        setIsVisible(true);
      }, 500); // 500ms matches the CSS transition time
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <div className="relative mb-8">
          <div className="size-44 md:size-52 rounded-full border border-gray-200/50 bg-white dark:bg-surface-dark shadow-2xl overflow-hidden">
            <div 
                className="w-full h-full rounded-full bg-cover bg-center" 
                style={{ backgroundImage: `url('${AVATAR_URL}')` }}
                role="img"
                aria-label="Avatar Placeholder"
            />
          </div>
        </div>
        
        <h1 className="magazine-heading text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter text-charcoal dark:text-white">
          Jonathan Hazan
        </h1>
        
        <div className="flex flex-col items-center gap-6 mb-12 w-full">
          <p className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400">
            Head of Product
          </p>
          
          {/* Main sentence container - forced single row */}
          <div className="text-sm sm:text-xl md:text-3xl font-medium text-charcoal dark:text-gray-200 w-full flex flex-nowrap justify-center items-center gap-x-1.5 sm:gap-x-2">
            <span className="whitespace-nowrap">I turn ideas into products through</span>
            <div className="relative h-[1.5em] flex items-center text-left">
               {/* Invisible span to set width based on longest keyword */}
               <span className="opacity-0 whitespace-nowrap font-extrabold pointer-events-none select-none">
                 {longestKeyword}
               </span>

               <span 
                 className={`text-primary font-extrabold transition-all duration-500 absolute left-0 whitespace-nowrap ${
                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                 }`}
               >
                 {HERO_KEYWORDS[currentKeywordIndex]}
               </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView()}
            className="group flex items-center justify-center gap-2 bg-primary text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
            aria-label="Scroll to About section"
          >
            TELL ME MORE
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;