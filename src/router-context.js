import { createContext, useContext } from 'react';

// Minimal client-side router (no extra dependency).
export const RouterContext = createContext({ path: '/', navigate: () => {} });

export function useRouter() {
  return useContext(RouterContext);
}
