// All website text, contact details and photo paths live here.

export const contact = {
  phoneDisplay: '+255 622 739 599',
  phoneHref: 'tel:+255622739599',
  whatsappNumber: '255622739599',
  location: 'Hananasif, Kinondoni, Dar es Salaam, Tanzania',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hananasif%2C+Kinondoni%2C+Dar+es+Salaam',
};

export function whatsappLink(message = 'Hello VOLTWISE, I would like to ask about your services.') {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const company = {
  name: 'VOLTWISE Engineering Limited',
  tagline: 'Sparking Change',
  registration: 'Registered in Tanzania · Certificate of Incorporation No. 212141445',
};

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
];

// Photos are stored in public/images/ (free-to-use stock photos, no attribution required).
export const images = {
  hero: '/images/testing-panel.jpg',
  substation: '/images/substation.jpg',
  lvBoard: '/images/lv-board.jpg',
  testingMeter: '/images/testing-meter.jpg',
  testingPanel: '/images/testing-panel.jpg',
  audit: '/images/audit.jpg',
  linework: '/images/linework.jpg',
  network: '/images/ict-network.jpg',
  servers: '/images/ict-servers.jpg',
  cctv: '/images/ict-cctv.jpg',
  automation: '/images/ict-automation.jpg',
  web: '/images/ict-web.jpg',
  components: '/images/ict-components.jpg',
};

export const electricalServices = [
  {
    id: 'lv-construction',
    title: 'Low-Voltage Construction',
    summary: 'Design, installation and supervision of low-voltage electrical systems — done safely, to standard and ready for inspection.',
    image: images.lvBoard,
    alt: 'Electrical distribution board with circuit breakers',
    scope: [
      'Electrical design and load calculations',
      'Wiring for homes, offices, shops and industrial sites',
      'Distribution boards, sockets, lighting and earthing',
      'Site supervision through to handover',
    ],
  },
  {
    id: 'testing-commissioning',
    title: 'Testing & Commissioning',
    summary: 'Testing and commissioning of low-voltage (LV) and high-tension (HT) equipment before handover and energisation.',
    image: images.testingMeter,
    alt: 'Electrician testing connections with a multimeter',
    position: 'center 30%',
    scope: [
      'Insulation resistance, continuity and earth tests',
      'Protection and switchgear function checks',
      'Commissioning of new installations and equipment',
      'Clear test records for every circuit',
    ],
  },
  {
    id: 'auditing',
    title: 'Electrical Auditing',
    summary: 'Independent inspection of existing installations for safety, compliance and energy efficiency, with a written report you can act on.',
    image: images.audit,
    alt: 'Engineer in high-visibility clothing inspecting a control panel',
    position: '70% center',
    scope: [
      'Safety and compliance inspection',
      'Identification of faults and hazards',
      'Energy-efficiency review',
      'Written audit report with priorities',
    ],
  },
];

export const ictServices = [
  {
    id: 'networking',
    title: 'Networking & Structured Cabling',
    summary: 'Structured cabling and local networks for offices, schools, hotels and industrial sites.',
    image: images.network,
    alt: 'Fibre patch cables connected to a network patch panel',
    scope: ['Data cabling, patch panels and outlets', 'LAN and Wi-Fi installation and set-up', 'Racks, cabinets and cable management', 'Testing, labelling and documentation'],
  },
  {
    id: 'power-for-ict',
    title: 'Power for ICT',
    summary: 'Clean, protected and reliable power for server rooms, network equipment and critical systems.',
    image: images.servers,
    alt: 'Server blades in a data centre rack',
    position: '30% center',
    scope: ['UPS sizing, installation and set-up', 'Earthing and bonding for ICT equipment', 'Surge protection', 'Dedicated circuits for server rooms'],
  },
  {
    id: 'security',
    title: 'Security Systems',
    summary: 'CCTV, access control and alarm systems that protect people, premises and equipment.',
    image: images.cctv,
    alt: 'Two CCTV cameras mounted under a roof',
    position: 'center 40%',
    scope: ['CCTV installation and recording', 'Access control and door entry', 'Intruder alarms and intercoms', 'Cabling, power and remote viewing'],
  },
  {
    id: 'iot',
    title: 'IoT & Automation',
    summary: 'Embedded and microcontroller-based solutions for monitoring, control and automation.',
    image: images.automation,
    alt: 'Automation rig with sensors, valves and terminal blocks',
    scope: ['Sensor-based monitoring', 'Microcontroller design and prototyping', 'Control and automation solutions', 'Simulation before anything is built'],
  },
  {
    id: 'web',
    title: 'Web & Digital',
    summary: 'Websites and digital presence for businesses that want to be found and trusted online.',
    image: images.web,
    alt: 'Code on a laptop screen',
    position: '35% center',
    scope: ['Business website design and development', 'Fast, mobile-friendly websites', 'Social media set-up and content', 'Hosting and deployment'],
  },
  {
    id: 'components',
    title: 'Electronic Components Supply',
    summary: 'Supply of electronic components for students, makers, technicians and businesses.',
    image: images.components,
    alt: 'Close-up of memory modules and computer components',
    scope: ['Microcontrollers and development boards', 'Sensors and modules', 'Passive and active components', 'Advice on choosing the right parts'],
  },
];

