import { Menu, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';
// import Logo from 'src/Assets/Nexa_Vision_Logo-removebg-preview.png'; // Import your logo
import Logo from '../Assets/Nexa_Vision_Logo-removebg-preview.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Navbar height increased to h-20 */}
          <div className="flex items-center">
            {/* Logo Section with doubled size */}
            <img
              src={Logo} // Use the imported logo variable here
              alt="NEXA VISION Logo"
              className="h-24 w-auto ml-2" // Doubled logo size to h-24
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 flex items-center gap-2">
                Get Started <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 flex items-center gap-2 justify-center">
              Get Started <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
