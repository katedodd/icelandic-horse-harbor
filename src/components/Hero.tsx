
import { useState, useEffect } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded to true after component mounts to trigger animations
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2000&auto=format"
            alt="Icelandic landscape with horses" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background/80"></div>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-iceland-cream/90 backdrop-blur-sm text-iceland-dark px-4 py-1 rounded-full text-sm font-medium mb-6">
            Authentic Icelandic Horse Breeding
          </span>
        </div>
        
        <h1 className={`font-serif text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl transition-all duration-1000 delay-100 ${
          loaded ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          Experience the Magic of Icelandic Horses
        </h1>
        
        <p className={`text-white/90 text-lg md:text-xl max-w-2xl mb-10 transition-all duration-1000 delay-200 ${
          loaded ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          Discover the unique five-gaited breed known for their strength, intelligence, and gentle temperament.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
          loaded ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <a 
            href="#horses" 
            className="bg-iceland-dark hover:bg-iceland-dark/90 text-white px-8 py-3 rounded-md font-medium transition-all hover-lift"
          >
            View Our Horses
          </a>
          <a 
            href="#contact" 
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-md font-medium transition-all hover-lift"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className={`w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2 transition-all duration-1000 delay-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-1 h-2 bg-white/70 rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
