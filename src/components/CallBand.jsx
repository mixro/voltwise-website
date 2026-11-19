import { contact, images, whatsappLink } from '../data/site.js';
import { ChatIcon, PhoneIcon } from './Icons.jsx';

export default function CallBand({ title = 'Have a project or a problem with your power or network?' }) {
  return (
    <section className="band">
      <img className="band-img" src={images.linework} alt="" loading="lazy" />
      <div className="band-shade" />
      <div className="wrap band-inner">
        <div>
          <h2 className="title title-light">{title}</h2>
          <p className="lead lead-light">Talk to an engineer today — call us or send a WhatsApp message.</p>
        </div>
        <div className="band-actions">
          <a className="btn btn-red btn-lg" href={whatsappLink()} target="_blank" rel="noreferrer">
            <ChatIcon />
            WhatsApp us
          </a>
          <a className="btn btn-ghost btn-lg" href={contact.phoneHref}>
            <PhoneIcon />
            {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
