
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import HorseShowcase from '../components/HorseShowcase';
import BreedInfo from '../components/BreedInfo';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize any animations or scroll triggers here
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Select elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <HorseShowcase />
      <BreedInfo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
