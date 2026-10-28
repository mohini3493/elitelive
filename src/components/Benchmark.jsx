import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

// Placeholder numbers — replace with your own measured results.
const bars = [
  { label: 'Without the Context Graph', value: 44, cls: 'dim' },
  { label: 'With the Context Graph', value: 87, cls: 'bright' },
]

export default function Benchmark() {
  return (
    <section className="section">
      <div className="container bench">
        <Reveal>
          <span className="eyebrow">The same context underneath</span>
          <h2>Context doubles accuracy.</h2>
          <p className="sub">
            Grounding every agent in your site’s real structure means fewer hallucinated components and
            fewer broken deploys.
          </p>
        </Reveal>
        <div className="bars">
          {bars.map((b, i) => (
            <div key={b.label} className="bar-row">
              <div className="bar-label">
                <span>{b.label}</span>
                <motion.b
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.3 }}
                >
                  {b.value}%
                </motion.b>
              </div>
              <div className="bar-track">
                <motion.div
                  className={`bar-fill ${b.cls}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${b.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: i * 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
          <div className="mini-stats">
            <div><b>−40%</b><span>cost</span></div>
            <div><b>+28%</b><span>accuracy</span></div>
            <div><b>2×</b><span>speed</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
