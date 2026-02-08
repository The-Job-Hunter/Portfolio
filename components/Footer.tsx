import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark pt-20 pb-10 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div className="max-w-md">
            <h2 className="text-3xl font-extrabold mb-4 text-charcoal dark:text-white">Let's build the future together.</h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Available for advisory roles, speaking engagements, and full-time leadership opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              className="flex items-center justify-center gap-2 bg-[#0077b5] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#006097] transition-all hover:-translate-y-1" 
              href="https://www.linkedin.com/in/yonih/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-200 dark:border-gray-800 gap-8">
          <p className="text-sm text-gray-400">© 2026 Jonathan Hazan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;