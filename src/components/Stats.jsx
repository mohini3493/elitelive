import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

// Placeholder pricing — edit to match your plans.
const stats = [
  { value: 14, prefix: '', suffix: ' days', label: 'Free trial, no card' },
  { value: 49, prefix: '$', suffix: '', label: 'Starter plan, per month' },
  { value: 149, prefix: '$', suffix: '', label: 'Pro plan, per month' },
  { value: 5, prefix: '', suffix: ' min', label: 'Average time to first page' },
]

function Counter({ value, prefix, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, value])
  return <span ref={ref}>{prefix}{n}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-num grad"><Counter {...s} /></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
