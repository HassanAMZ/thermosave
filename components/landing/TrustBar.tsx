import { TRUST_STATS } from './constants'

type TrustBarProps = {
  tone?: 'light' | 'dark'
  className?: string
}

export function TrustBar({ tone = 'light', className = '' }: TrustBarProps) {
  const isDark = tone === 'dark'

  return (
    <div
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-sm sm:grid-cols-4 ${
        isDark ? 'bg-white/10' : 'bg-stone-200/80'
      } ${className}`}
    >
      {TRUST_STATS.map((stat) => (
        <div
          key={stat.value}
          className={`flex flex-col items-center justify-center px-3 py-4 text-center sm:py-5 ${
            isDark ? 'bg-[#12161c]/90' : 'bg-white/90'
          }`}
        >
          <span
            className={`font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight sm:text-xl ${
              isDark ? 'text-[#f0a060]' : 'text-[#c45c1a]'
            }`}
          >
            {stat.value}
          </span>
          <span
            className={`mt-0.5 text-[11px] uppercase tracking-[0.14em] sm:text-xs ${
              isDark ? 'text-stone-400' : 'text-stone-500'
            }`}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
