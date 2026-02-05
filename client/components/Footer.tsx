import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">C</span>
              </div>
              <span className="font-bold text-lg">CarShow</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Showcasing the finest luxury and sports cars for enthusiasts and
              dealerships worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a
                  href="mailto:info@carshow.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@carshow.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a
                  href="tel:+1234567890"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Motor City, CA 90001
                </span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-accent/10 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Ready to Find Your Dream Car?</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Get personalized assistance from our experts today.
            </p>
            <button className="w-full px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm">
              Schedule a Tour
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex justify-between items-center flex-col md:flex-row gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 CarShow. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
