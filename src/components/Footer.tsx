import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#0E0E0E] border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Certifications & Security */}
          <div>
            <h3 className="text-white text-xl font-normal mb-6">
              Certifications & Security
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <div>
                  <p className="text-white font-medium">ISO 27001</p>
                  <p className="text-white/50 text-sm">Information Security</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <p className="text-white font-medium">GDPR Compliant</p>
                  <p className="text-white/50 text-sm">Data Protection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Elements */}
          <div>
            <h3 className="text-white text-xl font-normal mb-6">
              Menu
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-normal mb-6">
              Newsletter
            </h3>
            <p className="text-white/50 mb-4">
              Stay updated with the latest developments.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-white/5 border border-[#333333] rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#FAA819] transition-colors"
              />
              <button className="px-4 py-2 bg-[#FAA819] text-[#0E0E0E] rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50">
            © 2024 Live Cell Insight. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 