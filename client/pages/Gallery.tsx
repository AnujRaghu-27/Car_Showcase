import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Gallery() {
  return (
    <Layout>
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Car Gallery
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Stunning photography of our most exclusive vehicles
          </p>

          <div className="bg-card border border-border rounded-lg p-12">
            <p className="text-6xl mb-4">📸</p>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Gallery Coming Soon
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We're curating a beautiful gallery of high-resolution images of
              our luxury and sports cars. Check back soon for stunning visuals.
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

          {/* Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {[
              { emoji: "🔴", label: "Ferrari Collection" },
              { emoji: "🟡", label: "Lamborghini Fleet" },
              { emoji: "⚪", label: "Porsche Lineup" },
              { emoji: "🔵", label: "Tesla Models" },
              { emoji: "🟠", label: "McLaren Series" },
              { emoji: "⚫", label: "BMW M Collection" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <p className="text-5xl mb-3">{item.emoji}</p>
                <p className="text-sm font-semibold text-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
