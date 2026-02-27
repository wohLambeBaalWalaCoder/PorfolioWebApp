import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <TechStack />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  )
}

export default App;
