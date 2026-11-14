import logoDark from '../assets/logo-dark.png';
import { company, contact, nav, services, whatsappLink } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src={logoDark} alt="VOLTWISE — Sparking Change" />
          <p>Electrical construction, testing &amp; commissioning, and auditing in Tanzania.</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <a href="#services">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>
              <a href={contact.phoneHref}>Call {contact.phoneDisplay}</a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                WhatsApp {contact.phoneDisplay}
              </a>
            </li>
            <li>{contact.location}</li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>
          © {new Date().getFullYear()} {company.name}. {company.registration}.
        </span>
        <span className="footer-tag">{company.tagline}</span>
      </div>
    </footer>
  );
}
