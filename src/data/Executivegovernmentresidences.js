import {
  FaLandmark,
  FaHardHat,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaHome,
  FaLock,
  FaGem,
  FaTree,
  FaCamera,
  FaComments,
  FaDraftingCompass,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import governmentImage from "../assets/images/backgrounds/government.png";
import interior from "../assets/images/backgrounds/interior.png";
import residentialImage from "../assets/images/backgrounds/residentialImage.png";

let executiveGovernmentResidences = {
  slug: "executive-government-residences",

  breadcrumb: {
    trail: [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Services", href: "/services" },
    ],
    current: "Executive Government Residences",
  },

  hero: {
    badge: "Executive Government Residences",
    badgeIcon: FaLandmark,
    title: "Residences Built for",
    highlight: "Office & Distinction",
    description:
      "We design and construct premium government residences that combine security, luxury, and modern architectural excellence.",
    primaryButton: { label: "Request a Quote", href: "/contact" },
    secondaryButton: { label: "Our Projects", href: "/projects" },
    image: governmentImage,
    stats: [
      { id: 1, icon: FaHardHat, value: "12+", label: "Years Experience" },
      { id: 2, icon: FaShieldAlt, value: "40+", label: "Residences Delivered" },
      { id: 3, icon: FaUsers, value: "100%", label: "Client Satisfaction" },
    ],
  },

  overview: {
    badge: "Overview",
    title: "Residences That Reflect",
    highlight: "Authority & Trust",
    paragraphs: [
      "Executive government residences require a rare combination of discretion, security, and architectural stature — we deliver all three.",
      "Every residence is built to strict protocol and security specifications while remaining a dignified, comfortable home for its occupants.",
      "We manage the full process end-to-end, coordinating with government agencies and security consultants at every stage.",
    ],
    image: governmentImage,
    features: [
      { id: 1, icon: FaLock, label: "Security Integration" },
      { id: 2, icon: FaGem, label: "Premium Finishing" },
      { id: 3, icon: FaClock, label: "On-Time Delivery" },
      { id: 4, icon: FaShieldAlt, label: "Full Confidentiality" },
    ],
  },

  benefits: {
    badge: "What We Offer",
    title: "Comprehensive Residence",
    highlight: "Solutions",
    items: [
      {
        id: 1,
        icon: FaLandmark,
        title: "Executive Residences",
        description: "Purpose-built homes for senior government officeholders.",
      },
      {
        id: 2,
        icon: FaLock,
        title: "Security Architecture",
        description: "Integrated perimeter and structural security planning.",
      },
      {
        id: 3,
        icon: FaGem,
        title: "Luxury Interiors",
        description: "Premium finishing befitting distinguished occupants.",
      },
      {
        id: 4,
        icon: FaTree,
        title: "Landscaped Grounds",
        description: "Private, secured outdoor spaces designed for comfort.",
      },
      {
        id: 5,
        icon: FaCamera,
        title: "Surveillance Systems",
        description: "Discreet, integrated monitoring and access control.",
      },
      {
        id: 6,
        icon: FaHome,
        title: "Guest & Staff Quarters",
        description: "Purpose-designed accompanying residential facilities.",
      },
    ],
  },

  process: {
    badge: "Our Process",
    title: "How We Deliver Your",
    highlight: "Residence",
    steps: [
      {
        id: 1,
        number: "01",
        icon: FaComments,
        title: "Consultation",
        description: "We review protocol, security, and residency requirements.",
      },
      {
        id: 2,
        number: "02",
        icon: FaDraftingCompass,
        title: "Design & Planning",
        description: "We develop a design that balances security and comfort.",
      },
      {
        id: 3,
        number: "03",
        icon: FaHardHat,
        title: "Construction",
        description: "We build under strict confidentiality and quality control.",
      },
      {
        id: 4,
        number: "04",
        icon: FaHandshake,
        title: "Handover",
        description: "We deliver a fully secured, finished residence.",
      },
    ],
  },

  gallery: {
    badge: "Project Gallery",
    title: "Our Recent Residence",
    highlight: "Projects",
    images: [
      {
        id: 1,
        src: residentialImage,
        alt: "Executive residence exterior",
      },
      {
        id: 2,
        src: interior,
        alt: "Secured residential grounds",
      },
      {
        id: 3,
        src: governmentImage,
        alt: "Government residence interior",
      },
      {
        id: 4,
        src: governmentImage,
        alt: "Landscaped residence grounds",
      },
      {
        id: 5,
        src: governmentImage,
        alt: "Executive residence at dusk",
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
        question: "How do you handle security requirements?",
        answer:
          "We work directly with security consultants and government agencies to integrate protocol-compliant security infrastructure from the design phase onward.",
      },
      {
        id: 2,
        question: "Is confidentiality guaranteed on these projects?",
        answer:
          "Yes, all executive residence projects are handled under strict confidentiality agreements with vetted personnel only.",
      },
      {
        id: 3,
        question: "Can these residences be customized per occupant?",
        answer:
          "Yes, layouts and finishing can be tailored to the specific needs and preferences of the officeholder or agency.",
      },
      {
        id: 4,
        question: "How long does a residence project typically take?",
        answer:
          "Timelines range from 10 to 18 months depending on scale, security specifications, and site conditions.",
      },
    ],
  },

  cta: {
    title: "Ready to Build a Distinguished Residence?",
    description:
      "Let's discuss your executive residence requirements. Get in touch with our team today for a confidential consultation.",
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

export default executiveGovernmentResidences;
