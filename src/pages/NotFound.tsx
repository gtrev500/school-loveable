import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-6 max-w-md">
        <div className="w-24 h-24 rounded-full bg-calm-100 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl text-calm-700">404</span>
        </div>
        <h1 className="text-2xl font-bold mb-2">Page not found</h1>
        <p className="text-muted-foreground mb-6">
          Sorry, we couldn't find the page you're looking for. Let's get you back to a safe space.
        </p>
        <Button asChild className="bg-calm-500 hover:bg-calm-600">
          <Link to="/community">Return to Community</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
