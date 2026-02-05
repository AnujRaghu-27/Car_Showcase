import Layout from "@/components/Layout";

const galleryImages = [
  {
    id: 1,
    title: "Red Ferrari Testarossa",
    image: "https://images.pexels.com/photos/5495047/pexels-photo-5495047.jpeg",
    category: "Ferrari Collection",
  },
  {
    id: 2,
    title: "Blue Luxury Sedan",
    image: "https://images.pexels.com/photos/452099/pexels-photo-452099.jpeg",
    category: "Sedans",
  },
  {
    id: 3,
    title: "Aston Martin Sports Car",
    image: "https://images.pexels.com/photos/28536334/pexels-photo-28536334.jpeg",
    category: "Sports Cars",
  },
  {
    id: 4,
    title: "Silver Supercar",
    image: "https://images.pexels.com/photos/6561129/pexels-photo-6561129.jpeg",
    category: "Performance",
  },
  {
    id: 5,
    title: "White Range Rover",
    image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
    category: "SUVs",
  },
  {
    id: 6,
    title: "Green Lamborghini Huracan",
    image: "https://images.pexels.com/photos/7707030/pexels-photo-7707030.jpeg",
    category: "Lamborghini Fleet",
  },
];

export default function Gallery() {
  return (
    <Layout>
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Car Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stunning photography of our most exclusive vehicles
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Image Info */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Info */}
          <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Explore More
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Browse through our extensive collection of luxury and performance
              vehicles. Each image showcases the craftsmanship and engineering
              excellence of our featured cars.
            </p>
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
              View Full Gallery
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
