'use client'

import Image from 'next/image'

const logos = [
  { src: '/logos/Companies/SAP.png', width: 80, height: 32 },
  { src: '/logos/Companies/IBM.svg', width: 70, height: 28 },
  { src: '/logos/Companies/hcltech-new-logo.svg', width: 100, height: 18 },
  { src: '/logos/Companies/HP .svg', width: 38, height: 38 },
  { src: '/logos/Companies/Algonomy.png', width: 95, height: 32 },
  { src: '/logos/Companies/Talend.png', width: 85, height: 26 },
]

export function TrustSectionV2() {
  return (
    <section className="py-14 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-[12px] text-[#999] uppercase tracking-[2px]">Built by transformation experts from</p>
        </div>

        <div className="flex justify-center items-center gap-12 flex-wrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-10 relative flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt="Company logo"
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
