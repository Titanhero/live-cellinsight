import React from 'react'

const features = [
  {
    icon: '🔬',
    title: 'Advanced Image Processing',
    description: 'AI-powered image analysis for detailed cell structure examination.',
    tags: ['Premium']
  },
  {
    icon: '📊',
    title: 'Real-time Analysis',
    description: 'Instant results and live data visualization to accelerate processes.',
    tags: ['Essential']
  },
  {
    icon: '📈',
    title: 'Detailed Reporting',
    description: 'Customizable reports and data export options.',
    tags: ['Focus']
  },
  {
    icon: '🤖',
    title: 'AI Support',
    description: 'Machine learning algorithms for automatic analysis and predictions.',
    tags: ['Premium']
  },
  {
    icon: '🔄',
    title: 'Automated Workflow',
    description: 'Automate repetitive tasks and increase efficiency.',
    tags: ['Essential']
  },
  {
    icon: '🔒',
    title: 'Secure Data Management',
    description: 'End-to-end encryption and secure data storage solutions.',
    tags: ['Focus']
  }
]

const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-4xl md:text-5xl font-normal text-center mb-16">
          Powerful Features for Research Excellence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#333333] hover:border-[#FAA819] transition-colors"
            >
              <div className="w-16 h-16 bg-[#FAA819] rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-white text-2xl font-normal mb-4">
                {feature.title}
              </h3>
              
              <p className="text-white/50 mb-6">
                {feature.description}
              </p>
              
              <div className="flex gap-2">
                {feature.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded-full text-sm ${
                      tag === 'Premium'
                        ? 'bg-[#FAA819] text-[#0E0E0E]'
                        : tag === 'Focus'
                        ? 'bg-[#333333] text-white'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid 