import { Star, TrendingUp } from "lucide-react";

const featuredCars = [
  {
    id: 1,
    name: "Ferrari SF90 Stradale",
    brand: "Ferrari",
    year: 2024,
    price: "$500,000",
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    specs: ["762 HP", "0-60 in 2.5s", "Hybrid Electric"],
    emoji: "🔴",
  },
  {
    id: 2,
    name: "Lamborghini Revuelto",
    brand: "Lamborghini",
    year: 2024,
    price: "$576,000",
    rating: 4.8,
    reviews: 95,
    badge: "Top Rated",
    specs: ["1001 HP", "0-60 in 2.5s", "Hybrid"],
    emoji: "🟡",
  },
  {
    id: 3,
    name: "Porsche 911 Turbo",
    brand: "Porsche",
    year: 2024,
    price: "$210,000",
    rating: 4.9,
    reviews: 216,
    badge: "Popular",
    specs: ["640 HP", "0-60 in 2.7s", "Twin-Turbo"],
    emoji: "⚪",
  },
  {
    id: 4,
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    year: 2024,
    price: "$108,000",
    rating: 4.7,
    reviews: 342,
    badge: "New",
    specs: ["1020 HP", "0-60 in 1.99s", "All-Electric"],
    emoji: "🔵",
  },
  {
    id: 5,
    name: "McLaren 720S",
    brand: "McLaren",
    year: 2024,
    price: "$315,000",
    rating: 4.8,
    reviews: 156,
    badge: "Exclusive",
    specs: ["710 HP", "0-60 in 2.8s", "Twin-Turbo"],
    emoji: "🟠",
  },
  {
    id: 6,
    name: "BMW M760 xDrive",
    brand: "BMW",
    year: 2024,
    price: "$156,000",
    rating: 4.6,
    reviews: 189,
    badge: "Luxury",
    specs: ["625 HP", "0-60 in 3.0s", "V12 Hybrid"],
    emoji: "⚫",
  },
];

export default function FamousCarsSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-start mb-12 flex-col md:flex-row gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Cars & Brands
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our most popular luxury and performance vehicles from
              world-renowned manufacturers
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
            <TrendingUp size={18} />
            View All Brands
          </button>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="group cursor-pointer bg-background border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {car.emoji}
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {car.badge}
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-background/80 backdrop-blur px-3 py-1 rounded-full">
                  <Star size={14} className="text-accent fill-accent" />
                  <span className="text-sm font-semibold text-foreground">
                    {car.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {car.brand}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mt-1">
                    {car.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {car.year} Model
                  </p>
                </div>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {car.specs.map((spec, index) => (
                    <span
                      key={index}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting at</p>
                    <p className="text-xl font-bold text-foreground">
                      {car.price}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
