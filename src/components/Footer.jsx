import logoDark from '../assets/logo-dark.png';
import { company, contact, electricalServices, ictServices, nav, whatsappLink } from '../data/site.js';
import { Link } from '../Router.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src={logoDark} alt="VOLTWISE — Sparking Change" />
          <p>Electrical engineering and ICT solutions in Tanzania — power and connectivity, engineered properly.</p>
        </div>
        <div>
          <h4>Electrical</h4>
          <ul>
            {electricalServices.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>ICT &amp; Digital</h4>
          <ul>
            {ictServices.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
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
