import { useEffect, useState } from 'react';
import logoDark from '../assets/logo-dark.png';
import { contact, nav } from '../data/site.js';
import { Link } from '../Router.jsx';
import { useRouter } from '../router-context.js';
import { CloseIcon, MenuIcon, PhoneIcon } from './Icons.jsx';

export default function Header() {
  const { path } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);
  const isActive = (to) => (to === '/' ? path === '/' : path === to || path.startsWith(`${to}/`));

  return (
    <header className={`header${scrolled || open ? ' is-solid' : ''}`}>
      <div className="wrap header-inner">
        <Link to="/" className="brand" onClick={close} aria-label="VOLTWISE — home">
          <img src={logoDark} alt="VOLTWISE — Sparking Change" />
        </Link>

        <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={close}
              className={isActive(item.to) ? 'is-active' : undefined}
              aria-current={isActive(item.to) ? 'page' : undefined}
            >
              {item.label}
            </Link>
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
