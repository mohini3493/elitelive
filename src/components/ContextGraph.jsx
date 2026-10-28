import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const nodes = ['GitHub', 'Figma', 'Shopify', 'Stripe', 'Notion', 'Analytics', 'CMS', 'Email']

export default function ContextGraph() {
  return (
    <section className="section">
      <div className="container split">
        <Reveal className="split-text">
          <span className="eyebrow">Context Graph</span>
          <h2>Your AI doesn’t know how your business actually works.</h2>
          <p className="sub">
            EliteWeb maps your site, brand, content and the tools around it into one Context Graph —
            with permissions and an audit trail built in. Every agent reads from it instead of guessing.
          </p>
          <ul className="ticks">
            <li>Brand colors, fonts & tone learned once</li>
            <li>Pages, components & dependencies mapped</li>
            <li>Full history of every change</li>
          </ul>
          <a href="#" className="btn btn-ghost">Explore the Context Graph →</a>
        </Reveal>

        <div className="orbit-wrap">
          <div className="orbit-ring r1" />
          <div className="orbit-ring r2" />
          <motion.div
            className="orbit-core"
            animate={{ boxShadow: ['0 0 40px #8b7bff55', '0 0 90px #3ee0d088', '0 0 40px #8b7bff55'] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="logo-mark big">E</span>
            <small>Memory · Permissions · Replay</small>
          </motion.div>
          <motion.div
            className="orbit"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {nodes.map((n, i) => {
              const a = (i / nodes.length) * Math.PI * 2
              return (
                <div
                  key={n}
                  className="orbit-node"
                  style={{ left: `${50 + 44 * Math.cos(a)}%`, top: `${50 + 44 * Math.sin(a)}%` }}
                >
                  <motion.span
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  >
                    {n}
                  </motion.span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
