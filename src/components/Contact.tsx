
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          interest: 'general'
        });
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-iceland-cream/30 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-iceland-dark text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-iceland-dark mb-6">
            Contact Us
          </h2>
          <p className="text-iceland-medium max-w-2xl mx-auto">
            Interested in our horses or have questions about our breeding program? We'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-iceland-earth mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-serif font-bold text-iceland-dark mb-6">How to Reach Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-iceland-cream p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-iceland-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-iceland-dark mb-1">Our Location</h4>
                    <p className="text-iceland-medium">123 Icelandic Way, Countryside Road, Iceland</p>
                    <p className="text-iceland-medium mt-1">Farm visits available by appointment</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-iceland-cream p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-iceland-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-iceland-dark mb-1">Email Us</h4>
                    <p className="text-iceland-medium">info@icelandichorses.com</p>
                    <p className="text-iceland-medium mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-iceland-cream p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-iceland-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-iceland-dark mb-1">Call Us</h4>
                    <p className="text-iceland-medium">+354 123 4567</p>
                    <p className="text-iceland-medium mt-1">Available 9am - 5pm (GMT)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-iceland-dark text-white rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold mb-4">Visiting Hours</h3>
              <p className="text-white/80 mb-6">
                We welcome visitors to our farm to meet our horses and learn more about the breed. Please note that visits are by appointment only.
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>11:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-iceland-dark mb-6">Send Us a Message</h3>
            
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <h4 className="text-xl font-medium mb-2">Thank You!</h4>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-iceland-dark font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-iceland-light focus:outline-none focus:ring-2 focus:ring-iceland-dark"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-iceland-dark font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-iceland-light focus:outline-none focus:ring-2 focus:ring-iceland-dark"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-iceland-dark font-medium mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-iceland-light focus:outline-none focus:ring-2 focus:ring-iceland-dark"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-iceland-dark font-medium mb-2">
                    What are you interested in?
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-iceland-light focus:outline-none focus:ring-2 focus:ring-iceland-dark bg-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="purchase">Horse Purchase</option>
                    <option value="breeding">Breeding Information</option>
                    <option value="visit">Farm Visit</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-iceland-dark font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-iceland-light focus:outline-none focus:ring-2 focus:ring-iceland-dark"
                    placeholder="Please tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-iceland-dark hover:bg-iceland-dark/90 text-white px-6 py-3 rounded-lg font-medium transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover-lift'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
