import { motion } from 'framer-motion'
import { SectionHead } from './Reveal.jsx'

const paths = [
  {
    n: '01',
    name: 'EliteWeb Platform',
    price: '$149/mo',
    who: 'Best for founders & marketing teams',
    text: 'Describe the change in plain English. EliteWeb reads your site, drafts the page or fix, validates it and hands it back with approval and rollback.',
    list: ['Describe', 'Build', 'Review'],
  },
  {
    n: '02',
    name: 'EliteWeb for Developers',
    price: '$49/mo',
    who: 'Best for AI-native developers',
    text: 'Keep the editor you already use. Connect your AI coding tool to your site’s context — components, content and design tokens.',
    list: ['Connect', 'Ask', 'Act'],
    featured: true,
  },
  {
    n: '03',
    name: 'Done-For-You Studio',
    price: 'Custom',
    who: 'Best for teams with a backlog',
    text: 'Hand the backlog to our designers and developers, powered by the same AI. You set priorities and keep approval.',
    list: ['Prioritize', 'Deliver', 'Govern'],
  },
]

export default function Paths() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Ways to use EliteWeb"
          title="One outcome. Three ways to get it done."
          sub="Every path runs on the same context and the same approval step. What changes is who operates it."
        />
        <div className="grid-3">
          {paths.map((p, i) => (
            <motion.div
              key={p.n}
              className={`path-card ${p.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
            >
              {p.featured && <span className="ribbon">Most popular</span>}
              <span className="path-n">{p.n}/03</span>
              <h3>{p.name}</h3>
              <div className="path-price">{p.price}</div>
              <p>{p.text}</p>
              <ol className="mini-steps">
                {p.list.map((s, j) => (
                  <li key={s}><span>0{j + 1}</span>{s}</li>
                ))}
              </ol>
              <small className="muted">{p.who}</small>
              <a href="#" className={`btn ${p.featured ? 'btn-grad' : 'btn-ghost'} btn-block`}>Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
