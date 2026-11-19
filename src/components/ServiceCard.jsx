import { whatsappLink } from '../data/site.js';
import { ArrowIcon, CheckIcon } from './Icons.jsx';

export default function ServiceCard({ service, number }) {
  return (
    <article id={service.id} className="service">
      <div className="service-media">
        <img src={service.image} alt={service.alt} loading="lazy" style={{ objectPosition: service.position || 'center' }} />
        <span className="service-num">{String(number).padStart(2, '0')}</span>
      </div>
      <div className="service-body">
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <ul className="checks">
          {service.scope.map((item) => (
            <li key={item}>
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
        <a
          className="link-arrow"
          href={whatsappLink(`Hello VOLTWISE, I would like a quote for ${service.title}.`)}
          target="_blank"
          rel="noreferrer"
        >
          Ask for a quote <ArrowIcon width={18} height={18} />
        </a>
      </div>
    </article>
  );
}
