import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHead } from './Reveal.jsx'

const steps = ['Connect your site or start fresh', 'Describe what you need in plain English', 'Review, approve, and keep the audit log']

const features = [
  {
    tag: 'BUILD PAGES',
    text: 'Describe any page and EliteWeb drafts, tests, and publishes it with your brand built in.',
    prompt: 'Create a pricing page with three tiers and a monthly/yearly toggle.',
  },
  {
    tag: 'FIX & OPTIMIZE',
    text: 'Broken links, slow images, layout bugs. Describe the problem, EliteWeb drafts the fix for you to approve.',
    prompt: 'Why is the homepage slow on mobile? Fix it.',
  },
  {
    tag: 'DOCUMENT YOUR SITE',
    text: 'Every page, component and integration mapped and documented — perfect for handoffs.',
    prompt: 'Document every page and the components it uses.',
  },
  {
    tag: 'SEO & CONTENT',
    text: 'Meta tags, schema, sitemaps and fresh blog drafts — all reviewed before publishing.',
    prompt: 'Write meta descriptions for every page missing one.',
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((a) => (a + 1) % features.length), 4000)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="How it works" title="From request to approved change." />

        <div className="steps-row">
          {steps.map((s, i) => (
            <motion.div
              key={s}
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <span className="num">0{i + 1}</span>
              <p>{s}</p>
            </motion.div>
          ))}
        </div>

        <div className="feature-tabs" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="tab-list">
            {features.map((f, i) => (
              <button
                key={f.tag}
                className={`tab ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                <h4>{f.tag}</h4>
                <p>{f.text}</p>
                {i === active && !paused && (
                  <motion.span
                    className="tab-bar"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4, ease: 'linear' }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="tab-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="tab-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bubble user">{features[active].prompt}</div>
                {[0, 1, 2].map((r) => (
                  <motion.div
                    key={r}
                    className="code-line"
                    initial={{ width: 0 }}
                    animate={{ width: `${[85, 62, 74][r]}%` }}
                    transition={{ delay: 0.3 + r * 0.2, duration: 0.6 }}
                  />
                ))}
                <motion.div
                  className="ok-chip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  ✓ Draft ready for review
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
