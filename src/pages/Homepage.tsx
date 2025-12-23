import { Link } from 'react-router-dom';
import { Code, Users, Linkedin, Brain, Workflow } from 'lucide-react';

const mainSolutions = [
  {
    id: 'sourceai',
    title: 'SourceAI',
    subtitle: 'Autocoding Platform',
    icon: Code,
    description: 'Revolutionary AI-powered autocoding platform that transforms your development workflow with intelligent code generation.',
    gradient: 'from-blue-600 to-cyan-500',
    benefits: ['AI Code Generation', 'Multi-language Support', 'Real-time Suggestions']
  },
  {
    id: 'mockai',
    title: 'MockAI',
    subtitle: 'HR Solution',
    icon: Users,
    description: 'Transform your hiring process with AI-driven mock interviews and candidate assessment solutions.',
    gradient: 'from-emerald-600 to-teal-500',
    benefits: ['AI Interviews', 'Candidate Analysis', 'Performance Metrics']
  },
  {
    id: 'linkedin-automation',
    title: 'LinkedIn Automation',
    subtitle: 'Professional Networking',
    icon: Linkedin,
    description: 'Automate your LinkedIn outreach and networking with intelligent engagement tools.',
    gradient: 'from-blue-700 to-blue-500',
    benefits: ['Auto Connections', 'Message Templates', 'Analytics Dashboard']
  },
  {
    id: 'intelliflow',
    title: 'IntelliFlow',
    subtitle: 'Workflow Automation',
    icon: Workflow,
    description: 'Streamline your business processes with intelligent workflow automation and orchestration.',
    gradient: 'from-purple-600 to-pink-500',
    benefits: ['Process Automation', 'Integration Hub', 'Smart Routing']
  },
  {
    id: 'cognibot',
    title: 'CogniBot',
    subtitle: 'AI Assistant',
    icon: Brain,
    description: 'Advanced AI assistant for enterprise solutions, customer support, and intelligent automation.',
    gradient: 'from-orange-600 to-red-500',
    benefits: ['24/7 Support', 'Natural Language', 'Custom Training']
  }
];

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMThoMnYxMnptMCAxMmgtMlYzMGgydjEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Empowering Innovation Through
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-200">
              AI-Driven Solutions
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI technologies designed for the modern enterprise
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
            Explore Our Solutions
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Featured Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover powerful tools designed to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainSolutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <Link
                key={solution.id}
                to={`/solution/${solution.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${solution.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <Icon className="w-16 h-16 text-white mb-4 relative z-10 transform group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-white relative z-10">{solution.title}</h3>
                  <p className="text-white text-opacity-90 text-sm relative z-10">{solution.subtitle}</p>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient} mr-2`}></div>
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-8 text-lg">Get started with our AI-powered solutions today</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
