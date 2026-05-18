import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductCatalog from '@/components/ProductCatalog';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductCatalog />
        <AboutUs />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
