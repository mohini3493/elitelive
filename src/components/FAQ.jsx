import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHead } from './Reveal.jsx'

const faqs = [
  { q: 'What is EliteWeb?', a: 'EliteWeb is an AI web studio. It reads your site (or starts from scratch) and builds pages, fixes and content from plain-English requests.' },
  { q: 'Do I need to know how to code?', a: 'No. Describe what you need and EliteWeb handles the HTML, CSS and JavaScript. Developers can still inspect and edit every line.' },
  { q: 'Is it safe to use on my live site?', a: 'Yes. Every change is previewed on staging first, and nothing goes live without your approval. One-click rollback is always available.' },
  { q: 'What does it cost?', a: 'Plans start at $49/month with a 14-day free trial and no credit card. Done-for-you studio work is quoted per project.' },
  { q: 'Can I use it with my existing tools?', a: 'Yes — EliteWeb connects to GitHub, Figma, Shopify, Stripe, popular CMSs and more.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section">
      <div className="container narrow">
        <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
        <div className="faq">
          {faqs.map((f, i) => (
            <div key={f.q} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-n">0{i + 1}</span>
                <span className="faq-q">{f.q}</span>
                <motion.span className="plus" animate={{ rotate: open === i ? 45 : 0 }}>+</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-a"
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
