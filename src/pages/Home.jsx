import Hero from '../components/Hero.jsx';
import CallBand from '../components/CallBand.jsx';
import { ArrowIcon, CheckIcon } from '../components/Icons.jsx';
import { electricalServices, ictServices, images, process, why } from '../data/site.js';
import { Link } from '../Router.jsx';

function Pillar({ num, title, text, image, alt, items, to, dark }) {
  return (
    <article className={`pillar${dark ? ' pillar-dark' : ''}`}>
      <div className="pillar-media">
        <img src={image} alt={alt} loading="lazy" />
      </div>
      <div className="pillar-body">
        <span className="pillar-num">Pillar {num}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <ul className="checks">
          {items.map((s) => (
            <li key={s.id}>
              <CheckIcon />
              <Link to={`/services#${s.id}`}>{s.title}</Link>
            </li>
          ))}
        </ul>
        <Link className="link-arrow" to={to}>
          Explore services <ArrowIcon width={18} height={18} />
        </Link>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">What we do</span>
            <h2 className="title">Two pillars, one engineering team.</h2>
            <p className="lead">Use VOLTWISE for your power, your network — or both together on the same project.</p>
          </div>
          <div className="pillars">
            <Pillar
              num={1}
              title="Electrical Engineering"
              text="Power that is designed, installed, tested and documented properly."
              image={images.substation}
              alt="High-voltage substation"
              items={electricalServices}
              to="/services#electrical"
            />
            <Pillar
              num={2}
              title="ICT & Digital Solutions"
              text="Networks, protected power, security and smart technology."
              image={images.network}
              alt="Fibre patch cables connected to a network patch panel"
              items={ictServices}
              to="/services#ict"
              dark
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Why VOLTWISE</span>
            <h2 className="title">Engineering you can check.</h2>
          </div>
          <div className="why">
            {why.map((w) => (
              <div key={w.title} className="why-item">
                <svg width="24" height="36" viewBox="0 0 20 30" aria-hidden="true">
                  <path d="M14 0L2 17h7l-3 13L18 12h-7l3-12z" fill="#D7202A" />
                </svg>
                <strong>{w.title}</strong>
                <span>{w.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap steps-row-wrap">
          <div className="section-head section-head-row">
            <div>
              <span className="kicker">How we work</span>
              <h2 className="title">From first visit to handover.</h2>
            </div>
            <Link className="link-arrow" to="/about#process">
              More about our process <ArrowIcon width={18} height={18} />
            </Link>
          </div>
          <ol className="steps-row">
            {process.map((p, i) => (
              <li key={p.title}>
                <span className="steps-row-num">{i + 1}</span>
                <strong>{p.title}</strong>
                <span>{p.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallBand />
    </>
  );
}
