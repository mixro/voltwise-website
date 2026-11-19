import PageHero from '../components/PageHero.jsx';
import Process from '../components/Process.jsx';
import CallBand from '../components/CallBand.jsx';
import { company, images, mission, values, vision } from '../data/site.js';

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About VOLTWISE"
        title="Engineers who take power and connectivity seriously."
        intro="A Tanzanian engineering company based in Dar es Salaam, incorporated on 30 October 2026."
        image={images.audit}
        position="70% center"
      />

      <section className="section">
        <div className="wrap about">
          <div className="about-media">
            <img src={images.testingMeter} alt="Electrician testing connections with a multimeter" loading="lazy" />
            <div className="about-badge">
              <span className="about-badge-tag">{company.tagline}</span>
              <span>Registered engineering company in Tanzania</span>
            </div>
          </div>

          <div className="about-text">
            <span className="kicker">Who we are</span>
            <h2 className="title">One team for power and data.</h2>
            <p className="lead">
              {company.name} delivers electrical engineering and ICT solutions — from power installation, testing and
              auditing to networking, security systems, automation and digital services.
            </p>
            <p className="body-text">
              Modern organisations depend on reliable power and reliable connectivity working together. We bring both under
              one engineering team, so the systems that power your equipment and the networks that connect it are designed,
              installed and tested to the same standard — with honest, written reporting to every client.
            </p>

            <div className="vm">
              <div>
                <span className="vm-label">Our vision</span>
                <p>{vision}</p>
              </div>
              <div>
                <span className="vm-label">Our mission</span>
                <p>{mission}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="section-head values-head">
            <span className="kicker">What we stand for</span>
            <h2 className="title">Our core values</h2>
          </div>
          <div className="values">
            {values.map((v) => (
              <div key={v.title} className="value">
                <strong>{v.title}</strong>
                <span>{v.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      <section className="section">
        <div className="wrap">
          <div className="safety">
            <div>
              <span className="kicker">Health, safety &amp; quality</span>
              <h2 className="title">Safety is our first value.</h2>
              <p className="lead">
                Every job is planned, checked and recorded. Our Safety Officer works outside the engineering line and reports
                directly to the Managing Director, with the authority to stop any work that is not safe.
              </p>
            </div>
            <ul className="safety-list">
              <li>Risk assessment and Job Safety Analysis before work begins</li>
              <li>Safe isolation and lock-out before work on any circuit</li>
              <li>Correct personal protective equipment on every site</li>
              <li>Every circuit and network point tested before handover</li>
              <li>Test records, labelling and documentation for every job</li>
            </ul>
          </div>
        </div>
      </section>

      <CallBand />
    </>
  );
}
