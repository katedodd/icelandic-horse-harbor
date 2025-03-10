
const BreedInfo = () => {
  // Unique characteristics of Icelandic horses
  const characteristics = [
    {
      title: "Five Gaits",
      description: "Unlike most horse breeds with three or four gaits, Icelandic horses have five: walk, trot, canter/gallop, tölt, and flying pace.",
      icon: "✧"
    },
    {
      title: "Pure Bloodline",
      description: "The breed has been isolated in Iceland for over 1,000 years, resulting in one of the purest bloodlines in the world.",
      icon: "✧"
    },
    {
      title: "Hardy & Strong",
      description: "Evolved to survive harsh Icelandic conditions, these horses are incredibly hardy and can carry up to 30% of their body weight.",
      icon: "✧"
    },
    {
      title: "Long Lifespan",
      description: "Icelandic horses typically live longer than other breeds, with many remaining active and healthy well into their 30s.",
      icon: "✧"
    },
    {
      title: "Gentle Temperament",
      description: "Known for their calm, friendly nature, making them ideal for riders of all experience levels, including children.",
      icon: "✧"
    },
    {
      title: "No Predators",
      description: "With no natural predators in Iceland, these horses have developed a curious and friendly nature rather than a flight response.",
      icon: "✧"
    }
  ];

  // Five gaits information
  const gaits = [
    {
      name: "Walk",
      description: "A four-beat gait that averages 4-5 km/h",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=1200&auto=format"
    },
    {
      name: "Trot",
      description: "A two-beat diagonal gait at 15-20 km/h",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=1200&auto=format"
    },
    {
      name: "Canter/Gallop",
      description: "A three-beat gait that can exceed 30 km/h",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format"
    },
    {
      name: "Tölt",
      description: "A smooth four-beat lateral ambling gait unique to Icelandic horses",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?q=80&w=1200&auto=format"
    },
    {
      name: "Flying Pace",
      description: "A lateral two-beat gait used for racing, reaching up to 50 km/h",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=1200&auto=format"
    }
  ];

  return (
    <section id="breed-info" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-iceland-cream text-iceland-dark px-4 py-1 rounded-full text-sm font-medium mb-4">
            Breed Information
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-iceland-dark mb-6">
            The Unique Icelandic Horse
          </h2>
          <p className="text-iceland-medium max-w-2xl mx-auto">
            Discover what makes the Icelandic horse so special and why they're cherished around the world.
          </p>
          <div className="w-24 h-1 bg-iceland-earth mx-auto mt-6"></div>
        </div>

        {/* Characteristics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {characteristics.map((item, index) => (
            <div 
              key={index}
              className="bg-iceland-cream/30 rounded-2xl p-8 transition-all duration-300 hover-lift"
            >
              <div className="text-iceland-earth text-3xl mb-4 font-serif">{item.icon}</div>
              <h3 className="text-xl font-serif font-bold text-iceland-dark mb-3">{item.title}</h3>
              <p className="text-iceland-medium">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Five Gaits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-iceland-dark mb-4">The Five Gaits</h3>
            <p className="text-iceland-medium max-w-2xl mx-auto">
              One of the most distinctive features of the Icelandic horse is its five gaits, two more than most other breeds.
            </p>
          </div>

          {/* Gaits Carousel/Slider - A simple horizontal scroll for now */}
          <div className="flex overflow-x-auto space-x-6 py-4 px-2 scrollbar-hide">
            {gaits.map((gait, index) => (
              <div 
                key={index} 
                className="flex-none w-80 bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-48 relative">
                  <img 
                    src={gait.image} 
                    alt={`${gait.name} gait`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-serif font-bold text-iceland-dark mb-2">{gait.name}</h4>
                  <p className="text-iceland-medium">{gait.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* History and Origin */}
        <div className="bg-iceland-dark text-white rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-serif font-bold mb-6">Ancient Norse Origins</h3>
              <p className="mb-4 text-white/80 leading-relaxed">
                The Icelandic horse was brought to Iceland by Norse settlers between 860 and 935 AD. The harsh climate and isolation of Iceland led to natural selection, creating the hardy breed we know today.
              </p>
              <p className="mb-4 text-white/80 leading-relaxed">
                To preserve the purity of the breed, Iceland has prohibited the importation of horses since 982 AD, making it one of the oldest and purest horse breeds in the world.
              </p>
              <p className="text-white/80 leading-relaxed">
                Once an Icelandic horse leaves the country, it can never return, ensuring the absence of foreign diseases and preserving the genetic purity of the breed.
              </p>
            </div>
            <div className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=2000&auto=format" 
                alt="Icelandic horses in traditional landscape" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreedInfo;
