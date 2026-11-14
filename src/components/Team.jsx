import { team } from '../data/site.js';

function initials(name) {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

export default function Team() {
  return (
    <section id="team" className="section section-soft">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Our team</span>
          <h2 className="title">The people responsible for your project.</h2>
          <p className="lead">Clear roles mean clear accountability — from technical sign-off to site safety.</p>
        </div>
        <div className="team">
          {team.map((m) => (
            <div key={m.name} className="member">
              <span className="member-avatar" aria-hidden="true">
                {initials(m.name)}
              </span>
              <div>
                <strong>{m.name}</strong>
                <span>{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
