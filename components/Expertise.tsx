import React from 'react';
import { EXPERTISE } from '../constants';

const Expertise: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark/50" id="expertise">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-charcoal dark:text-white">Core Expertise</h2>
          <div className="h-1.5 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-auto md:grid-rows-2 gap-4">
          {EXPERTISE.map((item, index) => {
            let itemClass = "rounded-3xl p-8 lg:p-10 flex flex-col justify-between hover:shadow-xl transition-all group duration-300";
            let iconClass = "material-symbols-outlined text-4xl mb-6 group-hover:scale-110 transition-transform duration-300";
            let titleClass = "text-xl lg:text-2xl font-bold mb-3";
            let descClass = "leading-relaxed text-sm lg:text-base";

            if (item.variant === 'primary') {
                itemClass += " bg-primary text-white";
                iconClass += " text-white";
                titleClass += " text-white";
                descClass += " text-blue-50";
            } else if (item.variant === 'dark') {
                itemClass += " bg-charcoal text-white";
                iconClass += " text-primary";
                titleClass += " text-white";
                descClass += " text-gray-400";
            } else {
                itemClass += " bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800";
                iconClass += " text-primary";
                titleClass += " text-charcoal dark:text-white";
                descClass += " text-gray-500 dark:text-gray-400";
            }

            // Manually mapping column spans for Tailwind since dynamic classes can be tricky
            const colSpanClass = item.colSpan === 3 ? "md:col-span-3" : "md:col-span-2";

            return (
              <div key={index} className={`${colSpanClass} ${itemClass}`}>
                <div>
                  <span className={iconClass}>{item.icon}</span>
                  <h3 className={titleClass}>{item.title}</h3>
                  <p className={descClass}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;