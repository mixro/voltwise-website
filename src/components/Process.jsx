import { images, process } from '../data/site.js';

export default function Process() {
  return (
    <section id="process" className="section section-dark">
      <div className="wrap process">
        <div className="process-text">
          <span className="kicker kicker-light">How we work</span>
          <h2 className="title title-light">A clear process from first visit to handover.</h2>
          <p className="lead lead-light">
            You always know what happens next, what it costs and what you receive at the end.
          </p>
          <ol className="steps">
            {process.map((step, i) => (
              <li key={step.title} className="step">
                <span className="step-num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="process-media">
          <img src={images.panel} alt="Technician adjusting wires in an electrical control panel" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
