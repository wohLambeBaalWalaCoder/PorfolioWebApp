import Hero from './Hero';
import Experience from './Experience';
import TechStack from './TechStack';
import Skills from './Skills';
import FeaturedProjects from './FeaturedProjects';

export default function Home() {
    return (
        <main>
            <Hero />
            <Experience />
            <Skills />
            <TechStack />
            <FeaturedProjects />
        </main>
    );
}
