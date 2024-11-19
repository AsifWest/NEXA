import { BarChart3, FileSpreadsheet, PieChart, Brain, Globe2, Languages } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Research Design',
    description: 'Expert consultation in research methodology, sampling, and questionnaire design for optimal insights.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <FileSpreadsheet className="h-6 w-6" />,
    title: 'Data Collection',
    description: 'Comprehensive data gathering through surveys, interviews, and market observation techniques.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: 'Data Coding & Charting',
    description: 'Transform raw data into meaningful visualizations and coded datasets for analysis.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Data Processing & Analysis',
    description: 'Advanced statistical analysis and interpretation using cutting-edge AI technologies.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: 'Survey Programming & Hosting',
    description: 'Custom survey solutions with secure hosting and real-time data collection capabilities.',
    image: 'https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Languages className="h-6 w-6" />,
    title: 'Translation & Transcription',
    description: 'Professional translation and transcription services for global market research projects.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl animate-fade-in">
            Comprehensive Market Research Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600 animate-slide-up">
            End-to-end research capabilities to drive your business decisions
          </p>
        </div>

        <div ref={ref} className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative p-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}