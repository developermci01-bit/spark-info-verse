import { Shield, Award, CheckCircle2, Leaf } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "Quality Management System certified for consistent product excellence",
    cardBg: "bg-primary/5",
    iconBg: "bg-primary/10 group-hover:bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Award,
    title: "API Certified",
    description: "American Petroleum Institute certified lubricants",
    cardBg: "bg-accent/5",
    iconBg: "bg-accent/10 group-hover:bg-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Committed to sustainable manufacturing practices",
    cardBg: "bg-primary/10",
    iconBg: "bg-primary/15 group-hover:bg-primary/25",
    iconColor: "text-primary",
  },
  {
    icon: CheckCircle2,
    title: "BIS Approved",
    description: "Bureau of Indian Standards approved products",
    cardBg: "bg-accent/10",
    iconBg: "bg-accent/15 group-hover:bg-accent/25",
    iconColor: "text-accent",
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Quality Assurance
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Certified for <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to quality is backed by international certifications and rigorous testing protocols. Every product that leaves our facility meets the highest global standards.
            </p>

            {/* Quality Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <span className="text-foreground">100% Quality Tested Products</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <span className="text-foreground">State-of-the-art Testing Laboratory</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <span className="text-foreground">Continuous Research & Development</span>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`${cert.cardBg} border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`w-16 h-16 ${cert.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 transition-colors`}>
                  <cert.icon className={`h-8 w-8 ${cert.iconColor}`} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
