import { motion } from 'framer-motion'
import { SectionHead } from './Reveal.jsx'

const items = [
  { icon: '🔐', title: 'Your permissions apply', text: 'EliteWeb connects with your account. It can only do what you can do.' },
  { icon: '🧪', title: 'Preview first', text: 'Unlimited staging previews. Test every change before it touches your live site.' },
  { icon: '🛟', title: 'Deploys have a safety net', text: 'Pre-flight checks, an approval step and one-click rollback.' },
  { icon: '⏏️', title: 'Revoke any time', text: 'Disconnect in one click. Your code and content stay yours.' },
]

export default function SafeSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Safe for production" title="Built to ship. Built to be trusted." />
        <div className="grid-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              className="card hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="icon">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
