// Placeholder client names — swap for your real client logos.
const brands = [
  'Northwind', 'Lumen&Co', 'Parallax', 'Quillstone', 'Orbitly', 'Halcyon',
  'Mosaic Labs', 'Fernhill', 'Brightpath', 'Vertex', 'Kinfolk', 'Atlas Bay',
]

export default function LogoMarquee() {
  const row = [...brands, ...brands]
  return (
    <section className="marquee-wrap">
      <p className="marquee-label">Trusted by growing teams worldwide</p>
      <div className="marquee">
        <div className="marquee-track">
          {row.map((b, i) => (
            <span key={i} className="brand">{b}</span>
          ))}
        </div>
      </div>
      <div className="badges">
        {['SOC 2', 'GDPR', 'ISO 27001', '99.9% uptime'].map((b) => (
          <span key={b} className="badge">{b}</span>
        ))}
      </div>
    </section>
  )
}
