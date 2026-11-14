import { company, images, mission, values, vision } from '../data/site.js';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about">
        <div className="about-media">
          <img src={images.about} alt="High-voltage substation with transformers and power lines" loading="lazy" />
          <div className="about-badge">
            <span className="about-badge-tag">{company.tagline}</span>
            <span>Registered engineering company in Tanzania</span>
          </div>
        </div>

        <div className="about-text">
          <span className="kicker">About VOLTWISE</span>
          <h2 className="title">Engineers who take power seriously.</h2>
          <p className="lead">
            {company.name} is a Tanzanian electrical engineering company based in Dar es Salaam. We bring engineering
            discipline to every installation, test and inspection — so the power you depend on is safe today and
            reliable for years.
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
  );
}
