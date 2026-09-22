import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Strip from './components/Strip';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <Hero />
      <Strip />
      <Services />
      <HowItWorks />
      <About />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