export const allServices = [...electricalServices, ...ictServices];

export const integrated = [
  { title: 'Server & network rooms', text: 'Dedicated power, earthing, UPS and surge protection, together with racks, cabling and network set-up.' },
  { title: 'Smart & secure buildings', text: 'Electrical installation, network and CCTV or access control planned as one system from the start.' },
  { title: 'Monitoring & automation', text: 'Sensors and controllers that monitor energy, equipment and conditions — wired and powered correctly.' },
];

export const sectors = [
  { title: 'Residential', text: 'Houses and apartments — new wiring, rewiring, inspections, security and home networks.' },
  { title: 'Commercial', text: 'Offices, shops, schools and hotels that need reliable power, networks and security.' },
  { title: 'Industrial', text: 'Workshops, plants and facilities with LV and HT equipment, automation and monitoring.' },
];

export const process = [
  { title: 'Consult & survey', text: 'We listen to what you need, visit the site and assess the existing power and network.' },
  { title: 'Design & quote', text: 'You receive a clear design and a written quotation before any work starts.' },
  { title: 'Build & test', text: 'Our engineers install to standard, then test every circuit, cable and device.' },
  { title: 'Handover & support', text: 'We commission the system, hand over records and documentation, and stay available for support.' },
];

export const why = [
  { title: 'Engineering-led', text: 'Every job is designed, supervised and checked by engineers.' },
  { title: 'Power and data, one team', text: 'Electrical and ICT work planned together — one contractor, one point of accountability.' },
  { title: 'Safety first', text: 'Independent safety oversight and stop-work authority on every site.' },
  { title: 'Tested and documented', text: 'Test records, labelling and written reports come with every job.' },
];

export const vision =
  "To be Tanzania's most trusted electrical and ICT engineering partner, sparking change through safe, reliable and innovative power and technology solutions.";

export const mission =
  'To design, build, test and support electrical and ICT systems to the highest professional and safety standards, delivering dependable power and connectivity to homes, businesses and industry, and creating lasting value for our clients.';

export const values = [
  { title: 'Safety first', text: 'No job is so urgent that it cannot be done safely. Every member can stop unsafe work.' },
  { title: 'Technical excellence', text: 'Every design, installation and test meets recognised standards and is checked before handover.' },
  { title: 'Integrity', text: 'Honest advice, honest pricing and honest reporting to every client.' },
  { title: 'Accountability', text: 'Every task has an owner, and we answer for our results.' },
  { title: 'Innovation', text: 'We keep learning and look for smarter, more efficient ways to deliver power and technology.' },
];

export const team = [
  { name: 'Joseph Christopher Chongola', role: 'Managing Director', text: 'Sets direction and strategy, approves major projects and represents VOLTWISE to clients and partners.' },
  { name: 'Michael Paul Albert', role: 'Technical Director', text: 'Sets technical standards and procedures and approves major designs.' },
  { name: 'Raphael Evod', role: 'Manager', text: 'Plans people and resources, tracks schedules and procurement, and coordinates delivery.' },
  { name: 'Ramadhani Kimbanga', role: 'Principal Engineer', text: 'Leads the engineering team and checks designs, calculations and drawings.' },
  { name: 'Bryan Elia', role: 'Safety Officer', text: 'Leads risk assessments, toolbox talks and inspections, with authority to stop unsafe work.' },
  { name: 'Doto Mihambo Seleli', role: 'Accountant', text: 'Manages financial records, invoicing, budgets and project cost control.' },
  { name: 'Mtaki Marobo', role: 'Disciplinary & Administration Officer', text: 'Oversees administration, attendance and professional conduct.' },
];

export const engineers = ['Daudi Mgeni', 'Elia Mlowe', 'Juma Abdallah Chikoyo', 'Shadrack Mamkwe'];
