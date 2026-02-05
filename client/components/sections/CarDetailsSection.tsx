import { CheckCircle, Zap, Gauge, Wind } from "lucide-react";

const carDetails = [
  {
    title: "Performance",
    description: "Experience unmatched power and precision engineering",
    icon: Gauge,
    features: [
      "0-60 mph acceleration records",
      "Top speeds exceeding 200 mph",
      "Advanced aerodynamics",
      "Precision handling systems",
    ],
  },
  {
    title: "Technology",
    description: "Stay connected with cutting-edge digital systems",
    icon: Zap,
    features: [
      "AI-powered infotainment",
      "Autonomous driving capabilities",
      "Real-time performance analytics",
      "Smartphone integration",
    ],
  },
  {
    title: "Sustainability",
    description: "Luxury that respects the environment",
    icon: Wind,
    features: [
      "Hybrid and electric options",
      "Reduced carbon footprint",
      "Sustainable materials",
      "Future-ready engineering",
    ],
  },
];

export default function CarDetailsSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Our Cars?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the features and qualities that make our collection
            exceptional
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {carDetails.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <div
                key={index}
                className="rounded-lg border border-border bg-background p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {detail.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {detail.description}
                </p>
                <ul className="space-y-3">
                  {detail.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-accent mt-0.5 flex-shrink-0"
                      />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="text-primary-foreground">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Find Your Perfect Car?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Our expert consultants are ready to help you find the vehicle
                that matches your lifestyle and preferences. Schedule a
                personalized consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Schedule Consultation
                </button>
                <button className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-br from-accent/30 to-transparent rounded-lg flex items-center justify-center">
              <p className="text-6xl">📞</p>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="py-6">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
              25+
            </p>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="py-6">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
              1500+
            </p>
            <p className="text-muted-foreground">Cars Delivered</p>
          </div>
          <div className="py-6">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
              24/7
            </p>
            <p className="text-muted-foreground">Customer Support</p>
          </div>
          <div className="py-6">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
              100%
            </p>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
