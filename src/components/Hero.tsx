import { ArrowRight, LineChart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="relative z-10 pt-14 lg:pt-20 pb-8 sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fade-in">
                <span className="block xl:inline">Transform Your</span>{' '}
                <span className="block text-indigo-600 xl:inline">Market Research</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-slide-up delay-200">
                Unlock powerful insights with our advanced analytics platform. Make data-driven decisions that drive growth and innovation through comprehensive market research solutions.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-slide-up delay-300">
              <div className="rounded-md shadow">
      <Link
        to="/signup" // Navigate to the Signup page
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105"
      >
        Get started
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#features"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105"
                  >
                    Learn more
                    <LineChart className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <button
              onClick={scrollToFeatures}
              className="animate-bounce bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronDown className="h-6 w-6 text-indigo-600" />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 animate-fade-in delay-500">
        <div className="h-56 w-full relative sm:h-72 md:h-96 lg:w-full lg:h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10"></div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2015&q=80"
            alt="Analytics Dashboard"
          />
        </div>
      </div>
    </div>
  );
}