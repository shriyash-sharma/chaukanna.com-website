import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Award, Users, Clock, Shield, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Chaukanna CCTV & Home Automation Services in Pune',
  description: 'Learn about Chaukanna, Pune\'s trusted CCTV and home automation service provider. 5+ years experience, 500+ happy customers, 24/7 support.',
  keywords: 'about chaukanna, CCTV company Pune, home automation experts, security services Pune, company history',
  openGraph: {
    title: 'About Us - Chaukanna CCTV & Home Automation Services in Pune',
    description: 'Learn about Chaukanna, Pune\'s trusted CCTV and home automation service provider. 5+ years experience, 500+ happy customers, 24/7 support.',
  },
};

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Customers' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Shield, value: '1000+', label: 'Systems Installed' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We use only premium quality products and ensure professional installation for every project.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. We prioritize their needs and satisfaction.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay updated with the latest technology trends to provide cutting-edge solutions.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'We deliver on our promises with timely completion and reliable after-sales support.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      experience: '8+ years in security systems',
      expertise: 'CCTV Installation, System Design'
    },
    {
      name: 'Priya Sharma',
      position: 'Technical Director',
      experience: '6+ years in automation',
      expertise: 'Home Automation, Smart Systems'
    },
    {
      name: 'Amit Patel',
      position: 'Service Manager',
      experience: '5+ years in maintenance',
      expertise: 'AMC Services, Repairs'
    },
    {
      name: 'Sneha Desai',
      position: 'Customer Success',
      experience: '4+ years in customer service',
      expertise: 'Client Relations, Support'
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
                About <span className="text-orange-600">Chaukanna</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are Pune's trusted partner for comprehensive security and automation solutions. 
                With over 5 years of experience, we have been protecting homes, offices, and 
                commercial spaces across the city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918888696046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-semibold text-lg"
                >
                  Get in Touch
                </a>
                <a
                  href="tel:+918888696046"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center font-semibold text-lg"
                >
                  Call Us
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-6">
                Founded in 2019, Chaukanna CCTV & Home Automation Services began with a simple mission: 
                to provide reliable, affordable, and cutting-edge security solutions to the people of Pune. 
                What started as a small team of passionate technicians has grown into one of the city's 
                most trusted security service providers.
              </p>
              <p className="mb-6">
                Our journey began when our founder, Rajesh Kumar, recognized the growing need for 
                professional security solutions in Pune's rapidly expanding residential and commercial 
                sectors. With his extensive experience in security systems and a vision to make 
                advanced security accessible to everyone, Chaukanna was born.
              </p>
              <p className="mb-6">
                Over the years, we have successfully completed over 1000 installations across Pune, 
                from small residential properties to large commercial complexes. Our commitment to 
                quality, customer satisfaction, and continuous innovation has earned us the trust of 
                more than 500 satisfied customers.
              </p>
              <p>
                Today, we continue to evolve with the latest technology trends, offering comprehensive 
                solutions that include CCTV installation, home automation, fire alarm systems, and 
                much more. Our team of certified professionals is dedicated to providing exceptional 
                service and support to every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                <p className="text-sm text-gray-500">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Chaukanna?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Professionals</h3>
                    <p className="text-gray-600">
                      Our team consists of certified technicians with extensive experience in security systems and home automation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Products</h3>
                    <p className="text-gray-600">
                      We use only premium quality products from trusted brands to ensure reliability and longevity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">
                      Round-the-clock technical support ensures your security system is always operational when you need it.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
                    <p className="text-gray-600">
                      Based in Pune, we understand local security challenges and provide tailored solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Certifications</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-orange-600" />
                  <span className="text-gray-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-orange-600" />
                  <span className="text-gray-700">Authorized Dealer - Hikvision</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-orange-600" />
                  <span className="text-gray-700">Authorized Dealer - Dahua</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-orange-600" />
                  <span className="text-gray-700">Fire Safety Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-orange-600" />
                  <span className="text-gray-700">Home Automation Certified</span>
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your security needs and create a customized solution that fits your requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918888696046"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Start Your Project
            </a>
            <a
              href="tel:+918888696046"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-semibold text-lg"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
