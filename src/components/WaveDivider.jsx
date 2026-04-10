export default function WaveDivider({ flip = false, color = '#222022', opacity = 1, className = '' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`} style={{ marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}>
      <svg className="relative block w-[200%] h-[60px] md:h-[80px] wave-animate" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 C1350,80 1550,0 1800,40 C2050,80 2250,0 2400,40 L2400,120 L0,120 Z" fill={color} fillOpacity={opacity} />
      </svg>
    </div>
  )
}

export function WaveSection({ children, className = '', waves = 3 }) {
  const colors = [
    { color: '#0145F2', opacity: 0.08 },
    { color: '#0138C7', opacity: 0.05 },
    { color: '#0145F2', opacity: 0.03 },
    { color: '#EDF1F5', opacity: 0.06 },
  ]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        {Array.from({ length: Math.min(waves, 4) }).map((_, i) => (
          <div key={i} className="w-full overflow-hidden leading-none" style={{ marginBottom: -1 }}>
            <svg
              className={`relative block w-[200%] h-[40px] md:h-[60px] ${i % 2 === 0 ? 'wave-animate' : 'wave-animate-reverse'}`}
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              style={{ animationDuration: `${12 + i * 4}s` }}
            >
              <path
                d={`M0,${30 + i * 15} C${200 + i * 50},${80 - i * 10} ${400 + i * 30},${10 + i * 10} 600,${40 + i * 8} C${800 + i * 40},${80 - i * 8} ${1000 + i * 20},${10 + i * 12} 1200,${40 + i * 8} C${1400 + i * 50},${80 - i * 10} ${1600 + i * 30},${10 + i * 10} 1800,${40 + i * 8} C${2000 + i * 40},${80 - i * 8} ${2200 + i * 20},${10 + i * 12} 2400,${40 + i * 8} L2400,120 L0,120 Z`}
                fill={colors[i]?.color || '#0145F2'}
                fillOpacity={colors[i]?.opacity || 0.05}
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

export function WaveTop({ color = '#1a181a' }) {
  return (
    <div className="w-full overflow-hidden leading-none" style={{ marginBottom: -1 }}>
      <svg className="relative block w-[200%] h-[50px] md:h-[70px] wave-animate-slow" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 C1400,20 1600,100 1800,60 C2000,20 2200,100 2400,60 L2400,0 L0,0 Z" fill={color} />
      </svg>
    </div>
  )
}
