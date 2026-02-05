import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <Layout>
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Car Categories
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Browse our complete collection of luxury and performance vehicles
            organized by category
          </p>

          <div className="bg-card border border-border rounded-lg p-12 overflow-hidden">
            <div className="h-48 mb-6 rounded-lg overflow-hidden -mx-12 -mt-12">
              <img
                src="https://images.pexels.com/photos/31032661/pexels-photo-31032661.jpeg"
                alt="Sports car racing"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Categories Coming Soon
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We're working on a comprehensive showcase of all our vehicle
              categories. In the meantime, explore our featured cars on the home
              page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Back to Home
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Feature Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Sports Cars",
                description:
                  "High-performance machines for thrill seekers",
                emoji: "🏁",
              },
              {
                title: "Electric Vehicles",
                description: "Eco-friendly luxury with cutting-edge tech",
                emoji: "⚡",
              },
              {
                title: "Luxury Sedans",
                description: "Sophisticated comfort and refinement",
                emoji: "👑",
              },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="p-6 bg-background border border-border rounded-lg"
              >
                <p className="text-4xl mb-3">{cat.emoji}</p>
                <h3 className="font-bold text-foreground mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
