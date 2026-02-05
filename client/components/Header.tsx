import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              CarShow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Categories
            </Link>
            <Link
              to="/gallery"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-foreground hover:text-accent transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="text-foreground hover:text-accent transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/gallery"
              className="text-foreground hover:text-accent transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-accent transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-left">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
