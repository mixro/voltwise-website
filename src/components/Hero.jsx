import { contact, images, whatsappLink } from '../data/site.js';
import { Link } from '../Router.jsx';
import { ArrowIcon, ChatIcon, ClipboardIcon, GaugeIcon, PhoneIcon, ShieldIcon } from './Icons.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero-img" src={images.hero} alt="" fetchPriority="high" style={{ objectPosition: '62% center' }} />
      <div className="hero-shade" />
      <div className="wrap hero-inner">
        <span className="kicker kicker-light">Electrical &amp; ICT engineering · Dar es Salaam</span>
        <h1 className="hero-title">
          Power and connectivity, <span className="red">engineered properly.</span>
        </h1>
        <p className="hero-lead">
          VOLTWISE Engineering designs, installs, tests and supports electrical and ICT systems for homes, businesses and
          industry across Tanzania.
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
          <Link className="btn btn-link btn-lg" to="/services">
            Our services <ArrowIcon width={18} height={18} />
          </Link>
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
              <strong>Tested before handover</strong>
              Circuits, equipment and network points
            </span>
          </li>
          <li>
            <ClipboardIcon />
            <span>
              <strong>Written records</strong>
              Test results and documentation you keep
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
