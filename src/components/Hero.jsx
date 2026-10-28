import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const demos = [
  {
    prompt: 'Build a landing page for my coffee roastery with an online shop.',
    steps: ['Reading brand & assets', 'Drafting layout', 'Generating copy', 'Wiring up checkout', 'Ready for your approval'],
    accent: '#f4a261',
    title: 'Ember Roasters',
  },
  {
    prompt: 'Add a booking form to the dental clinic site and email the front desk.',
    steps: ['Scanning existing pages', 'Designing the form', 'Validating fields', 'Connecting email', 'Ready for your approval'],
    accent: '#3ee0d0',
    title: 'Brightsmile Dental',
  },
  {
    prompt: 'Make the portfolio load faster and fix the mobile menu.',
    steps: ['Auditing performance', 'Compressing images', 'Fixing nav on mobile', 'Running Lighthouse', 'Ready for your approval'],
    accent: '#8b7bff',
    title: 'Studio Nova',
  },
]

const ease = [0.22, 1, 0.36, 1]

function useTypewriter(text, speed = 28, start = true) {
  const [out, setOut] = useState('')
  useEffect(() => {
    if (!start) return
    setOut('')
    let i = 0
    const id = setInterval(() => {
      i++
      setOut(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed, start])
  return out
}

function AgentDemo() {
  const [idx, setIdx] = useState(0)
  const [stepCount, setStepCount] = useState(0)
  const demo = demos[idx]
  const typed = useTypewriter(demo.prompt, 26)
  const doneTyping = typed.length === demo.prompt.length

  useEffect(() => {
    setStepCount(0)
  }, [idx])

  useEffect(() => {
    if (!doneTyping) return
    if (stepCount < demo.steps.length) {
      const t = setTimeout(() => setStepCount((s) => s + 1), 650)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setIdx((i) => (i + 1) % demos.length), 2800)
    return () => clearTimeout(t)
  }, [doneTyping, stepCount, demo.steps.length])

  const progress = stepCount / demo.steps.length

  return (
    <motion.div
      className="demo"
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.5, ease }}
    >
      <div className="demo-bar">
        <span className="dot r" /><span className="dot y" /><span className="dot g" />
        <span className="demo-title">EliteWeb Agent</span>
        <span className="demo-count">{idx + 1}/{demos.length}</span>
      </div>

      <div className="demo-body">
        <div className="demo-chat">
          <div className="bubble user">
            {typed}
            {!doneTyping && <span className="caret">|</span>}
          </div>

          <div className="steps">
            <AnimatePresence mode="popLayout">
              {demo.steps.slice(0, stepCount).map((s, i) => {
                const last = i === demo.steps.length - 1
                return (
                  <motion.div
                    key={idx + s}
                    className={`step ${last ? 'final' : ''}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <span className="check">{last ? '◆' : '✓'}</span>
                    {s}
                  </motion.div>
                )
              })}
            </AnimatePresence>
            {doneTyping && stepCount < demo.steps.length && (
              <div className="step processing">
                <span className="spinner" /> Processing…
              </div>
            )}
          </div>

          <div className="progress">
            <motion.div
              className="progress-fill"
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.5 }}
              style={{ background: demo.accent }}
            />
          </div>
        </div>

        {/* Mini site preview that assembles as steps complete */}
        <div className="preview">
          <div className="pv-url">
            <span className="lock">🔒</span> {demo.title.toLowerCase().replace(/\s/g, '')}.com
          </div>
          <div className="pv-canvas">
            <AnimatePresence mode="wait">
              <motion.div key={idx} className="pv-inner" exit={{ opacity: 0 }}>
                <motion.div
                  className="pv-nav"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stepCount >= 1 ? 1 : 0.15 }}
                >
                  <b style={{ color: demo.accent }}>{demo.title}</b>
                  <i /><i /><i />
                </motion.div>
                <motion.div
                  className="pv-hero"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: stepCount >= 2 ? 1 : 0.1, y: stepCount >= 2 ? 0 : 10 }}
                  style={{ background: `linear-gradient(135deg, ${demo.accent}33, transparent)` }}
                >
                  <span className="pv-line w70" />
                  <span className="pv-line w45" />
                  <span className="pv-btn" style={{ background: demo.accent }} />
                </motion.div>
                <div className="pv-cards">
                  {[0, 1, 2].map((c) => (
                    <motion.span
                      key={c}
                      className="pv-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: stepCount >= 3 ? 1 : 0.1, scale: stepCount >= 3 ? 1 : 0.9 }}
                      transition={{ delay: c * 0.08 }}
                    />
                  ))}
                </div>
                <AnimatePresence>
                  {stepCount >= demo.steps.length && (
                    <motion.div
                      className="pv-approve"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>Deploy to production?</span>
                      <button style={{ background: demo.accent }}>Approve</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const words = ['Your', 'AI', 'Web', 'Studio']
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.span
          className="pill"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="pill-dot" /> New · Describe it, ship it
        </motion.span>

        <h1 className="hero-title">
          {words.map((w, i) => (
            <motion.span
              key={w}
              className={w === 'Studio' ? 'serif grad' : ''}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease }}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          Just describe your website to EliteWeb, and watch it design, build and deploy —
          it always asks before anything goes live.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a href="#" className="btn btn-grad">Start free trial →</a>
          <a href="#" className="btn btn-ghost">Get a demo</a>
        </motion.div>
        <motion.p
          className="hero-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Unlimited messages · No credit card required
        </motion.p>

        <AgentDemo />
      </div>
    </section>
  )
}
