import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Platform', 'Who It’s For', 'Services', 'Resources', 'Pricing']

export function Logo() {
  return (
    <a href="#" className="logo">
      <span className="logo-mark">E</span>
      <span>EliteWeb</span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l} href="#">{l}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="#" className="link-muted">Sign in</a>
          <a href="#" className="btn btn-light btn-sm">Get a Demo</a>
        </div>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className={open ? 'x' : ''} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {links.map((l) => (
              <a key={l} href="#" onClick={() => setOpen(false)}>{l}</a>
            ))}
            <a href="#" className="btn btn-light">Get a Demo</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
