import {
  FaClipboardList,
  FaHardHat,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaChartBar,
  FaTasks,
  FaFileContract,
  FaMoneyBillWave,
  FaBalanceScale,
  FaComments,
  FaDraftingCompass,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import management from "../assets/images/backgrounds/management.png";

let projectManagement = {
  slug: "project-management",

  breadcrumb: {
    trail: [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Services", href: "/services" },
    ],
    current: "Project Management",
  },

  hero: {
    badge: "Project Management",
    badgeIcon: FaClipboardList,
    title: "Manage Your",
    highlight: "Project With Confidence",
    description:
      "We oversee every phase of your construction project, keeping cost, quality, and schedule under control.",
    primaryButton: { label: "Request a Quote", href: "/contact" },
    secondaryButton: { label: "Our Projects", href: "/projects" },
    image:
      management,
    stats: [
      { id: 1, icon: FaHardHat, value: "13+", label: "Years Experience" },
      { id: 2, icon: FaShieldAlt, value: "350+", label: "Projects Managed" },
      { id: 3, icon: FaUsers, value: "98%", label: "Client Satisfaction" },
    ],
  },

  overview: {
    badge: "Overview",
    title: "Managing Projects,",
    highlight: "Delivering Results",
    paragraphs: [
      "Our project management team acts as the single point of accountability across design, procurement, and construction.",
      "We coordinate contractors, monitor budgets, and track schedules so stakeholders always know where a project stands.",
      "From risk management to quality control, we bring structure and transparency to every phase of the build.",
    ],
    image:
      management,
    features: [
      { id: 1, icon: FaChartBar, label: "Budget Control" },
      { id: 2, icon: FaUsers, label: "Experienced Team" },
      { id: 3, icon: FaClock, label: "On-Time Delivery" },
      { id: 4, icon: FaShieldAlt, label: "Transparent Process" },
    ],
  },

  benefits: {
    badge: "What We Offer",
    title: "Comprehensive Project Management",
    highlight: "Solutions",
    items: [
      {
        id: 1,
        icon: FaTasks,
        title: "Schedule Management",
        description: "Detailed timelines tracked and adjusted in real time.",
      },
      {
        id: 2,
        icon: FaMoneyBillWave,
        title: "Cost Control",
        description: "Budget monitoring to prevent overruns and surprises.",
      },
      { 
        id: 3,
        icon: FaFileContract,
        title: "Contract Administration",
        description: "Management of contracts across all project stakeholders.",
      },
      {
        id: 4,
        icon: FaBalanceScale,
        title: "Risk Management",
        description: "Proactive identification and mitigation of project risks.",
      },
      {
        id: 5,
        icon: FaShieldAlt,
        title: "Quality Assurance",
        description: "Ongoing inspections to maintain construction standards.",
      },
      {
        id: 6,
        icon: FaClipboardList,
        title: "Reporting & Documentation",
        description: "Clear, regular reporting for full project visibility.",
      },
    ],
  },

  process: {
    badge: "Our Process",
    title: "How We Manage Your",
    highlight: "Project",
    steps: [
      {
        id: 1,
        number: "01",
        icon: FaComments,
        title: "Consultation",
        description: "We understand your project scope, goals, and constraints.",
      },
      {
        id: 2,
        number: "02",
        icon: FaDraftingCompass,
        title: "Planning",
        description: "We build a detailed schedule, budget, and risk plan.",
      },
      {
        id: 3,
        number: "03",
        icon: FaHardHat,
        title: "Execution & Oversight",
        description: "We coordinate contractors and monitor progress daily.",
      },
      {
        id: 4,
        number: "04",
        icon: FaHandshake,
        title: "Handover",
        description: "We deliver a completed project with full documentation.",
      },
    ],
  },

  gallery: {
    badge: "Project Gallery",
    title: "Our Recently Managed",
    highlight: "Projects",
    images: [
      {
        id: 1,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/pm-gallery-1.jpg",
        alt: "Managed construction site",
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/pm-gallery-2.jpg",
        alt: "Completed mixed-use development",
      },
      {
        id: 3,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/pm-gallery-3.jpg",
        alt: "Coordinated infrastructure project",
      },
      {
        id: 4,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/pm-gallery-4.jpg",
        alt: "Multi-contractor build site",
      },
      {
        id: 5,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/pm-gallery-5.jpg",
        alt: "Finished project handover",
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
        question: "Do you manage projects you didn't design or build?",
        answer:
          "Yes, we offer standalone project management services for projects with independent architects and contractors.",
      },
      {
        id: 2,
        question: "How do you keep me updated on progress?",
        answer:
          "We provide regular progress reports, budget summaries, and scheduled check-ins throughout the project.",
      },
      {
        id: 3,
        question: "Can you manage multiple contractors at once?",
        answer:
          "Yes, coordinating multiple trades and contractors simultaneously is a core part of our project management service.",
      },
      {
        id: 4,
        question: "What happens if the project falls behind schedule?",
        answer:
          "We identify delays early, communicate causes transparently, and implement recovery plans to get back on track.",
      },
    ],
  },

  cta: {
    title: "Ready to Manage Your Next Project?",
    description:
      "Let's bring structure and confidence to your build. Get in touch with our team today for a free consultation.",
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

export default projectManagement;
