import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Repair & Maintenance Services in Pune - CCTV & Security Systems',
  description: 'Expert repair and maintenance services for CCTV, access control, and security systems in Pune. Same-day service available.',
  keywords: 'CCTV repair Pune, security system maintenance, system troubleshooting, emergency repairs',
};

export default function RepairMaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Repair & <span className="text-orange-600">Maintenance</span> Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert repair and maintenance services for all your security and automation systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            Detailed information about our repair and maintenance services will be available soon.
          </p>
          <a
            href="https://wa.me/918888696046"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
