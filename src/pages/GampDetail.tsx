import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Shield, Database, Lock, Cloud, Network, Layers, Cog, Cpu, Server, Code } from 'lucide-react';

const gampData = {
  'software-validation': {
    title: 'Software Validation',
    icon: Shield,
    gradient: 'from-blue-600 to-blue-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'Comprehensive GxP software validation services that ensure your systems comply with regulatory requirements including 21 CFR Part 11, EU Annex 11, and ICH guidelines.',
    longDescription: 'Our software validation experts provide end-to-end validation services for pharmaceutical, medical device, and biotechnology companies. We help ensure your software systems meet the strictest regulatory standards while maintaining operational efficiency.',
    features: [
      'Risk assessment and validation planning',
      'Requirements traceability',
      'System design documentation',
      'Installation qualification (IQ)',
      'Operational qualification (OQ)',
      'Performance qualification (PQ)',
      'Change management protocols',
      'Compliance reporting'
    ],
    benefits: [
      'Regulatory compliance assurance',
      'Reduced validation timeline',
      'Lower risk of system failures',
      'Enhanced data integrity',
      'Expert guidance and support',
      'Comprehensive documentation'
    ]
  },
  'csv-solutions': {
    title: 'CSV Solutions',
    icon: Database,
    gradient: 'from-cyan-600 to-teal-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'Computer System Validation (CSV) services that validate your critical IT infrastructure against regulatory requirements and industry standards.',
    longDescription: 'We provide comprehensive CSV services covering all aspects of your computer systems, from legacy systems to modern cloud-based infrastructures. Our approach ensures your systems are validated, maintained, and continuously compliant.',
    features: [
      'System inventory and documentation',
      'Validation gap analysis',
      'Automated testing frameworks',
      'Performance monitoring',
      'Security validation',
      'Business continuity planning',
      'Audit trail implementation',
      'System decommissioning support'
    ],
    benefits: [
      'Complete system visibility',
      'Reduced operational risk',
      'Improved system reliability',
      'Faster problem resolution',
      'Compliance documentation ready',
      'Cost optimization'
    ]
  },
  'data-integrity': {
    title: 'Data Integrity',
    icon: Lock,
    gradient: 'from-emerald-600 to-green-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'Ensure your data remains secure, accurate, and compliant with our comprehensive data integrity solutions.',
    longDescription: 'Data integrity is critical in regulated industries. Our solutions help you implement, maintain, and audit data integrity controls across your entire organization, ensuring compliance with ALCOA and ALCOA+ principles.',
    features: [
      'ALCOA+ principle implementation',
      'Access control policies',
      'Audit trail configuration',
      'Backup and recovery procedures',
      'Data retention policies',
      'Electronic signature validation',
      'Database security hardening',
      'Compliance audits'
    ],
    benefits: [
      'Regulatory compliance',
      'Data accuracy guaranteed',
      'Enhanced security posture',
      'Audit readiness',
      'Risk mitigation',
      'Operational transparency'
    ]
  },
  'cloud-validation': {
    title: 'Cloud Validation',
    icon: Cloud,
    gradient: 'from-purple-600 to-pink-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'Validate your cloud infrastructure and applications to meet regulatory requirements in modern cloud environments.',
    longDescription: 'As more organizations migrate to cloud platforms, validation becomes increasingly important. We provide specialized validation services for AWS, Azure, Google Cloud, and on-premise hybrid solutions.',
    features: [
      'Cloud infrastructure assessment',
      'Multi-tenancy validation',
      'Data security in cloud',
      'Disaster recovery planning',
      'Compliance mapping',
      'Third-party risk assessment',
      'SLA validation',
      'Continuous monitoring setup'
    ],
    benefits: [
      'Cloud migration confidence',
      'Regulatory compliance in cloud',
      'Reduced cloud risks',
      'Optimized cloud costs',
      'Enhanced scalability',
      'Business continuity assurance'
    ]
  },
  'network-validation': {
    title: 'Network Validation',
    icon: Network,
    gradient: 'from-orange-600 to-yellow-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'Validate your network infrastructure to ensure reliability, security, and regulatory compliance.',
    longDescription: 'Network validation is essential for maintaining the integrity of your data systems and ensuring consistent system performance across your organization.',
    features: [
      'Network architecture review',
      'Firewall and security validation',
      'Data transmission security',
      'Network performance testing',
      'Redundancy assessment',
      'Disaster recovery testing',
      'Compliance mapping',
      'Documentation and standards'
    ],
    benefits: [
      'Network reliability',
      'Data security assurance',
      'Reduced downtime risk',
      'Performance optimization',
      'Regulatory compliance',
      'Enhanced visibility'
    ]
  },
  'system-integration': {
    title: 'System Integration',
    icon: Layers,
    gradient: 'from-red-600 to-rose-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'Seamlessly integrate multiple systems while maintaining validation status and regulatory compliance.',
    longDescription: 'System integration validation ensures that integrated systems maintain their individual validation status and meet all compliance requirements as a unified system.',
    features: [
      'Integration architecture design',
      'Interface validation',
      'Data mapping and translation',
      'Error handling procedures',
      'Performance testing',
      'Security assessment',
      'Testing protocols',
      'Production support'
    ],
    benefits: [
      'Seamless system connectivity',
      'Reduced integration risks',
      'Data consistency',
      'Improved efficiency',
      'Regulatory compliance',
      'Future scalability'
    ]
  },
  'quality-assurance': {
    title: 'Quality Assurance',
    icon: Cog,
    gradient: 'from-indigo-600 to-blue-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'Comprehensive QA and testing services to ensure your systems meet the highest quality standards.',
    longDescription: 'Our QA experts provide thorough testing and quality assurance services throughout the system lifecycle, from development through production support.',
    features: [
      'Test plan development',
      'Manual testing services',
      'Automated testing frameworks',
      'Regression testing',
      'Performance testing',
      'Load and stress testing',
      'User acceptance testing',
      'Defect tracking and reporting'
    ],
    benefits: [
      'High-quality systems',
      'Early defect detection',
      'Reduced support costs',
      'Improved user experience',
      'Faster time to market',
      'Reduced risks'
    ]
  },
  'automation-testing': {
    title: 'Automation Testing',
    icon: Cpu,
    gradient: 'from-green-600 to-emerald-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'Implement automated testing frameworks to improve efficiency and reduce manual testing efforts.',
    longDescription: 'Automated testing accelerates validation cycles while improving test coverage and consistency across your applications and systems.',
    features: [
      'Test automation strategy',
      'Framework implementation',
      'Test case automation',
      'Continuous integration setup',
      'Test data management',
      'Reporting and analytics',
      'Maintenance and updates',
      'Team training'
    ],
    benefits: [
      'Faster testing cycles',
      'Improved test coverage',
      'Consistent results',
      'Reduced manual effort',
      'Better ROI',
      'Continuous quality'
    ]
  },
  'infrastructure-validation': {
    title: 'Infrastructure Validation',
    icon: Server,
    gradient: 'from-slate-600 to-gray-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'Validate your entire IT infrastructure to ensure reliability, security, and regulatory compliance.',
    longDescription: 'Complete infrastructure validation covering servers, storage, networking, and virtualization to ensure your critical systems meet all requirements.',
    features: [
      'Infrastructure assessment',
      'Capacity planning',
      'Performance baseline',
      'Disaster recovery validation',
      'Business continuity testing',
      'Security hardening',
      'Documentation',
      'Ongoing monitoring'
    ],
    benefits: [
      'Infrastructure reliability',
      'Downtime prevention',
      'Resource optimization',
      'Security assurance',
      'Compliance readiness',
      'Cost efficiency'
    ]
  },
  'custom-development': {
    title: 'Custom Development',
    icon: Code,
    gradient: 'from-fuchsia-600 to-pink-500',
    videoId: 'dQw4w9WgXcQ',
    description: 'Develop custom solutions with built-in GAMP compliance from the ground up.',
    longDescription: 'We develop custom applications and solutions designed with validation and compliance as core requirements, not afterthoughts.',
    features: [
      'Requirements analysis',
      'System design',
      'Agile development',
      'Built-in validation',
      'Security by design',
      'Performance optimization',
      'Documentation',
      'Ongoing support'
    ],
    benefits: [
      'Tailored solutions',
      'Compliance from day one',
      'Reduced development risks',
      'Better fit for needs',
      'Faster deployment',
      'Lower total cost'
    ]
  }
};

