import { whatsappLink } from '../data/site.js';
import { ChatIcon } from './Icons.jsx';

export default function FloatingWhatsApp() {
  return (
    <a className="float-wa" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat with VOLTWISE on WhatsApp">
      <ChatIcon width={26} height={26} />
      <span className="float-wa-label">WhatsApp</span>
    </a>
  );
}
