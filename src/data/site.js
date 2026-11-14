// All website text and contact details live here.

export const contact = {
  phoneDisplay: '+255 622 739 599',
  phoneHref: 'tel:+255622739599',
  whatsappNumber: '255622739599',
  location: 'Hananasif, Kinondoni, Dar es Salaam, Tanzania',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hananasif%2C+Kinondoni%2C+Dar+es+Salaam',
};

export function whatsappLink(message = 'Hello VOLTWISE, I would like to ask about your electrical services.') {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const company = {
  name: 'VOLTWISE Engineering Limited',
  tagline: 'Sparking Change',
  registration: 'Registered in Tanzania · Certificate of Incorporation No. 212141445',
};

export const nav = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How we work' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

// Photos: free to use under the Pexels License (https://www.pexels.com/license/).
// To host them yourself, save the files in public/images/ and change the URLs to '/images/<file>.jpg'.
const pexels = (id, w = 1600) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  hero: pexels(33531830, 2000),
  construction: pexels(5691588, 1200),
  testing: pexels(34054464, 1200),
  auditing: pexels(17842843, 1200),
  about: pexels(236089, 1400),
  field: pexels(17018103, 2000),
  panel: pexels(33694019, 1200),
};

export const services = [
  {
    id: 'construction',
    title: 'Low-Voltage Construction',
    summary: 'Design, installation and supervision of low-voltage electrical systems — done safely, to standard and ready for inspection.',
    image: 'construction',
    alt: 'Electrician installing sockets and switches on a wall',
    scope: [
      'Electrical design and load calculations',
      'Wiring for homes, offices, shops and industrial sites',
      'Distribution boards, sockets, lighting and earthing',
      'Site supervision through to handover',
    ],
  },
  {
    id: 'testing',
    title: 'Testing & Commissioning',
    summary: 'Testing and commissioning of low-voltage (LV) and high-tension (HT) equipment before handover and energisation.',
    image: 'testing',
    alt: 'Electrician testing connections in an open electrical panel with a multimeter',
    scope: [
      'Insulation, continuity and earth tests',
      'Protection and switchgear function checks',
      'Commissioning of new installations and equipment',
      'Clear test records for every circuit',
    ],
  },
  {
    id: 'auditing',
    title: 'Electrical Auditing',
    summary: 'Independent inspection of existing installations for safety, compliance and energy efficiency, with a written report you can act on.',
    image: 'auditing',
    alt: 'Engineer inspecting an industrial electrical control panel',
    scope: [
      'Safety and compliance inspection',
      'Identification of faults and hazards',
      'Energy-efficiency recommendations',
      'Written audit report with priorities',
    ],
  },
];

export const sectors = [
  { title: 'Residential', text: 'Houses and apartments — new wiring, rewiring, inspections and upgrades.' },
  { title: 'Commercial', text: 'Offices, shops, schools and hotels that need reliable, compliant power.' },
  { title: 'Industrial', text: 'Workshops, plants and facilities with LV and HT equipment to install, test and maintain.' },
];

export const process = [
  { title: 'Consult & survey', text: 'We listen to what you need, visit the site and assess the existing installation.' },
  { title: 'Design & quote', text: 'You receive a clear design and a written quotation before any work starts.' },
  { title: 'Build & test', text: 'Our engineers install to standard, then test every circuit and piece of equipment.' },
  { title: 'Handover & report', text: 'We commission the system, hand over test records and stay available for support.' },
];

export const vision =
  "To be Tanzania's most trusted electrical engineering partner, sparking change through safe, reliable and innovative power solutions.";

export const mission =
  'To design, build, test, commission and audit electrical systems to the highest professional and safety standards, delivering dependable power to homes, businesses and industry, and creating lasting value for our clients.';

export const values = [
  { title: 'Safety first', text: 'No job is so urgent that it cannot be done safely. Every member can stop unsafe work.' },
  { title: 'Technical excellence', text: 'Every design, installation and test meets recognised standards and is checked before handover.' },
  { title: 'Integrity', text: 'Honest advice, honest pricing and honest reporting to every client.' },
  { title: 'Accountability', text: 'Every task has an owner, and we answer for our results.' },
  { title: 'Innovation', text: 'We keep learning and look for smarter, more efficient ways to deliver power.' },
];

export const team = [
  { name: 'Joseph Christopher Chongola', role: 'Managing Director' },
  { name: 'Michael Paul Albert', role: 'Technical Director' },
  { name: 'Raphael Evod', role: 'Manager' },
  { name: 'Ramadhani Kimbanga', role: 'Principal Engineer' },
  { name: 'Bryan Elia', role: 'Safety Officer' },
  { name: 'Doto Mihambo Seleli', role: 'Accountant' },
];
