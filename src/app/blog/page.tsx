import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { getAllBlogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Blog - By Shri CCTV & Home Automation Services Tips, Guides & News',
  description: 'Expert insights on CCTV installation, home automation, security systems, and maintenance tips. Stay updated with the latest trends in security technology.',
  keywords: 'CCTV blog, home automation tips, security guides, maintenance advice, technology trends',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert insights, tips, and guides on CCTV installation, home automation, 
              security systems, and maintenance. Stay informed with the latest trends in security technology.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our content organized by topics and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CCTV Installation</h3>
              <p className="text-gray-600 mb-4">Guides on camera selection, installation, and maintenance</p>
              <Link href="/cctv-installation" className="text-orange-600 hover:text-orange-700 font-medium">
                View Service →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CCTV AMC</h3>
              <p className="text-gray-600 mb-4">Maintenance tips and AMC benefits</p>
              <Link href="/cctv-amc" className="text-blue-600 hover:text-blue-700 font-medium">
                View Service →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fire Alarm Systems</h3>
              <p className="text-gray-600 mb-4">Fire safety and alarm system guides</p>
              <Link href="/fire-alarm-systems" className="text-green-600 hover:text-green-700 font-medium">
                View Service →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Biometric Systems</h3>
              <p className="text-gray-600 mb-4">Attendance and access control solutions</p>
              <Link href="/biometric-attendance" className="text-purple-600 hover:text-purple-700 font-medium">
                View Service →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Home</h3>
              <p className="text-gray-600 mb-4">Home automation and smart technology</p>
              <Link href="/smart-home-automation" className="text-red-600 hover:text-red-700 font-medium">
                View Service →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Repair & Maintenance</h3>
              <p className="text-gray-600 mb-4">Troubleshooting and maintenance guides</p>
              <Link href="/repair-maintenance" className="text-indigo-600 hover:text-indigo-700 font-medium">
                View Service →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest security tips, technology updates, and exclusive offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
