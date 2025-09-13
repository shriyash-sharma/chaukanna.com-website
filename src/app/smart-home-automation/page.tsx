import { Metadata } from 'next';
import { CheckCircle, Home, Smartphone, Wifi, Shield, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smart Home Automation in Pune - Complete Home Control Solutions',
  description: 'Transform your home with smart automation. Control lighting, security, climate, and appliances from anywhere. Professional smart home installation in Pune.',
  keywords: 'smart home automation Pune, home automation, smart lighting, smart security, IoT devices, home control',
  openGraph: {
    title: 'Smart Home Automation in Pune - Complete Home Control Solutions',
    description: 'Transform your home with smart automation. Control lighting, security, climate, and appliances from anywhere.',
  },
};

export default function SmartHomeAutomationPage() {
  const features = [
    'Smart Lighting Control',
    'Climate Management',
    'Security Integration',
    'Voice Control',
    'Mobile App Control',
    'Energy Management',
    'Scene Automation',
    'Remote Monitoring',
    'Scheduling & Timers',
    'Energy Efficiency'
  ];

  const automationCategories = [
    {
      icon: Lightbulb,
      title: 'Smart Lighting',
      description: 'Control lights with voice, app, or automation',
      features: ['Dimmer Controls', 'Color Changing', 'Motion Sensors', 'Scheduling'],
      price: 'Starting from ₹15,000'
    },
    {
      icon: Home,
      title: 'Climate Control',
      description: 'Smart thermostats and AC control',
      features: ['Temperature Control', 'Energy Saving', 'Zone Control', 'Scheduling'],
      price: 'Starting from ₹25,000'
    },
    {
      icon: Shield,
      title: 'Security Integration',
      description: 'Integrate with existing security systems',
      features: ['Door Locks', 'Cameras', 'Sensors', 'Alarms'],
      price: 'Starting from ₹30,000'
    },
    {
      icon: Smartphone,
      title: 'App Control',
      description: 'Control everything from your smartphone',
      features: ['Mobile App', 'Remote Access', 'Notifications', 'Scenes'],
      price: 'Included'
    }
  ];

  const smartDevices = [
    'Smart Switches & Dimmers',
    'Smart Bulbs & LED Strips',
    'Smart Thermostats',
    'Smart Door Locks',
    'Smart Cameras',
    'Smart Sensors',
    'Smart Speakers',
    'Smart Plugs',
    'Smart Curtains',
    'Smart Fans'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Smart <span className="text-orange-600">Home Automation</span> in Pune
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your home into a smart, connected space. Control lighting, security, 
                climate, and appliances from anywhere with our comprehensive home automation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918888696046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-semibold text-lg"
                >
                  Get Free Consultation
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Home Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Convenience & Comfort</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Energy Savings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Enhanced Security</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Remote Control</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Future-Proof Technology</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Home Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation features for modern living
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

      {/* Automation Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Automation Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete home automation solutions for every aspect of your home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-orange-600 font-semibold">{category.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Devices Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Devices We Install</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium smart devices from leading brands for reliable automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartDevices.map((device, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{device}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Control Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Voice Control Integration</h2>
              <p className="text-lg text-gray-600 mb-8">
                Control your smart home with voice commands using popular voice assistants. 
                Set up scenes, control devices, and manage your home hands-free.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Amazon Alexa</h3>
                    <p className="text-gray-600">Full voice control integration</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">G</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Google Assistant</h3>
                    <p className="text-gray-600">Seamless Google Home integration</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold">S</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Siri</h3>
                    <p className="text-gray-600">Apple HomeKit compatibility</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Voice Commands</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">"Hey Google, turn on living room lights"</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">"Alexa, set temperature to 22 degrees"</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">"Siri, activate movie night scene"</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">"Turn off all lights and lock doors"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Savings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Energy Savings & Efficiency</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart home automation helps reduce energy consumption and lower utility bills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-2xl">30%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Savings</h3>
              <p className="text-gray-600">Average reduction in energy consumption</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-2xl">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-gray-600">Continuous energy usage tracking</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-2xl">₹5K+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual Savings</h3>
              <p className="text-gray-600">Typical annual utility bill reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Make Your Home Smart?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get a free home automation consultation and discover how smart technology can transform your living space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918888696046"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get Free Consultation
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
