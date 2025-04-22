import React from 'react'

const beforeItems = [
  {
    icon: '⏱️',
    title: 'Manual Analysis',
    description: 'Time-consuming manual examination processes'
  },
  {
    icon: '❌',
    title: 'Error Risk',
    description: 'Human error probability'
  },
  {
    icon: '📉',
    title: 'Efficiency Loss',
    description: 'Repetitive tasks and time waste'
  }
]

const afterItems = [
  {
    icon: '⚡',
    title: 'Automated Analysis',
    description: 'Fast and accurate results'
  },
  {
    icon: '✅',
    title: 'High Accuracy',
    description: 'AI-powered precise results'
  },
  {
    icon: '📈',
    title: 'Maximum Efficiency',
    description: 'Optimized workflow processes'
  }
]

const TransformationImpact = () => {
  return (
    <section className="py-20 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Before Implementation */}
          <div>
            <h3 className="text-white text-2xl font-normal mb-8">
              Before Implementation
            </h3>
            <div className="space-y-4">
              {beforeItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] p-6 rounded-xl border border-[#333333]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-normal mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* After Implementation */}
          <div>
            <h3 className="text-white text-2xl font-normal mb-8">
              After Implementation
            </h3>
            <div className="space-y-4">
              {afterItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] p-6 rounded-xl border border-[#333333]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FAA819]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-normal mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransformationImpact 