import { useState, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
  useFadeIn();

  const sections = [
    { id: 'hero', label: 'Home', component: Hero },
    { id: 'about', label: 'About', component: About },
    { id: 'services', label: 'Services', component: Services },
    { id: 'portfolio', label: 'Portfolio', component: Portfolio },
    { id: 'team', label: 'Team', component: Team },
    { id: 'testimonials', label: 'Testimonials', component: Testimonials },
    { id: 'contact', label: 'Contact', component: Contact },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors duration-300`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} sectionRefs={sectionRefs} sections={sections} />
              <main>
                {sections.map(({ id, component: Component }, index) => (
                  <Section key={id} id={id} ref={(el) => (sectionRefs.current[index] = el)}>
                    <Component />
                  </Section>
                ))}
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/profile/:id"
          element={<ProfilePage onBack={() => navigate('/#team')} />}
        />
      </Routes>
    </div>
  );
}

export default App;