import {
  FaBriefcase,
  FaHardHat,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaChair,
  FaWifi,
  FaBuilding,
  FaLayerGroup,
  FaParking,
  FaComments,
  FaDraftingCompass,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import office from "../assets/images/backgrounds/office.png";

let administrativeOffices = {
  slug: "administrative-offices",

  breadcrumb: {
    trail: [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Services", href: "/services" },
    ],
    current: "High-Profile Administrative Offices",
  },

  hero: {
    badge: "High-Profile Administrative Offices",
    badgeIcon: FaBriefcase,
    title: "Workspaces Built for",
    highlight: "Performance",
    description:
      "Modern office developments tailored for government agencies, institutions, and corporate organizations with efficient workspace planning.",
    primaryButton: { label: "Request a Quote", href: "/contact" },
    secondaryButton: { label: "Our Projects", href: "/projects" },
    image:
     office,
    stats: [
      { id: 1, icon: FaHardHat, value: "10+", label: "Years Experience" },
      { id: 2, icon: FaShieldAlt, value: "60+", label: "Offices Delivered" },
      { id: 3, icon: FaUsers, value: "97%", label: "Client Satisfaction" },
    ],
  },

  overview: {
    badge: "Overview",
    title: "Offices Designed for",
    highlight: "Efficiency",
    paragraphs: [
      "We design and build administrative offices that support how agencies and organizations actually operate day to day.",
      "Every layout is planned around workflow, accessibility, and long-term flexibility so the space grows with your team.",
      "From single-floor offices to multi-agency complexes, we manage the full build with minimal disruption to ongoing operations.",
    ],
    image:
      office,
    features: [
      { id: 1, icon: FaLayerGroup, label: "Space Planning" },
      { id: 2, icon: FaWifi, label: "Smart Infrastructure" },
      { id: 3, icon: FaClock, label: "On-Time Delivery" },
      { id: 4, icon: FaShieldAlt, label: "Transparent Process" },
    ],
  },

  benefits: {
    badge: "What We Offer",
    title: "Comprehensive Office",
    highlight: "Solutions",
    items: [
      {
        id: 1,
        icon: FaBuilding,
        title: "Government Offices",
        description: "Agency workspaces built for public sector operations.",
      },
      {
        id: 2,
        icon: FaBriefcase,
        title: "Corporate Offices",
        description: "Efficient, professional workspaces for organizations.",
      },
      {
        id: 3,
        icon: FaLayerGroup,
        title: "Multi-Agency Complexes",
        description: "Shared facilities designed for multiple institutions.",
      },
      {
        id: 4,
        icon: FaChair,
        title: "Workspace Fit-Outs",
        description: "Interior fit-outs tailored to team workflows.",
      },
      {
        id: 5,
        icon: FaWifi,
        title: "Smart Office Systems",
        description: "Integrated connectivity and building automation.",
      },
      {
        id: 6,
        icon: FaParking,
        title: "Facility Infrastructure",
        description: "Parking, access control, and support facilities.",
      },
    ],
  },

  process: {
    badge: "Our Process",
    title: "How We Build Your",
    highlight: "Office Space",
    steps: [
      {
        id: 1,
        number: "01",
        icon: FaComments,
        title: "Consultation",
        description: "We assess your team size, workflow, and space needs.",
      },
      {
        id: 2,
        number: "02",
        icon: FaDraftingCompass,
        title: "Design & Planning",
        description: "We create a layout optimized for your operations.",
      },
      {
        id: 3,
        number: "03",
        icon: FaHardHat,
        title: "Construction",
        description: "We build with precision and minimal disruption.",
      },
      {
        id: 4,
        number: "04",
        icon: FaHandshake,
        title: "Handover",
        description: "We deliver a fully operational office space.",
      },
    ],
  },

  gallery: {
    badge: "Project Gallery",
    title: "Our Recent Office",
    highlight: "Projects",
    images: [
      {
        id: 1,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/office-gallery-1.jpg",
        alt: "Modern administrative office",
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/office-gallery-2.jpg",
        alt: "Agency office complex",
      },
      {
        id: 3,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/office-gallery-3.jpg",
        alt: "Corporate office interior",
      },
      {
        id: 4,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/office-gallery-4.jpg",
        alt: "Multi-agency office building",
      },
      {
        id: 5,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/office-gallery-5.jpg",
        alt: "Office facility at dusk",
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
        question: "Can you build offices for multiple agencies in one complex?",
        answer:
          "Yes, we regularly design and build shared administrative complexes serving multiple agencies or departments.",
      },
      {
        id: 2,
        question: "Do you handle office fit-outs separately from construction?",
        answer:
          "Yes, we offer standalone interior fit-out services for existing office shells as well as full new builds.",
      },
      {
        id: 3,
        question: "How do you plan for future team growth?",
        answer:
          "We design flexible floor plans and infrastructure that can be reconfigured or expanded as your team scales.",
      },
      {
        id: 4,
        question: "Do you install smart building systems?",
        answer:
          "Yes, we integrate networking, access control, and building automation systems as part of our office builds.",
      },
    ],
  },

  cta: {
    title: "Ready to Build Your Office Space?",
    description:
      "Let's design a workspace built for how your team operates. Get in touch with our team today for a consultation.",
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

export default administrativeOffices;
