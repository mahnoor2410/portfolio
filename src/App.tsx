import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { WhyMe } from './components/WhyMe';
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer, BackToTop } from './components/Footer';

function App() {
  const { theme, toggle } = useTheme();
  useReveal();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero theme={theme} />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <WhyMe />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
