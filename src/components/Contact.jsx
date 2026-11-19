import { useState } from 'react';
import { allServices, contact, whatsappLink } from '../data/site.js';
import { ChatIcon, PhoneIcon, PinIcon } from './Icons.jsx';

const empty = { name: '', phone: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState('');

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setError('');
  };

  // No backend: the form builds a WhatsApp message the visitor sends themselves.
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError('Please add your name and a short message.');
      return;
    }
    const details = [
      `Name: ${form.name.trim()}`,
      form.phone.trim() && `Phone: ${form.phone.trim()}`,
      form.service && `Service: ${form.service}`,
    ].filter(Boolean);
    const text = ['Hello VOLTWISE,', '', ...details, '', form.message.trim()].join('\n');
    window.open(whatsappLink(text), '_blank', 'noopener');
  };

  return (
    <section id="contact" className="section">
      <div className="wrap contact">
        <div className="contact-info">
          <span className="kicker">Reach us</span>
          <h2 className="title">Talk to an engineer.</h2>
          <p className="lead">Call, WhatsApp or send the form — it opens WhatsApp with your message ready to send.</p>

          <ul className="contact-list">
            <li>
              <span className="contact-icon">
                <PhoneIcon />
              </span>
              <div>
                <span className="contact-label">Call</span>
                <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <ChatIcon />
              </span>
              <div>
                <span className="contact-label">WhatsApp</span>
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  {contact.phoneDisplay}
                </a>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <PinIcon />
              </span>
              <div>
                <span className="contact-label">Office</span>
                <a href={contact.mapsUrl} target="_blank" rel="noreferrer">
                  {contact.location}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={submit} noValidate>
          <h3>Request a quote</h3>
          <div className="form-row">
            <label>
              <span>Your name *</span>
              <input type="text" autoComplete="name" value={form.name} onChange={update('name')} required />
            </label>
            <label>
              <span>Phone number</span>
              <input type="tel" autoComplete="tel" value={form.phone} onChange={update('phone')} />
            </label>
          </div>
          <label>
            <span>Service</span>
            <select value={form.service} onChange={update('service')}>
              <option value="">Choose a service</option>
              {allServices.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            <span>Message *</span>
            <textarea rows={5} value={form.message} onChange={update('message')} required placeholder="Tell us about the site and what you need." />
          </label>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="btn btn-red btn-lg btn-block">
            <ChatIcon />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
