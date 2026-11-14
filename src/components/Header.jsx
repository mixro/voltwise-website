import { useEffect, useState } from 'react';
import logoDark from '../assets/logo-dark.png';
import { contact, nav } from '../data/site.js';
import { CloseIcon, MenuIcon, PhoneIcon } from './Icons.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled || open ? ' is-solid' : ''}`}>
      <div className="wrap header-inner">
        <a href="#top" className="brand" onClick={close} aria-label="VOLTWISE — back to top">
          <img src={logoDark} alt="VOLTWISE — Sparking Change" />
        </a>

        <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a href={contact.phoneHref} className="btn btn-red nav-call" onClick={close}>
            <PhoneIcon width={18} height={18} />
            {contact.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
