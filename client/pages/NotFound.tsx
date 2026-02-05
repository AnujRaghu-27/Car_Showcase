import Layout from "@/components/Layout";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
          <p className="text-2xl font-semibold text-foreground mb-3">
            Page Not Found
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. It might have been
            moved or this feature is coming soon.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
