import Hero from './components/Hero';
import Footer from './components/Footer';
import Nav from './components/Nav';


export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main className="flex flex-col min-h-screen relative">
        <Nav />
        <Hero />
        <Footer />
      </main>
    </>
  );
}