export default function GampDetail() {
  const { id } = useParams<{ id: string }>();
  const solution = id ? gampData[id as keyof typeof gampData] : null;

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

  const Icon = solution.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`bg-gradient-to-r ${solution.gradient} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white hover:text-blue-100 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-start gap-4 mb-4">
            <Icon className="w-16 h-16 text-white flex-shrink-0" />
            <div>
              <h1 className="text-5xl font-bold text-white">{solution.title}</h1>
              <p className="text-xl text-white text-opacity-90 mt-2">GAMP Solution</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                {solution.description}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {solution.longDescription}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services Include</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <Check className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
              <div className="space-y-3">
                {solution.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient} mr-4`}></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Expert Support</h3>
              <p className="text-gray-600 mb-6">
                Our GAMP experts are ready to help your organization achieve and maintain regulatory compliance.
              </p>

              <div className="space-y-4">
                <button className={`w-full bg-gradient-to-r ${solution.gradient} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center`}>
                  Schedule Consultation
                </button>
                <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Request Proposal
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Why Choose Us</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>Industry experts with 20+ years experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>Proven track record with 500+ validations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>Full regulatory compliance assurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>End-to-end support and documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={`bg-gradient-to-r ${solution.gradient} py-16 mt-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Achieve Compliance?</h2>
          <p className="text-white text-opacity-90 mb-8 text-lg">
            Let our experts guide you through the validation process
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
