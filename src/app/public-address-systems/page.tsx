import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Public Address Systems in Pune - PA Systems for Commercial Buildings',
  description: 'Professional public address systems in Pune. PA systems for schools, malls, offices, and commercial buildings with crystal clear audio.',
  keywords: 'public address systems Pune, PA systems, commercial audio, announcement systems',
};

export default function PublicAddressSystemsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Public <span className="text-orange-600">Address Systems</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional PA systems for announcements, emergency communications, and background music.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            Detailed information about our public address systems will be available soon.
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
