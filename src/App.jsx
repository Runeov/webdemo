import { useState, useRef, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import useFadeIn from './hooks/useFadeIn';
import Navbar from './components/Navbar.jsx';
import Section from './components/Section.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Services from './components/sections/Services.jsx';
import Portfolio from './components/sections/Portfolio.jsx';
import Team from './components/sections/Team.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Contact from './components/sections/Contact.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const sectionRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [renderKey, setRenderKey] = useState(0);
  useFadeIn();

  // Debug logging
  useEffect(() => {
    console.log('🔍 App rendered, location:', location.pathname);
    console.log('🔍 RenderKey:', renderKey);
  }, [location, renderKey]);

  const sections = [
    { id: 'hero', label: 'Hjem', component: Hero },
    { id: 'about', label: 'Om oss', component: About },
    { id: 'services', label: 'Våre Planter', component: Services },
    { id: 'portfolio', label: 'Galleri', component: Portfolio },
    { id: 'team', label: 'Om Oss', component: Team },
    { id: 'testimonials', label: 'Kundeanmeldelser', component: Testimonials },
    { id: 'contact', label: 'Bestill', component: Contact },
  ];

  const handleBackToTeam = () => {
    console.log('🔙 Back button clicked');
    navigate('/');
    // Force re-render to ensure fade-in animations work
    setRenderKey(prev => {
      const newKey = prev + 1;
      console.log('🔄 RenderKey updated to:', newKey);
      return newKey;
    });
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      console.log('⏱️ Attempting to scroll to team section');
      const teamSection = document.getElementById('team');
      console.log('📍 Team section found:', !!teamSection);
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors duration-300`}>
      <Routes>
        <Route
          path="/"
          element={
            <div key={renderKey} className="min-h-screen flex flex-col">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} sectionRefs={sectionRefs} sections={sections} />
              <main className="flex-1">
                {sections.map(({ id, component: Component }, index) => (
                  <Section key={`${id}-${renderKey}`} id={id} ref={(el) => (sectionRefs.current[index] = el)}>
                    <Component />
                  </Section>
                ))}
              </main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <div className="min-h-screen flex flex-col">
              <ProfilePage onBack={handleBackToTeam} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;