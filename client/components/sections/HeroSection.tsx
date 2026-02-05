import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/95">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="z-10 text-primary-foreground">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
              Luxury & Performance
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Experience the Ultimate
            <span className="text-accent"> Driving</span>
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-md">
            Discover our curated collection of luxury and sports cars. From
            cutting-edge electric vehicles to powerful supercars, find your
            perfect match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Explore Collection
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
              Schedule Test Drive
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
            <div>
              <p className="text-3xl font-bold text-accent">500+</p>
              <p className="text-primary-foreground/80 text-sm">Vehicles</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">50+</p>
              <p className="text-primary-foreground/80 text-sm">Brands</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">10K+</p>
              <p className="text-primary-foreground/80 text-sm">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Featured Car Image */}
        <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/35113540/pexels-photo-35113540.jpeg"
            alt="Ferrari SF90 Featured Car"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg" />
          <div className="absolute bottom-6 left-6 right-6 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/80">
              2024 Limited Edition
            </p>
            <p className="font-bold text-primary-foreground">Ferrari SF90</p>
            <p className="text-accent font-semibold">$500,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
