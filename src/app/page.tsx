import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import TerminalCTA from './components/TerminalCTA';
import LogoCarousel from './components/LogoCarousel';

export default function Home() {
  return (
    <main className="relative">
        {/* <Nav /> */}
        <Hero />
        <AboutUs />
        <LogoCarousel />
        <TerminalCTA />
        <Team />
        <Footer />
    </main>
  );
}