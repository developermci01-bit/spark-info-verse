import { Target, Eye, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    'Established in 2014 with commitment to quality',
    'Team of seasoned industry professionals',
    'State-of-the-art manufacturing facility',
    'Serving 18+ states in India',
    'Exporting to 6+ countries worldwide',
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
                About Us
              </span>
            </div>
            
            <h2 className="section-title text-foreground mb-6">
              Driving Excellence in{' '}
              <span className="text-gradient">Petroleum Products</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Wieser Petroleum LLP was established with the aim of delivering superior performance and value to our customers. Our brand, Wieser Lubricants, sets new benchmarks in the industry with exceptional quality products at competitive prices.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Our team comprises highly qualified individuals with strong business acumen and deep understanding of their domains. Their unwavering dedication enables us to develop top-tier products that lead the market in quality and reliability.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision & Mission Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To emerge as a globally recognized lubricants company driven by innovation. We aim to introduce an extensive range of lubricant products catering to diverse industry needs, establishing ourselves as a leader in the international market.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Delivering excellence in petroleum products and services while prioritizing integrity, safety, and sustainability for a brighter future.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-foreground/20">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-3">Quality Commitment</h3>
                  <p className="text-primary-foreground/80">
                    Manufacturing capacity of 1 lakh liters per day with high-tech machinery that fills, labels, and packs 20,000 products daily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
