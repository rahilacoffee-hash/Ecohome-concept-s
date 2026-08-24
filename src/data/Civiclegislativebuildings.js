import {
  FaBuilding,
  FaHardHat,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaFlag,
  FaGavel,
  FaLandmark,
  FaUniversity,
  FaBalanceScale,
  FaComments,
  FaDraftingCompass,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import legislative from "../assets/images/backgrounds/legislative.png";

let civicLegislativeBuildings = {
  slug: "civic-legislative-buildings",

  breadcrumb: {
    trail: [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Services", href: "/services" },
    ],
    current: "Civic & Legislative Buildings",
  },

  hero: {
    badge: "Civic & Legislative Buildings",
    badgeIcon: FaBuilding,
    title: "Buildings That Serve",
    highlight: "The Public Good",
    description:
      "Construction of ministries, secretariats, legislative complexes, and public institutions built for functionality, durability, and national pride.",
    primaryButton: { label: "Request a Quote", href: "/contact" },
    secondaryButton: { label: "Our Projects", href: "/projects" },
    image:
        legislative,
    stats: [
      { id: 1, icon: FaHardHat, value: "14+", label: "Years Experience" },
      { id: 2, icon: FaShieldAlt, value: "25+", label: "Civic Buildings Delivered" },
      { id: 3, icon: FaUsers, value: "98%", label: "Client Satisfaction" },
    ],
  },

  overview: {
    badge: "Overview",
    title: "Institutions Built to",
    highlight: "Last Generations",
    paragraphs: [
      "Civic and legislative buildings carry national significance — we build them to a standard that reflects that weight.",
      "From ministries to secretariats and legislative chambers, our projects are engineered for durability, accessibility, and public trust.",
      "We coordinate closely with government stakeholders throughout design and construction to meet institutional and regulatory standards.",
    ],
    image:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/civic-overview.jpg",
    features: [
      { id: 1, icon: FaFlag, label: "National Standards" },
      { id: 2, icon: FaUsers, label: "Experienced Team" },
      { id: 3, icon: FaClock, label: "On-Time Delivery" },
      { id: 4, icon: FaShieldAlt, label: "Transparent Process" },
    ],
  },

  benefits: {
    badge: "What We Offer",
    title: "Comprehensive Civic",
    highlight: "Solutions",
    items: [
      {
        id: 1,
        icon: FaLandmark,
        title: "Ministries & Secretariats",
        description: "Government office complexes built for scale and function.",
      },
      {
        id: 2,
        icon: FaGavel,
        title: "Legislative Complexes",
        description: "Chambers and assembly halls built to institutional standard.",
      },
      {
        id: 3,
        icon: FaBalanceScale,
        title: "Judicial Buildings",
        description: "Courthouses and tribunals designed for order and dignity.",
      },
      {
        id: 4,
        icon: FaUniversity,
        title: "Public Institutions",
        description: "Civic facilities that serve communities long-term.",
      },
      {
        id: 5,
        icon: FaBuilding,
        title: "Administrative Complexes",
        description: "Multi-agency office buildings built for efficiency.",
      },
      {
        id: 6,
        icon: FaFlag,
        title: "Ceremonial Facilities",
        description: "Spaces designed for state functions and public events.",
      },
    ],
  },

  process: {
    badge: "Our Process",
    title: "How We Build Your",
    highlight: "Civic Project",
    steps: [
      {
        id: 1,
        number: "01",
        icon: FaComments,
        title: "Consultation",
        description: "We review institutional requirements and regulatory scope.",
      },
      {
        id: 2,
        number: "02",
        icon: FaDraftingCompass,
        title: "Design & Planning",
        description: "We develop plans aligned with national building standards.",
      },
      {
        id: 3,
        number: "03",
        icon: FaHardHat,
        title: "Construction",
        description: "We build with discipline, safety, and quality oversight.",
      },
      {
        id: 4,
        number: "04",
        icon: FaHandshake,
        title: "Handover",
        description: "We deliver a fully commissioned public institution.",
      },
    ],
  },

  gallery: {
    badge: "Project Gallery",
    title: "Our Recent Civic",
    highlight: "Projects",
    images: [
      {
        id: 1,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/civic-gallery-1.jpg",
        alt: "Government ministry building",
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/civic-gallery-2.jpg",
        alt: "Legislative complex exterior",
      },
      {
        id: 3,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/civic-gallery-3.jpg",
        alt: "Public institution facade",
      },
      {
        id: 4,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/civic-gallery-4.jpg",
        alt: "Secretariat complex",
      },
      {
        id: 5,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/civic-gallery-5.jpg",
        alt: "Courthouse building",
      },
    ],
  },

  faq: {
    badge: "FAQs",
    title: "Frequently Asked",
    highlight: "Questions",
    questions: [
      {
        id: 1,
        question: "Do you handle government procurement requirements?",
        answer:
          "Yes, we're experienced with public tender processes, compliance documentation, and government procurement standards.",
      },
      {
        id: 2,
        question: "How long does a civic building project take?",
        answer:
          "Timelines range from 18 to 36 months depending on the scale and complexity of the institutional building.",
      },
      {
        id: 3,
        question: "Can you work on projects with multiple government stakeholders?",
        answer:
          "Yes, coordinating across ministries, agencies, and regulatory bodies is a core part of how we deliver civic projects.",
      },
      {
        id: 4,
        question: "Are these buildings built to accessibility standards?",
        answer:
          "Yes, all civic and legislative buildings are designed to meet public accessibility and safety codes.",
      },
    ],
  },

  cta: {
    title: "Ready to Build a Civic Landmark?",
    description:
      "Let's discuss your civic or legislative building project. Get in touch with our team today for a consultation.",
    button: { label: "Get a Free Quote", href: "/contact" },
    contacts: [
      { id: 1, icon: FaPhoneAlt, label: "Call Us", value: "+1 (555) 123-4567" },
      { id: 2, icon: FaEnvelope, label: "Email Us", value: "info@construct.com" },
      {
        id: 3,
        icon: FaMapMarkerAlt,
        label: "Visit Us",
        value: "123 Construction St, Building City, BC 12345",
      },
    ],
  },
};

export default civicLegislativeBuildings;
