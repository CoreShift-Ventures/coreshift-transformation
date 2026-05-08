'use client'

export function SideScrollV2() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-[100] py-3 px-2 bg-white/80 backdrop-blur-md rounded-full border border-[#eee] shadow-sm">
      <span
        className="text-[8px] font-medium text-[#999] tracking-[0.5px]"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        Explore
      </span>
      <div className="flex flex-col gap-0.5">
        <svg
          className="w-2.5 h-2.5 text-[#bbb] animate-bounce"
          style={{ animationDuration: '1.5s' }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  )
}
