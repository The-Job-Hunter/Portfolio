import React, { useState } from 'react';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-background-dark" id="experience">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-charcoal dark:text-white">Professional Journey</h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Center Line for Desktop */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 timeline-line -translate-x-1/2 hidden md:block opacity-30"></div>

                    <div className="space-y-20">
                        {TIMELINE.map((item, index) => {
                            return (
                                <div key={item.id} className="relative flex flex-col md:flex-row-reverse gap-8 md:gap-0 group">
                                    {/* Timeline Dot */}
                                    <div className={`absolute left-0 md:left-1/2 size-4 rounded-full -translate-x-1/2 top-2 ring-4 ring-white dark:ring-background-dark z-10 shadow-lg transition-colors duration-300 ${index === 0 ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-primary'}`}></div>

                                    {/* Company Info Side (Right) */}
                                    <div className="md:w-1/2 md:pl-12">
                                        <div className="flex flex-col items-start">
                                            <div className="flex items-center gap-3 mb-2">
                                                {item.logo && (
                                                    <LogoImage src={item.logo} alt={item.company} />
                                                )}
                                                <h3 className="text-2xl font-extrabold text-charcoal dark:text-white">{item.company}</h3>
                                            </div>
                                            <p className="text-primary font-bold mb-2">{item.role}</p>
                                            <p className="text-sm text-gray-400 mb-4 font-semibold uppercase tracking-wider">{item.period}</p>
                                        </div>
                                    </div>

                                    {/* Description Side (Left) */}
                                    <div className="md:w-1/2 md:pr-12 md:text-right">
                                        <ul className="space-y-3 text-gray-600 dark:text-gray-400 list-disc pl-5 md:list-none md:pl-0">
                                            {item.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper component to handle broken images gracefully
const LogoImage: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
    const [error, setError] = useState(false);

    if (error) return null; // Hide if broken, just text remains

    return (
        <img
            src={src}
            alt={`${alt} logo`}
            className="w-8 h-8 object-contain rounded-md"
            onError={() => setError(true)}
        />
    );
};

export default Timeline;