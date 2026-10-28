import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cta-glow" />
          <span className="eyebrow">Getting started</span>
          <h2>
            Your website, <span className="serif grad">on autopilot.</span>
          </h2>
          <p className="sub">Stop waiting weeks for changes. Describe it once — EliteWeb drafts, tests and ships.</p>
          <div className="hero-ctas">
            <a href="#" className="btn btn-light">Start free trial →</a>
            <a href="#" className="btn btn-ghost">Book a demo</a>
          </div>
          <p className="hero-note">14-day free trial · No credit card required</p>
        </motion.div>
      </div>
    </section>
  )
}
