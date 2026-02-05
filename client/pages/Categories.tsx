import Layout from "@/components/Layout";
import { Zap, Gauge, Leaf, Shield } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Sports Cars",
    description: "High-performance machines built for speed and precision",
    icon: Gauge,
    image: "https://images.pexels.com/photos/30735110/pexels-photo-30735110.jpeg",
    count: 45,
  },
  {
    id: 2,
    name: "Electric Vehicles",
    description: "Eco-friendly luxury with cutting-edge technology",
    icon: Zap,
    image: "https://images.pexels.com/photos/27243718/pexels-photo-27243718.jpeg",
    count: 38,
  },
  {
    id: 3,
    name: "SUVs & Crossovers",
    description: "Spacious comfort with commanding presence",
    icon: Shield,
    image: "https://images.pexels.com/photos/18311311/pexels-photo-18311311.jpeg",
    count: 52,
  },
  {
    id: 4,
    name: "Luxury Sedans",
    description: "Ultimate sophistication and refinement",
    icon: Leaf,
    image: "https://images.pexels.com/photos/31040150/pexels-photo-31040150.jpeg",
    count: 41,
  },
];

export default function Categories() {
  return (
    <Layout>
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Browse Our Categories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your perfect vehicle from our diverse collection of luxury and
              performance cars
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="h-40 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <IconComponent
                          size={20}
                          className="text-accent"
                        />
                      </div>
                      <h3 className="font-bold text-lg text-foreground">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {category.count} vehicles
                      </span>
                      <span className="text-accent font-semibold group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
