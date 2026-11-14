import { images, sectors, services, whatsappLink } from '../data/site.js';
import { ArrowIcon, CheckIcon } from './Icons.jsx';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">What we do</span>
          <h2 className="title">Three services, one standard: done right.</h2>
          <p className="lead">
            From a new installation to an inspection of an existing one, every VOLTWISE job is engineered, tested and
            documented.
          </p>
        </div>

        <div className="services">
          {services.map((s, i) => (
            <article key={s.id} className="service">
              <div className="service-media">
                <img src={images[s.image]} alt={s.alt} loading="lazy" />
                <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="service-body">
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <ul className="checks">
                  {s.scope.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  className="link-arrow"
                  href={whatsappLink(`Hello VOLTWISE, I would like a quote for ${s.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask for a quote <ArrowIcon width={18} height={18} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="sectors">
          <h3 className="sectors-title">Who we work for</h3>
          <div className="sectors-grid">
            {sectors.map((s) => (
              <div key={s.title} className="sector">
                <strong>{s.title}</strong>
                <span>{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
