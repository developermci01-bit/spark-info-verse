import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Ghaziabad, U.P.', 'India'],
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+91 8130324944'],
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@wieserpetroleum.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9AM - 6PM'],
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
              Contact Us
            </span>
          </div>
          
          <h2 className="section-title text-foreground mb-6">
            Get Your Free{' '}
            <span className="text-gradient">Distributorship</span>
          </h2>
          
          <p className="section-subtitle mx-auto">
            Interested in becoming a Wieser Petroleum distributor? Reach out to us and join our growing network of partners worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-xl p-6 card-shadow border border-border"
              >
                <div className="p-3 rounded-lg bg-accent/10">
                  <info.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">
                    {info.title}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="bg-primary rounded-xl p-6 text-center">
              <h4 className="font-heading font-bold text-primary-foreground mb-2">
                Worldwide Presence
              </h4>
              <p className="text-primary-foreground/70 text-sm">
                Serving customers in 18+ Indian states and 6+ countries globally
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 card-shadow border border-border"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block font-heading text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-heading text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block font-heading text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="+91 8130324944"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-heading text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="yzol-lubricants">Enquiry for Yzol Lubricants</option>
                    <option value="distributorship">Distributorship Inquiry</option>
                    <option value="products">Product Information</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block font-heading text-sm font-medium text-foreground mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button variant="accent" size="xl" type="submit" className="w-full">
                Send Message
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
