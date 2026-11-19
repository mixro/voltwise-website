import PageHero from '../components/PageHero.jsx';
import { engineers, images, team } from '../data/site.js';
import { Link } from '../Router.jsx';

function initials(name) {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        kicker="Our team"
        title="The people responsible for your project."
        intro="Clear roles mean clear accountability — from technical sign-off to site safety."
        image={images.linework}
        position="65% 30%"
      />

      <section className="section">
        <div className="wrap">
          <div className="team">
            {team.map((m) => (
              <div key={m.name} className="member">
                <span className="member-avatar" aria-hidden="true">
                  {initials(m.name)}
                </span>
                <div className="member-text">
                  <span className="member-role">{m.role}</span>
                  <strong>{m.name}</strong>
                  <span>{m.text}</span>
                </div>
              </div>
            ))}
            <div className="member member-dark">
              <div className="member-text">
                <span className="member-role">Engineering team</span>
                <strong>{engineers.join(' · ')}</strong>
                <span>Site surveys, design, installation, testing and commissioning across electrical and ICT work.</span>
              </div>
            </div>
          </div>

          <div className="team-cta">
            <p>Want to talk to one of our engineers about your project?</p>
            <Link className="btn btn-red" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
