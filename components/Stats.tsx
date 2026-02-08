import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-24 relative z-10">
      <div className="bg-white/50 dark:bg-surface-dark/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-xl p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-800">
          {STATS.map((stat, index) => {
            // Logic to determine animation type
            // Indexes 0 and 1 ("Business Models", "Platforms") -> Infinite
            // Indexes 2 and 3 ("Years Experience", "Shipped Products") -> Once
            const isInfinite = index < 2;
            const animationClass = isInfinite ? 'animate-roll-infinite' : 'animate-roll-once';

            return (
              <div 
                  key={index} 
                  className={`flex flex-col items-center lg:items-start lg:px-8 pt-8 lg:pt-0 ${index === 0 ? 'first:pl-0 border-t lg:border-t-0' : ''}`}
              >
                {stat.values.length > 1 ? (
                  <div className="rolling-metric-container w-full">
                    <div className={animationClass}>
                      {stat.values.map((val, vIndex) => (
                          <span key={vIndex} className="h-12 flex items-center text-3xl md:text-4xl font-extrabold text-charcoal dark:text-white tracking-tight">
                              {val}
                          </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <span className="h-12 flex items-center text-3xl md:text-4xl font-extrabold text-charcoal dark:text-white tracking-tight">
                      {stat.values[0]}
                  </span>
                )}
                <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-2">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;