import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes DOUBLEGRIP Technology unique?",
    answer: "DOUBLEGRIP Technology is our proprietary formulation that provides superior adhesion to metal surfaces, creating a protective layer that lasts twice as long as conventional lubricants. This results in reduced wear, better fuel efficiency, and extended engine life."
  },
  {
    question: "How can I become a distributor?",
    answer: "Becoming a Wieser Petroleum distributor is simple. Contact us through our website or call our business development team. We offer attractive margins, marketing support, and exclusive territory rights for qualified partners."
  },
  {
    question: "What products are suitable for my vehicle?",
    answer: "We offer a comprehensive range of lubricants for all vehicle types - from motorcycles and cars to heavy commercial vehicles. Our team can help you select the right product based on your vehicle specifications and usage patterns."
  },
  {
    question: "Do you export internationally?",
    answer: "Yes, we proudly export to 6+ countries across the Middle East, Africa, and Southeast Asia. Our products meet international quality standards and we have established distribution networks in these regions."
  },
  {
    question: "What is your minimum order quantity?",
    answer: "Minimum order quantities vary by product and distributor level. For retail partners, we offer flexible ordering options. For bulk orders and export inquiries, please contact our sales team for customized solutions."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Find answers to common questions about our products, partnership opportunities, and services. Can't find what you're looking for? Feel free to contact us.
            </p>

            {/* Contact CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our team is here to help you with any queries.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Contact Support →
              </a>
            </div>
          </div>

          {/* Right - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
