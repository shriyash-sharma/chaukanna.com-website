import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Get Free Quote for By Shri CCTV & Home Automation Services Services',
  description: 'Contact Chaukanna for free consultation and quotes on CCTV installation, home automation, fire alarm systems, and more. Call +91 70209 48981 or visit our Pune office.',
  keywords: 'contact chaukanna, CCTV quote Pune, home automation consultation, security services contact, Pune office',
  openGraph: {
    title: 'Contact Us - Get Free Quote for By Shri CCTV & Home Automation Services Services',
    description: 'Contact Chaukanna for free consultation and quotes on CCTV installation, home automation, fire alarm systems, and more.',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
