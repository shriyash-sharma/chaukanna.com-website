import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Shield, Clock, Award } from 'lucide-react';
import { services } from '@/data/services';

export default function HomePage() {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Tech Solutions Pvt Ltd',
      content: 'Excellent CCTV installation service. Professional team and great after-sales support. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Residential Complex',
      content: 'The smart home automation system has made our lives so much easier. Great quality and reasonable pricing.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Amit Patel',
      company: 'Office Building',
      content: 'Outstanding fire alarm system installation. The team was punctual and completed the work on time.',
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Customers' },
    { icon: Shield, value: '1000+', label: 'Systems Installed' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Award, value: '5+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional{' '}
                  <span className="text-orange-600">By Shri CCTV & Home Automation Services</span>{' '}
                  Services in Pune
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Trusted by 5000+ customers for reliable security solutions. From CCTV installation 
                  to smart home automation, we provide comprehensive security services across Pune.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918888696046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-semibold text-lg"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="tel:+918888696046"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center font-semibold text-lg"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Free Quote</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option>Select Service</option>
                      <option>CCTV Installation</option>
                      <option>CCTV AMC</option>
                      <option>Fire Alarm Systems</option>
                      <option>Biometric Attendance</option>
                      <option>Smart Home Automation</option>
                    </select>
                  </div>
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security and automation solutions for homes, offices, and commercial spaces in Pune
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-semibold">{service.price}</span>
                    <Link
                      href={service.slug}
                      className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold inline-flex items-center"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Chaukanna?</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 5 years of experience in Pune, we have established ourselves as the trusted 
                provider of security and automation solutions. Our team of certified professionals 
                ensures quality installation and reliable after-sales support.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Professionals</h3>
                    <p className="text-gray-600">
                      Our team consists of certified technicians with extensive experience in security systems.
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
                      Round-the-clock technical support and emergency services for all our customers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">
                      We use only premium quality products and provide comprehensive warranties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-3xl">5000+</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Happy Customers</h3>
                  <p className="text-gray-600 mb-6">
                    Join hundreds of satisfied customers who trust us for their security needs.
                  </p>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">4.9/5 Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
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
            Get a free consultation and quote for your security needs. Our experts are ready to help you choose the right solution.
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
}// Environment variables updated - triggering redeployment
