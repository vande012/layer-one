import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import TerminalCTA from './components/TerminalCTA';
import LogoCarousel from './components/LogoCarousel';
import Nav from './components/Nav';

export default function Home() {
  return (
    <main className="relative overflow-visible">
        <Nav />
        <Hero />
        <div className="relative z-10 overflow-visible">
          <AboutUs />
          <LogoCarousel />
          <TerminalCTA />
          <Team />
          <Footer />
        </div>
    </main>
  );
}