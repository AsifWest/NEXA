export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              {/* <LineChart className="h-8 w-8 text-indigo-500" /> */}
              <span className="ml-2 text-xl font-bold text-white">NEXA VISION</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transforming market research through advanced analytics and AI-powered insights.
              Make better decisions with data-driven strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-indigo-500">Features</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-indigo-500">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-indigo-500">Contact</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div> */}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} NEXA VISION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}