import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Shield, Camera, Smartphone, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CCTV Installation Services in Pune - Professional Camera Setup',
  description: 'Professional CCTV camera installation services in Pune. HD & 4K cameras, night vision, remote monitoring, mobile app integration. Free consultation & quote.',
  keywords: 'CCTV installation Pune, security cameras, HD cameras, 4K CCTV, night vision cameras, remote monitoring, mobile app CCTV',
  openGraph: {
    title: 'CCTV Installation Services in Pune - Professional Camera Setup',
    description: 'Professional CCTV camera installation services in Pune. HD & 4K cameras, night vision, remote monitoring, mobile app integration.',
  },
};

export default function CCTVInstallationPage() {
  const features = [
    'HD & 4K Camera Installation',
    'Night Vision & Weatherproof Cameras',
    'Remote Monitoring Setup',
    'Mobile App Integration',
    '24/7 Technical Support',
    'Professional Installation',
    'Cable Management',
    'DVR/NVR Setup',
    'Motion Detection',
    'Cloud Storage Options'
  ];

  const cameraTypes = [
    {
      name: 'Dome Cameras',
      description: 'Perfect for indoor and outdoor surveillance with 360-degree coverage',
      features: ['Weatherproof', 'Vandal Resistant', 'Night Vision', 'HD Quality']
    },
    {
      name: 'Bullet Cameras',
      description: 'Ideal for long-range monitoring and outdoor installations',
      features: ['Long Range', 'Weatherproof', 'Infrared Night Vision', 'Easy Installation']
    },
    {
      name: 'PTZ Cameras',
      description: 'Pan, tilt, and zoom functionality for comprehensive coverage',
      features: ['Remote Control', '360° Coverage', 'Auto Tracking', 'High Resolution']
    },
    {
      name: 'Wireless Cameras',
      description: 'Easy installation without cables, perfect for existing buildings',
      features: ['No Cables', 'Easy Installation', 'WiFi Connectivity', 'Battery Powered']
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Site Survey',
      description: 'We visit your property to assess the best camera positions and coverage areas.'
    },
    {
      step: 2,
      title: 'System Design',
      description: 'Create a customized CCTV system design based on your security requirements.'
    },
    {
      step: 3,
      title: 'Installation',
      description: 'Professional installation of cameras, DVR/NVR, and all necessary equipment.'
    },
    {
      step: 4,
      title: 'Configuration',
      description: 'Setup remote monitoring, mobile app access, and configure all settings.'
    },
    {
      step: 5,
      title: 'Testing & Training',
      description: 'Test the system thoroughly and provide training on how to use it.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional <span className="text-orange-600">CCTV Installation</span> Services in Pune
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Secure your property with our professional CCTV installation services. We provide HD & 4K cameras, 
                night vision, remote monitoring, and mobile app integration for complete peace of mind.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Quote Request</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Property Type</option>
                  <option>Home</option>
                  <option>Office</option>
                  <option>Shop</option>
                  <option>Warehouse</option>
                  <option>Other</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our CCTV Installation?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive CCTV solutions with professional installation and ongoing support
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

      {/* Camera Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of CCTV Cameras</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of CCTV cameras to suit different surveillance needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cameraTypes.map((camera, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{camera.name}</h3>
                <p className="text-gray-600 mb-4">{camera.description}</p>
                <ul className="space-y-2">
                  {camera.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure perfect CCTV installation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">CCTV Installation Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect CCTV package for your security needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Package</h3>
              <div className="text-3xl font-bold text-orange-600 mb-6">₹15,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  2 HD Cameras
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  1TB DVR
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Mobile App
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Installation
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                Get Quote
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Package</h3>
              <div className="text-3xl font-bold text-orange-600 mb-6">₹35,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  4 HD Cameras
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  2TB DVR
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Night Vision
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Mobile App
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Installation
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                Get Quote
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Package</h3>
              <div className="text-3xl font-bold text-orange-600 mb-6">₹65,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  8 HD Cameras
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  4TB NVR
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  4K Resolution
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  PTZ Camera
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Cloud Storage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Installation
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get a free site survey and quote for your CCTV installation. Our experts will help you choose the perfect security solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918888696046"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get Free Quote
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
