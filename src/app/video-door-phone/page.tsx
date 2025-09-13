import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Door Phone Systems in Pune - Smart Intercom Solutions',
  description: 'Professional video door phone installation in Pune. HD video calling, mobile integration, and smart access control for modern homes.',
  keywords: 'video door phone Pune, smart intercom, door phone installation, mobile integration',
};

export default function VideoDoorPhonePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Video <span className="text-orange-600">Door Phone</span> Systems
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Smart video door phone systems with mobile connectivity for enhanced security and convenience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            Detailed information about our video door phone systems will be available soon.
          </p>
          <a
            href="https://wa.me/918888696046"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg"
          >
            Get Quote
          </a>
        </div>
      </section>
    </div>
  );
}
