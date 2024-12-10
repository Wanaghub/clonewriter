import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              CloneWriter
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-600 hover:text-primary-600">
                Home
              </Link>
              <Link to="/writers" className="text-gray-600 hover:text-primary-600">
                Writers
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-primary-600">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;