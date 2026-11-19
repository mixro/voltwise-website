import PageHero from '../components/PageHero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CallBand from '../components/CallBand.jsx';
import { electricalServices, ictServices, images, integrated, sectors } from '../data/site.js';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our services"
        title="Electrical engineering and ICT solutions."
        intro="Nine services across two pillars — every one engineered, tested and documented."
        image={images.substation}
      />

      <section id="electrical" className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Pillar 1</span>
            <h2 className="title">Electrical engineering</h2>
            <p className="lead">From a new installation to an inspection of an existing one.</p>
          </div>
          <div className="services">
            {electricalServices.map((s, i) => (
              <ServiceCard key={s.id} service={s} number={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section id="ict" className="section section-soft">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Pillar 2</span>
            <h2 className="title">ICT &amp; digital solutions</h2>
            <p className="lead">Networks, protected power, security systems, automation and digital services.</p>
          </div>
          <div className="services">
            {ictServices.map((s, i) => (
              <ServiceCard key={s.id} service={s} number={i + 4} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Integrated solutions</span>
            <h2 className="title">Where power meets data.</h2>
            <p className="lead">
              Many ICT problems start with power, and most power projects now include data. Because we handle both, you deal
              with one accountable team.
            </p>
          </div>
          <div className="combos">
            {integrated.map((c) => (
              <div key={c.title} className="combo">
                <strong>{c.title}</strong>
                <span>{c.text}</span>
              </div>
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

      <CallBand title="Need a quote for any of these services?" />
    </>
  );
}
