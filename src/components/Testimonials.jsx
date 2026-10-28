import { motion } from 'framer-motion'
import { SectionHead } from './Reveal.jsx'

// PLACEHOLDER testimonials — replace with real quotes from real customers before launch.
const quotes = [
  { name: 'Customer name', role: 'Founder, your client', text: 'It didn’t tell me what to change on my site. It did it for me — and asked before going live.' },
  { name: 'Customer name', role: 'Marketing lead', text: 'By 9am I had shipped a landing page that would have taken our agency two weeks.' },
  { name: 'Customer name', role: 'Freelance developer', text: 'It feels like having a conversation instead of clicking through a builder.' },
  { name: 'Customer name', role: 'Agency owner', text: 'Handoffs are painless now. Every page and component is documented automatically.' },
  { name: 'Customer name', role: 'E-commerce manager', text: 'Our product pages load twice as fast and I never touched the code.' },
  { name: 'Customer name', role: 'Startup CTO', text: 'The approval step is what sold us. Nothing ships without a human yes.' },
]

function Card({ q }) {
  return (
    <div className="quote">
      <p>“{q.text}”</p>
      <div className="who">
        <span className="avatar">{q.role[0]}</span>
        <div>
          <b>{q.name}</b>
          <small>{q.role}</small>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const colA = [...quotes.slice(0, 3), ...quotes.slice(0, 3)]
  const colB = [...quotes.slice(3), ...quotes.slice(3)]
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Community" title="What people are saying" sub="Real teams. Real sites." />
        <div className="quotes-cols">
          <motion.div
            className="quotes-col"
            animate={{ y: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {colA.map((q, i) => <Card key={i} q={q} />)}
          </motion.div>
          <motion.div
            className="quotes-col"
            animate={{ y: ['-50%', '0%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {colB.map((q, i) => <Card key={i} q={q} />)}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
