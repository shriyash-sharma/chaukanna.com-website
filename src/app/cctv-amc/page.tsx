import { Metadata } from 'next';
import { CheckCircle, Shield, Clock, Wrench, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CCTV AMC Services in Pune - Annual Maintenance Contract',
  description: 'Professional CCTV AMC services in Pune. Regular maintenance, repairs, software updates, and 24/7 support for your CCTV systems. Starting from ₹3,000/year.',
  keywords: 'CCTV AMC Pune, CCTV maintenance, annual maintenance contract, CCTV repair, system health check, 24/7 support',
  openGraph: {
    title: 'CCTV AMC Services in Pune - Annual Maintenance Contract',
    description: 'Professional CCTV AMC services in Pune. Regular maintenance, repairs, software updates, and 24/7 support for your CCTV systems.',
  },
};

export default function CCTVAMCPage() {
  const amcFeatures = [
    'Regular System Health Checks',
    'Camera Cleaning & Calibration',
    'Software Updates & Patches',
    '24/7 Emergency Support',
    'Replacement of Faulty Parts',
    'DVR/NVR Maintenance',
    'Cable & Connection Checks',
    'Mobile App Configuration',
    'Cloud Storage Management',
    'Performance Optimization'
  ];

  const amcPlans = [
    {
      name: 'Basic AMC',
      price: '₹3,000/year',
      features: [
        'Quarterly Health Checks',
        'Basic Cleaning',
        'Software Updates',
        'Email Support',
        '9 AM - 6 PM Support'
      ]
    },
    {
      name: 'Standard AMC',
      price: '₹5,000/year',
      features: [
        'Monthly Health Checks',
        'Deep Cleaning & Calibration',
        'Software Updates',
        'Phone & Email Support',
        '24/7 Emergency Support',
        'Part Replacement (Basic)'
      ]
    },
    {
      name: 'Premium AMC',
      price: '₹8,000/year',
      features: [
        'Bi-weekly Health Checks',
        'Professional Cleaning',
        'Latest Software Updates',
        'Priority Support',
        '24/7 Emergency Support',
        'Free Part Replacement',
        'Performance Optimization',
        'Cloud Storage Management'
      ]
    }
  ];

  const maintenanceSchedule = [
    { period: 'Daily', tasks: ['System Status Check', 'Camera Functionality Test', 'Recording Verification'] },
    { period: 'Weekly', tasks: ['Camera Cleaning', 'Storage Space Check', 'Network Connectivity Test'] },
    { period: 'Monthly', tasks: ['Deep System Analysis', 'Software Updates', 'Performance Optimization'] },
    { period: 'Quarterly', tasks: ['Complete System Health Check', 'Cable Inspection', 'Hardware Calibration'] },
    { period: 'Annually', tasks: ['Full System Overhaul', 'Component Replacement', 'Security Audit'] }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                CCTV <span className="text-orange-600">AMC Services</span> in Pune
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Keep your CCTV system running smoothly with our comprehensive Annual Maintenance Contract. 
                Regular maintenance, repairs, and 24/7 support to ensure optimal performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918888696046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-semibold text-lg"
                >
                  Get AMC Quote
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AMC Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Preventive Maintenance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Cost Savings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Extended System Life</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">24/7 Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Free Repairs</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included in Our AMC?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance services to keep your CCTV system in perfect condition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amcFeatures.map((feature, index) => (
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

      {/* AMC Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your AMC Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect maintenance plan for your CCTV system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amcPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${index === 1 ? 'border-2 border-orange-600 relative' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-orange-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Schedule Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Maintenance Schedule</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular maintenance ensures optimal performance and longevity of your CCTV system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {maintenanceSchedule.map((schedule, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {schedule.period.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{schedule.period}</h3>
                <ul className="space-y-2">
                  {schedule.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-sm text-gray-600">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AMC Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our AMC?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Preventive Maintenance</h3>
                    <p className="text-gray-600">
                      Regular maintenance prevents major breakdowns and extends the life of your CCTV system.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">
                      Round-the-clock technical support ensures your security system is always operational.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
                    <p className="text-gray-600">
                      AMC saves money compared to individual repairs and ensures predictable costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AMC vs One-Time Repair</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold text-gray-900">AMC (Annual)</span>
                  <span className="text-green-600 font-bold">₹5,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-semibold text-gray-900">Individual Repairs</span>
                  <span className="text-red-600 font-bold">₹15,000+</span>
                </div>
                <div className="text-center text-gray-600">
                  <p className="font-semibold">Save up to 70% with AMC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get a free system health check and AMC quote. Our experts will assess your CCTV system and recommend the best maintenance plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918888696046"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get Free Health Check
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
