import PageHero from '../components/PageHero.jsx';
import Contact from '../components/Contact.jsx';
import { images } from '../data/site.js';

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let's talk about your project."
        intro="Call, send a WhatsApp message, or use the form below."
        image={images.testingPanel}
        position="62% center"
      />
      <Contact />
    </>
  );
}
