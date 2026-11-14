import { contact, images, whatsappLink } from '../data/site.js';
import { ChatIcon, ClipboardIcon, GaugeIcon, PhoneIcon, ShieldIcon } from './Icons.jsx';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero-img" src={images.hero} alt="" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="wrap hero-inner">
        <span className="kicker kicker-light">Electrical engineering · Dar es Salaam</span>
        <h1 className="hero-title">
          Safe, reliable power — <span className="red">built and tested</span> by engineers.
        </h1>
        <p className="hero-lead">
          VOLTWISE Engineering designs, installs, tests and audits electrical systems for homes, businesses and industry
          across Tanzania.
        </p>
        <div className="hero-actions">
          <a className="btn btn-red btn-lg" href={whatsappLink()} target="_blank" rel="noreferrer">
            <ChatIcon />
            Chat on WhatsApp
          </a>
          <a className="btn btn-ghost btn-lg" href={contact.phoneHref}>
            <PhoneIcon />
            Call {contact.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="wrap hero-strip-wrap">
        <ul className="hero-strip">
          <li>
            <ShieldIcon />
            <span>
              <strong>Safety first</strong>
              Every job planned and checked for safety
            </span>
          </li>
          <li>
            <GaugeIcon />
            <span>
              <strong>LV &amp; HT testing</strong>
              Commissioning before energisation
            </span>
          </li>
          <li>
            <ClipboardIcon />
            <span>
              <strong>Written records</strong>
              Test results and reports you keep
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
