import { Metadata } from 'next';
import { CheckCircle, Fingerprint, Users, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Biometric Attendance Systems in Pune - Fingerprint & Face Recognition',
  description: 'Professional biometric attendance systems in Pune. Fingerprint and face recognition technology for accurate time tracking and workforce management.',
  keywords: 'biometric attendance Pune, fingerprint attendance, face recognition, time tracking, workforce management',
  openGraph: {
    title: 'Biometric Attendance Systems in Pune - Fingerprint & Face Recognition',
    description: 'Professional biometric attendance systems in Pune. Fingerprint and face recognition technology for accurate time tracking.',
  },
};

export default function BiometricAttendancePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Biometric <span className="text-orange-600">Attendance Systems</span> in Pune
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Accurate time tracking with fingerprint and face recognition technology. 
              Eliminate buddy punching and improve workforce management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're working on detailed information for our biometric attendance systems.
          </p>
          <a
            href="https://wa.me/918888696046"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg"
          >
            Get More Information
          </a>
        </div>
      </section>
    </div>
  );
}
