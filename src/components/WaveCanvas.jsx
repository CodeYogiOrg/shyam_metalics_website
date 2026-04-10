import { useEffect, useRef } from 'react'

export default function WaveCanvas({ height = 200, flip = false, intensity = 1.0 }) {
  const canvasRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    const ctx = canvas.getContext('2d')
    let animId
    let time = 0

    const layers = [
      { amp: 38, freq: 0.007, speed: 0.6, alpha: 0.18, color: '1,69,242', yRatio: 0.52 },
      { amp: 28, freq: 0.011, speed: 1.1, alpha: 0.13, color: '91,142,247', yRatio: 0.60 },
      { amp: 22, freq: 0.009, speed: 0.85, alpha: 0.10, color: '1,56,199', yRatio: 0.45 },
      { amp: 16, freq: 0.015, speed: 1.4, alpha: 0.08, color: '1,69,242', yRatio: 0.55 },
    ]

    const resize = () => {
      const w = wrapper.clientWidth || window.innerWidth
      canvas.width = w
      canvas.height = height
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      animId = requestAnimationFrame(animate)
      time += 0.008

      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      layers.forEach((layer) => {
        const yBase = h * layer.yRatio
        const amp = layer.amp * intensity

        ctx.beginPath()

        if (flip) {
          ctx.moveTo(0, 0)
          ctx.lineTo(0, yBase + Math.sin(time * layer.speed) * amp)
          for (let x = 1; x <= w; x++) {
            const y = yBase + Math.sin(x * layer.freq + time * layer.speed) * amp
            ctx.lineTo(x, y)
          }
          ctx.lineTo(w, 0)
        } else {
          ctx.moveTo(0, h)
          ctx.lineTo(0, yBase + Math.sin(time * layer.speed) * amp)
          for (let x = 1; x <= w; x++) {
            const y = yBase + Math.sin(x * layer.freq + time * layer.speed) * amp
            ctx.lineTo(x, y)
          }
          ctx.lineTo(w, h)
        }

        ctx.closePath()
        ctx.fillStyle = `rgba(${layer.color},${layer.alpha})`
        ctx.fill()
      })

      // Subtle stroke on the topmost wave
      const top = layers[0]
      const topAmp = top.amp * intensity
      const topYBase = height * top.yRatio
      ctx.beginPath()
      ctx.moveTo(0, topYBase + Math.sin(time * top.speed) * topAmp)
      for (let x = 1; x <= canvas.width; x++) {
        ctx.lineTo(x, topYBase + Math.sin(x * top.freq + time * top.speed) * topAmp)
      }
      ctx.strokeStyle = 'rgba(1,69,242,0.25)'
      ctx.lineWidth = 1.5
      ctx.stroke()
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [height, flip, intensity])

  return (
    <div
      ref={wrapperRef}
      style={{ height, width: '100%', pointerEvents: 'none', overflow: 'hidden' }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: `${height}px` }}
      />
    </div>
  )
}
