import { useState } from 'react';

function Navbar({ darkMode, setDarkMode, sectionRefs, sections }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300">
      <div className="container mx-auto px-4 @sm:px-6 @lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-0">
          <div className="text-xl font-bold text-primary-600">WebDev Co.</div>
          <div className="hidden md:flex space-x-8">
            {sections.map(({ id, label }, index) => (
              <button
                key={id}
                onClick={() => scrollToSection(index)}
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              ☰
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-neutral-200 dark:border-neutral-800">
            {sections.map(({ id, label }, index) => (
              <button
                key={id}
                onClick={() => scrollToSection(index)}
                className="block w-full text-left py-2 hover:text-primary-600"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;