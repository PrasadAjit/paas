import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Code, Cpu, Database, Shield, Cloud, Network, Cog, Server, Lock, Layers } from 'lucide-react';

const gampSolutions = [
  { id: 'software-validation', title: 'Software Validation', icon: Shield, description: 'GxP software validation services' },
  { id: 'csv-solutions', title: 'CSV Solutions', icon: Database, description: 'Computer System Validation' },
  { id: 'data-integrity', title: 'Data Integrity', icon: Lock, description: 'Ensuring data compliance' },
  { id: 'cloud-validation', title: 'Cloud Validation', icon: Cloud, description: 'Cloud infrastructure validation' },
  { id: 'network-validation', title: 'Network Validation', icon: Network, description: 'Network system validation' },
  { id: 'system-integration', title: 'System Integration', icon: Layers, description: 'Integration testing services' },
  { id: 'quality-assurance', title: 'Quality Assurance', icon: Cog, description: 'QA & Testing services' },
  { id: 'automation-testing', title: 'Automation Testing', icon: Cpu, description: 'Automated testing solutions' },
  { id: 'infrastructure-validation', title: 'Infrastructure Validation', icon: Server, description: 'IT infrastructure validation' },
  { id: 'custom-development', title: 'Custom Development', icon: Code, description: 'Bespoke GAMP solutions' }
];

export default function Header() {
  const [showGampDropdown, setShowGampDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Genesys Quantis</h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>

            <div
              className="relative"
              onMouseEnter={() => setShowGampDropdown(true)}
              onMouseLeave={() => setShowGampDropdown(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                GAMP Solutions
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {showGampDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-2xl border border-gray-200 p-6">
                  <div className="grid grid-cols-5 gap-3">
                    {gampSolutions.map((solution) => {
                      const Icon = solution.icon;

                      return (
                        <Link
                          key={solution.id}
                          to={`/gamp/${solution.id}`}
                          className="col-span-1"
                        >
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 cursor-pointer hover:shadow-lg hover:scale-110 transition-all duration-300 h-full flex flex-col justify-start">
                            <Icon className="w-8 h-8 text-blue-600 mb-2" />
                            <h3 className="font-semibold text-sm text-gray-800">{solution.title}</h3>
                            <p className="text-gray-500 text-xs mt-1">{solution.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
