const ClientsSection = () => {
  const clients = [
    'MSIL', 'Toyota', 'Hyundai', 'Mahindra', 'Tata Motors', 
    'Hero', 'Honda', 'TVS', 'Bajaj', 'Royal Enfield'
  ];

  return (
    <section className="py-16 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by Leading Brands
          </p>
        </div>
        
        {/* Scrolling logos effect */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12 items-center">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 bg-card rounded-xl border border-border/50 hover:border-accent/50 transition-colors"
              >
                <span className="font-heading font-bold text-lg text-muted-foreground hover:text-foreground transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
