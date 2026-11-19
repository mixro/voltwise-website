import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import Home from './pages/Home.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFound from './pages/NotFound.jsx';
import { useRouter } from './router-context.js';

const routes = {
  '/': { page: Home, title: 'VOLTWISE Engineering Limited | Electrical & ICT Engineering in Dar es Salaam' },
  '/services': { page: ServicesPage, title: 'Services | VOLTWISE Engineering' },
  '/about': { page: AboutPage, title: 'About | VOLTWISE Engineering' },
  '/team': { page: TeamPage, title: 'Team | VOLTWISE Engineering' },
  '/contact': { page: ContactPage, title: 'Contact | VOLTWISE Engineering' },
};

const notFound = { page: NotFound, title: 'Page not found | VOLTWISE Engineering' };

export default function App() {
  const { path } = useRouter();
  const route = routes[path] || notFound;
  const Page = route.page;

  useEffect(() => {
    document.title = route.title;
  }, [route.title]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Page />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
