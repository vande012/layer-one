import Hero from './components/Hero';
import Footer from './components/Footer';
import Nav from './components/Nav';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <Hero />
      <Footer />
    </main>
  );
}
