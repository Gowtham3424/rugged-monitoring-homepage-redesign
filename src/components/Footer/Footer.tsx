import './Footer.css';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Products',
      links: ['Fiber Optic Sensors', 'Asset Monitors', 'RM EYE Software']
    },
    {
      title: 'Solutions',
      links: ['Transformer Monitoring', 'Switchgear Monitoring', 'Motor & Generator']
    },
    {
      title: 'Industries',
      links: ['Oil & Gas', 'Renewables', 'Data Centers', 'Metals & Mining']
    },
    {
      title: 'Resources',
      links: ['Case Studies', 'Whitepapers', 'Support', 'Contact Us']
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">RUGGED MONITORING</h2>
            <p className="footer-tagline">Electrical Asset Condition Monitoring</p>
          </div>
        </div>
        
        <div className="footer-middle">
          <div className="footer-links-grid">
            {footerLinks.map((column) => (
              <div key={column.title} className="footer-col">
                <h3 className="footer-col-title">{column.title}</h3>
                <ul className="footer-link-list">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Rugged Monitoring. All rights reserved.</p>
            <p className="footer-tech-label">Engineered for critical infrastructure.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
