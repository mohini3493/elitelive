import { Logo } from './Navbar.jsx'

const cols = {
  Platform: ['AI Agent', 'Context Graph', 'Developers', 'Integrations', 'Pricing'],
  'Who It’s For': ['Founders', 'Marketing Teams', 'Agencies', 'E-commerce'],
  Services: ['Done-For-You Studio', 'Redesigns', 'Maintenance', 'SEO'],
  Company: ['About', 'Careers', 'Customer Stories', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p className="muted">EliteWeb asks before it changes anything in production.</p>
          <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@company.com" aria-label="Email" />
            <button className="btn btn-light btn-sm">Subscribe</button>
          </form>
        </div>
        {Object.entries(cols).map(([h, links]) => (
          <div key={h}>
            <h5>{h}</h5>
            {links.map((l) => <a key={l} href="#">{l}</a>)}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} EliteWeb. All rights reserved.</span>
        <span><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Cookies</a></span>
      </div>
    </footer>
  )
}
