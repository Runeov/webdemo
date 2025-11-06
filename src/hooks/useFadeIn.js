import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useFadeIn = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('🎨 useFadeIn triggered for:', location.pathname);
    
    // Small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('👁️ Element intersecting:', entry.target.className);
              entry.target.classList.add('fade-in-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      const elements = document.querySelectorAll('.fade-in');
      console.log('🔍 Found fade-in elements:', elements.length);
      
      if (elements.length > 0) {
        elements.forEach((el) => {
          console.log('👀 Observing element:', el.tagName, el.className);
          observer.observe(el);
        });
      } else {
        console.warn('⚠️ No fade-in elements found!');
      }

      return () => {
        console.log('🧹 Cleaning up observer');
        observer.disconnect();
      };
    }, 50);

    return () => {
      console.log('🧹 Cleaning up timeout');
      clearTimeout(timeoutId);
    };
  }, [location.pathname]);
};

export default useFadeIn;