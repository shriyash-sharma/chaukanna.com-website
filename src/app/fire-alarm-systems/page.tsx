import { Metadata } from 'next';
import { CheckCircle, Flame, Shield, AlertTriangle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fire Alarm Systems Installation in Pune - Professional Fire Safety Solutions',
  description: 'Professional fire alarm system installation in Pune. Smoke detectors, heat sensors, manual call points, and emergency lighting. Compliance with fire safety standards.',
  keywords: 'fire alarm systems Pune, fire safety installation, smoke detectors, heat sensors, emergency lighting, fire compliance',
  openGraph: {
    title: 'Fire Alarm Systems Installation in Pune - Professional Fire Safety Solutions',
    description: 'Professional fire alarm system installation in Pune. Smoke detectors, heat sensors, manual call points, and emergency lighting.',
  },
};

export default function FireAlarmSystemsPage() {
  const features = [
    'Smoke & Heat Detectors',
    'Manual Call Points',
    'Control Panel Integration',
    'Audible & Visual Alarms',
    'Emergency Lighting',
    'Fire Safety Compliance',
    '24/7 Monitoring',
    'Battery Backup',
    'Zone-wise Detection',
    'Remote Monitoring'
  ];

  const systemTypes = [
    {
      name: 'Conventional Fire Alarm',
      description: 'Basic fire detection system with zone-based monitoring',
      features: ['Zone-based Detection', 'Manual Call Points', 'Audible Alarms', 'LED Indicators'],
      price: 'Starting from ₹25,000',
      bestFor: 'Small offices, shops, residential buildings'
    },
    {
      name: 'Addressable Fire Alarm',
      description: 'Advanced system with individual device identification',
      features: ['Individual Device ID', 'LCD Display', 'Event Logging', 'Network Integration'],
      price: 'Starting from ₹50,000',
      bestFor: 'Medium offices, commercial buildings'
    },
    {
      name: 'Wireless Fire Alarm',
      description: 'Easy installation without cables',
      features: ['No Cables Required', 'Easy Installation', 'Battery Powered', 'Quick Setup'],
      price: 'Starting from ₹35,000',
      bestFor: 'Existing buildings, temporary setups'
    },
    {
      name: 'Aspirating Smoke Detection',
      description: 'Early warning system for sensitive environments',
      features: ['Early Detection', 'High Sensitivity', 'Air Sampling', 'Clean Room Compatible'],
      price: 'Starting from ₹75,000',
      bestFor: 'Data centers, clean rooms, server rooms'
    }
  ];

  const complianceRequirements = [
    'National Building Code (NBC) compliance',
    'Fire Service Department approval',
    'Insurance company requirements',
    'Occupancy certificate compliance',
    'Regular maintenance and testing',
    'Annual fire safety audit'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional <span className="text-orange-600">Fire Alarm Systems</span> in Pune
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Protect your property and lives with our comprehensive fire alarm systems. 
                We provide complete fire safety solutions including smoke detectors, heat sensors, 
                and emergency lighting for all types of buildings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918888696046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-semibold text-lg"
                >
                  Get Free Quote
                </a>
                <a
                  href="tel:+918888696046"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center font-semibold text-lg"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Fire Alarms are Essential</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Early Warning System</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Life Safety Protection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Property Protection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Legal Compliance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Insurance Benefits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fire Alarm System Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive fire detection and alarm features for complete safety
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Fire Alarm Systems</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right fire alarm system for your specific requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systemTypes.map((system, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Flame className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{system.name}</h3>
                <p className="text-gray-600 mb-6">{system.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {system.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-orange-600">{system.price}</span>
                </div>
                
                <div className="text-sm text-gray-500">
                  <strong>Best for:</strong> {system.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Fire Safety Compliance</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our fire alarm systems are designed to meet all local and national fire safety 
                regulations. We ensure your building complies with all necessary standards.
              </p>
              
              <div className="space-y-4">
                {complianceRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{requirement}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Response</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <span className="text-gray-700">24/7 Emergency Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-red-600" />
                  <span className="text-gray-700">Immediate Response Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-red-600" />
                  <span className="text-gray-700">Regular Maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                  <span className="text-gray-700">Compliance Certification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures perfect fire alarm system installation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: 1, title: 'Site Survey', description: 'Assess building layout and fire risks' },
              { step: 2, title: 'System Design', description: 'Create fire safety system design' },
              { step: 3, title: 'Installation', description: 'Professional installation of all components' },
              { step: 4, title: 'Testing', description: 'Comprehensive system testing and calibration' },
              { step: 5, title: 'Certification', description: 'Issue compliance certificates and documentation' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Protect Your Property Today
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Don't wait for a fire emergency. Get a free fire safety assessment and quote for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918888696046"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get Free Assessment
            </a>
            <a
              href="tel:+918888696046"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-semibold text-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
