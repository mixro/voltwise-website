import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import About from './components/About.jsx';
import Team from './components/Team.jsx';
import CallBand from './components/CallBand.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#services">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Team />
        <CallBand />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
