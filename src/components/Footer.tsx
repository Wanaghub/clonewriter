import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">About</h3>
            <p className="text-gray-600 text-sm">
              Clone the writing style of top business writers and create unique content.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary-600 text-sm">Home</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-primary-600 text-sm">Pricing</Link></li>
              <li><Link to="/writers" className="text-gray-600 hover:text-primary-600 text-sm">Writers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-600 hover:text-primary-600 text-sm">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary-600 text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary-600 text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary-600 text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} CloneWriter. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;