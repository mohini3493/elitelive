import { motion } from 'framer-motion'
import { SectionHead } from './Reveal.jsx'

const cols = ['EliteWeb', 'Website builders', 'ChatGPT / Claude', 'Agency']
const rows = [
  { f: 'Understands your site', v: ['Built in', 'Templates only', 'Not built in', 'Human-led'] },
  { f: 'Finds what a change affects', v: ['Built in', 'Not built in', 'Rebuilt each time', 'Human-led'] },
  { f: 'Builds & deploys the work', v: ['Built in', 'Manual', 'Drafts only', 'Project queue'] },
  { f: 'Keeps humans in control', v: ['Approval + rollback', 'Manual', 'Not built in', 'Varies'] },
  { f: 'Time to value', v: ['Minutes', 'Days', 'Fast answer', 'Weeks'] },
]

export default function Comparison() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Compare"
          title="EliteWeb vs the alternatives"
          sub="Four ways to get a website built. One brings context, execution and experts together."
        />
        <motion.div
          className="table-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <table className="compare">
            <thead>
              <tr>
                <th />
                {cols.map((c, i) => (
                  <th key={c} className={i === 0 ? 'hl' : ''}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <motion.tr
                  key={r.f}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + ri * 0.08 }}
                >
                  <td className="feat">{r.f}</td>
                  {r.v.map((v, i) => (
                    <td key={i} className={i === 0 ? 'hl yes' : ''}>
                      {i === 0 && <span className="tick">✓</span>}
                      {v}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
