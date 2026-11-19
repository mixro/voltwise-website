import { useCallback, useEffect, useMemo, useState } from 'react';
import { RouterContext, useRouter } from './router-context.js';

function normalise(path) {
  if (!path) return '/';
  const clean = path.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

function scrollToHash(hash) {
  if (!hash) {
    window.scrollTo({ top: 0 });
    return;
  }
  // Wait for the new page to render before scrolling to the section.
  requestAnimationFrame(() => {
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0 });
  });
}

export function Router({ children }) {
  const [path, setPath] = useState(() => normalise(window.location.pathname));

  useEffect(() => {
    // Opened directly with a section link (e.g. /services#ict): scroll once the page has rendered.
    if (window.location.hash) scrollToHash(window.location.hash.slice(1));
    const onPop = () => setPath(normalise(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to) => {
    const [rawPath, hash = ''] = to.split('#');
    const next = normalise(rawPath || window.location.pathname);
    const url = hash ? `${next}#${hash}` : next;
    if (url !== window.location.pathname + window.location.hash) {
      window.history.pushState({}, '', url);
    }
    setPath(next);
    scrollToHash(hash);
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

// Internal link: same-tab navigation without a page reload.
export function Link({ to, onClick, children, ...rest }) {
  const { navigate } = useRouter();
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  );
}
