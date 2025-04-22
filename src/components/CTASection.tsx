import React from 'react'

const CTASection = () => {
  return (
    <section className="py-20 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#FAA819]/10 to-[#FAA819]/5 rounded-2xl p-12 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-normal mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/50 text-xl mb-8 max-w-2xl mx-auto">
            Explore our cell analysis platform and take your research to the next level.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-white/5 border border-[#333333] rounded-full text-white placeholder-white/50 focus:outline-none focus:border-[#FAA819] transition-colors"
            />
            <button className="px-8 py-4 bg-[#FAA819] text-[#0E0E0E] rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection 