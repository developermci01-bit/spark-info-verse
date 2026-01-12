import { useEffect, useState } from 'react';

const StatsSection = () => {
  const stats = [
    { value: 10, suffix: '+', label: 'Years of Excellence' },
    { value: 18, suffix: '+', label: 'States in India' },
    { value: 6, suffix: '+', label: 'Export Countries' },
    { value: 1, suffix: ' Lakh L', label: 'Daily Production' },
  ];

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-primary-foreground blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="text-primary-foreground/70 text-sm md:text-base font-medium">
        {label}
      </p>
    </div>
  );
};

export default StatsSection;
