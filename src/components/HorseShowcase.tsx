
import { useState } from 'react';

// Mock horse data
const horses = [
  {
    id: 1,
    name: 'Freya',
    age: 5,
    color: 'Chestnut',
    gender: 'Mare',
    description: 'Freya is a beautiful mare with exceptional tölt and trot gaits. She has a gentle temperament and is perfect for both experienced riders and beginners.',
    image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?q=80&w=2000&auto=format',
    featured: true,
  },
  {
    id: 2,
    name: 'Thor',
    age: 7,
    color: 'Black',
    gender: 'Stallion',
    description: 'Thor is a powerful stallion with a strong presence. He has impressive pace and gallop, making him ideal for competitions and experienced riders.',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=2000&auto=format',
    featured: false,
  },
  {
    id: 3,
    name: 'Odin',
    age: 4,
    color: 'Bay',
    gender: 'Gelding',
    description: 'Odin is a friendly and curious gelding with natural talent for tölt. He is well-trained and responsive, suitable for family riding and leisure.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2000&auto=format',
    featured: false,
  },
  {
    id: 4,
    name: 'Loki',
    age: 6,
    color: 'Palomino',
    gender: 'Gelding',
    description: 'Loki is a spirited gelding with exceptional speed and agility. He excels in pace racing and has a playful personality that makes training enjoyable.',
    image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?q=80&w=2000&auto=format',
    featured: false,
  },
];

const HorseShowcase = () => {
  const [selectedHorse, setSelectedHorse] = useState(horses[0]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section id="horses" className="py-24 px-6 bg-iceland-cream/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-iceland-dark text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Horses
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-iceland-dark mb-6">
            Exceptional Icelandic Horses
          </h2>
          <p className="text-iceland-medium max-w-2xl mx-auto">
            Discover our selection of purebred Icelandic horses, each with their unique personality and exceptional five-gait abilities.
          </p>
          <div className="w-24 h-1 bg-iceland-earth mx-auto mt-6"></div>
        </div>

        {/* Featured Horse Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Featured Horse Image - Takes 3 columns */}
          <div className="lg:col-span-3 h-[500px] rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-iceland-dark/20 z-10"></div>
            <img 
              src={selectedHorse.image}
              alt={selectedHorse.name}
              className={`w-full h-full object-cover transition-all duration-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setIsImageLoaded(true)}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent z-20">
              <h3 className="text-white text-3xl font-serif font-bold mb-2">{selectedHorse.name}</h3>
              <p className="text-white/80">{selectedHorse.color} {selectedHorse.gender}, {selectedHorse.age} years old</p>
            </div>
          </div>

          {/* Featured Horse Description - Takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="glass bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-serif font-bold text-iceland-dark mb-4">About {selectedHorse.name}</h4>
              <p className="text-iceland-medium mb-6 leading-relaxed">
                {selectedHorse.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-iceland-cream/50 p-4 rounded-lg">
                  <p className="text-sm text-iceland-medium">Age</p>
                  <p className="text-xl font-medium text-iceland-dark">{selectedHorse.age} years</p>
                </div>
                <div className="bg-iceland-cream/50 p-4 rounded-lg">
                  <p className="text-sm text-iceland-medium">Gender</p>
                  <p className="text-xl font-medium text-iceland-dark">{selectedHorse.gender}</p>
                </div>
                <div className="bg-iceland-cream/50 p-4 rounded-lg">
                  <p className="text-sm text-iceland-medium">Color</p>
                  <p className="text-xl font-medium text-iceland-dark">{selectedHorse.color}</p>
                </div>
                <div className="bg-iceland-cream/50 p-4 rounded-lg">
                  <p className="text-sm text-iceland-medium">Gaits</p>
                  <p className="text-xl font-medium text-iceland-dark">5 gaited</p>
                </div>
              </div>
              <a 
                href="#contact" 
                className="inline-block bg-iceland-dark hover:bg-iceland-dark/90 text-white px-8 py-3 rounded-md font-medium transition-all hover-lift"
              >
                Inquire About {selectedHorse.name}
              </a>
            </div>
          </div>
        </div>

        {/* Horse Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {horses.map((horse) => (
            <div 
              key={horse.id} 
              className={`h-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedHorse.id === horse.id ? 'ring-4 ring-iceland-dark' : 'hover:opacity-90'
              }`}
              onClick={() => setSelectedHorse(horse)}
            >
              <img 
                src={horse.image} 
                alt={horse.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 flex items-end p-4">
                <div>
                  <h4 className="text-white font-serif font-medium text-lg">{horse.name}</h4>
                  <p className="text-white/80 text-sm">{horse.color} {horse.gender}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorseShowcase;
