
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-iceland-dark text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h4 className="font-serif text-2xl font-semibold mb-6">Icelandic Horses</h4>
            <p className="text-white/70 mb-6 leading-relaxed">
              Dedicated to breeding and training the finest Icelandic horses, preserving their heritage while sharing their exceptional qualities with riders worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-iceland-cream transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-iceland-cream transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-iceland-cream transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Horses', 'Breed Info', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-white/70 hover:text-iceland-cream transition-colors animate-underline inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Horse Sales', 
                'Breeding Program', 
                'Training Services', 
                'Horse Shows',
                'Riding Lessons'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#contact" 
                    className="text-white/70 hover:text-iceland-cream transition-colors animate-underline inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to receive updates about new horses, events, and breeding news.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white w-full focus:outline-none focus:bg-white/20"
                />
                <button 
                  type="submit" 
                  className="bg-iceland-cream text-iceland-dark px-4 py-2 rounded-r-lg font-medium hover:bg-white transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-white/50 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Icelandic Horses. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-white/50 hover:text-iceland-cream transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-iceland-cream transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-iceland-cream transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
