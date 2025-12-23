import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Play } from 'lucide-react';

const solutionData = {
  sourceai: {
    title: 'SourceAI',
    subtitle: 'Autocoding Platform',
    gradient: 'from-blue-600 to-cyan-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'SourceAI is a revolutionary autocoding platform that leverages advanced AI models to generate high-quality code across multiple programming languages. Our platform understands context, follows best practices, and accelerates your development workflow.',
    features: [
      'AI-powered code generation with context awareness',
      'Support for 50+ programming languages',
      'Real-time code suggestions and completions',
      'Integration with popular IDEs',
      'Code refactoring and optimization',
      'Automated documentation generation',
      'Security vulnerability detection',
      'Custom model training for your codebase'
    ],
    useCases: [
      'Rapid prototyping and MVP development',
      'Legacy code modernization',
      'API endpoint generation',
      'Database query optimization',
      'Unit test creation'
    ]
  },
  mockai: {
    title: 'MockAI',
    subtitle: 'HR Solution',
    gradient: 'from-emerald-600 to-teal-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'MockAI transforms the hiring process with AI-driven mock interviews and comprehensive candidate assessment. Our platform provides realistic interview simulations and deep analytical insights to help you identify the best talent.',
    features: [
      'AI-powered mock interview simulations',
      'Real-time candidate evaluation',
      'Multi-level competency assessment',
      'Behavioral analysis and insights',
      'Custom interview question generation',
      'Video interview recording and analysis',
      'Comprehensive performance reports',
      'Integration with ATS systems'
    ],
    useCases: [
      'Technical interview screening',
      'Soft skills assessment',
      'Leadership evaluation',
      'Remote hiring processes',
      'Employee training and development'
    ]
  },
  'linkedin-automation': {
    title: 'LinkedIn Automation',
    subtitle: 'Professional Networking',
    gradient: 'from-blue-700 to-blue-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'Supercharge your LinkedIn networking with intelligent automation. Our platform helps you build meaningful professional connections, engage with your network, and generate leads while maintaining authenticity.',
    features: [
      'Automated connection requests with personalization',
      'Smart message sequencing and follow-ups',
      'Profile visitor tracking and engagement',
      'Content scheduling and posting automation',
      'Lead generation and CRM integration',
      'Analytics and performance tracking',
      'A/B testing for outreach campaigns',
      'Safe automation with rate limiting'
    ],
    useCases: [
      'B2B lead generation',
      'Recruitment and talent sourcing',
      'Brand awareness campaigns',
      'Partnership development',
      'Investor outreach'
    ]
  },
  intelliflow: {
    title: 'IntelliFlow',
    subtitle: 'Workflow Automation',
    gradient: 'from-purple-600 to-pink-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'IntelliFlow streamlines your business processes with intelligent workflow automation. Design, deploy, and optimize complex workflows with our intuitive platform that connects all your business tools.',
    features: [
      'Visual workflow designer with drag-and-drop',
      'Pre-built templates for common processes',
      'Integration with 500+ business applications',
      'Real-time process monitoring and analytics',
      'Conditional logic and branching',
      'Error handling and retry mechanisms',
      'Role-based access control',
      'API access for custom integrations'
    ],
    useCases: [
      'Customer onboarding automation',
      'Invoice processing and approval',
      'IT service request management',
      'Marketing campaign orchestration',
      'Employee offboarding workflows'
    ]
  },
  cognibot: {
    title: 'CogniBot',
    subtitle: 'AI Assistant',
    gradient: 'from-orange-600 to-red-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'CogniBot is an advanced AI assistant designed for enterprise environments. Provide 24/7 customer support, automate internal processes, and enhance productivity with natural language understanding.',
    features: [
      'Natural language processing and understanding',
      'Multi-channel support (web, mobile, messaging)',
      'Custom knowledge base training',
      'Sentiment analysis and emotion detection',
      'Seamless human handoff',
      'Multi-language support',
      'Analytics and conversation insights',
      'Enterprise-grade security and compliance'
    ],
    useCases: [
      'Customer support automation',
      'Internal IT helpdesk',
      'Sales qualification and lead routing',
      'Employee onboarding assistance',
      'FAQ and knowledge management'
    ]
  }
};

export default function SolutionDetail() {
  const { id } = useParams<{ id: string }>();
  const solution = id ? solutionData[id as keyof typeof solutionData] : null;

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Solution Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`bg-gradient-to-r ${solution.gradient} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white hover:text-blue-100 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">{solution.title}</h1>
          <p className="text-2xl text-white text-opacity-90">{solution.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Watch Demo</h2>
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${solution.videoId}`}
                  title={`${solution.title} Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <Check className={`w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases</h2>
              <div className="space-y-3">
                {solution.useCases.map((useCase, idx) => (
                  <div key={idx} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient} mr-4`}></div>
                    <span className="text-gray-700 font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Transform your business with {solution.title}. Request a demo or start your free trial.
              </p>

              <div className="space-y-4">
                <button className={`w-full bg-gradient-to-r ${solution.gradient} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center`}>
                  <Play className="w-5 h-5 mr-2" />
                  Request Demo
                </button>
                <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Contact Sales
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Quick Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deployment</span>
                    <span className="font-medium text-gray-900">Cloud & On-premise</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Support</span>
                    <span className="font-medium text-gray-900">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Integration</span>
                    <span className="font-medium text-gray-900">API Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Setup Time</span>
                    <span className="font-medium text-gray-900">Under 1 hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={`bg-gradient-to-r ${solution.gradient} py-16 mt-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white text-opacity-90 mb-8 text-lg">
            Join thousands of companies already using {solution.title}
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
