
import ParallaxText from './ui/ParallaxText';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-iceland-cream text-iceland-dark px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-iceland-dark mb-6">
            A Passion for Icelandic Horses
          </h2>
          <div className="w-24 h-1 bg-iceland-earth mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=1770&auto=format"
              alt="Icelandic horses in their natural habitat"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <span className="text-white/90 text-sm">EST. 1995</span>
              <h3 className="text-white text-xl font-serif">25+ Years of Excellence</h3>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8" data-aos="fade-up" data-aos-delay="200">
            <p className="text-lg text-iceland-medium leading-relaxed">
              For over two decades, we have dedicated ourselves to breeding and training the finest Icelandic horses. Our breeding program focuses on preserving the exceptional qualities that make this ancient breed so special while ensuring each horse reaches its full potential.
            </p>
            
            <p className="text-lg text-iceland-medium leading-relaxed">
              Located in the beautiful countryside that mimics the horses' native terrain, our farm provides the ideal environment for these magnificent animals to thrive. Each horse receives personalized care and training from our experienced team.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="space-y-2">
                <h4 className="text-3xl font-serif font-bold text-iceland-dark">25+</h4>
                <p className="text-iceland-medium">Years Experience</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-serif font-bold text-iceland-dark">50+</h4>
                <p className="text-iceland-medium">Champion Horses</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-serif font-bold text-iceland-dark">100%</h4>
                <p className="text-iceland-medium">Pure Icelandic Lineage</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-serif font-bold text-iceland-dark">300+</h4>
                <p className="text-iceland-medium">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Text */}
      <div className="my-24">
        <ParallaxText baseVelocity={-2} className="text-iceland-dark/10 font-serif">
          <span>Strength • Endurance • Grace • Intelligence • Temperament</span>
        </ParallaxText>
      </div>
    </section>
  );
};

export default About;
