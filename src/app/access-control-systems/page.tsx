import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Access Control Systems in Pune - Card & Biometric Entry Solutions',
  description: 'Professional access control systems in Pune. Card readers, biometric access, visitor management, and secure entry solutions.',
  keywords: 'access control Pune, card readers, biometric access, visitor management, secure entry',
};

export default function AccessControlSystemsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Access <span className="text-orange-600">Control Systems</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Advanced access control solutions for secure entry management and visitor tracking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            Detailed information about our access control systems will be available soon.
          </p>
          <a
            href="https://wa.me/918888696046"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
}
