import {
  FaTrophy,
  FaHardHat,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaStore,
  FaRunning,
  FaBusAlt,
  FaLightbulb,
  FaChartLine,
  FaComments,
  FaDraftingCompass,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import stadium from "../assets/images/backgrounds/stadium.png";

let urbanMarketStadiumDevelopment = {
  slug: "urban-market-stadium-development",

  breadcrumb: {
    trail: [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Services", href: "/services" },
    ],
    current: "Urban Market & Stadium Development",
  },

  hero: {
    badge: "Urban Market & Stadium Development",
    badgeIcon: FaTrophy,
    title: "Infrastructure That Drives",
    highlight: "Community Growth",
    description:
      "Large-scale market complexes, sports facilities, and recreational infrastructure that promote commerce, investment, and community development.",
    primaryButton: { label: "Request a Quote", href: "/contact" },
    secondaryButton: { label: "Our Projects", href: "/projects" },
    image:
      stadium,
    stats: [
      { id: 1, icon: FaHardHat, value: "11+", label: "Years Experience" },
      { id: 2, icon: FaShieldAlt, value: "18+", label: "Complexes Delivered" },
      { id: 3, icon: FaUsers, value: "96%", label: "Client Satisfaction" },
    ],
  },

  overview: {
    badge: "Overview",
    title: "Building Spaces That",
    highlight: "Bring People Together",
    paragraphs: [
      "Urban markets and stadiums are more than structures — they're economic and social anchors for the communities around them.",
      "We plan and build large-scale public infrastructure engineered for heavy daily use, crowd safety, and long-term durability.",
      "From vendor markets to sports arenas, our projects are designed to support commerce, recreation, and civic life at scale.",
    ],
    image:
      stadium,
    features: [
      { id: 1, icon: FaChartLine, label: "Economic Impact" },
      { id: 2, icon: FaUsers, label: "Crowd Safety Design" },
      { id: 3, icon: FaClock, label: "On-Time Delivery" },
      { id: 4, icon: FaShieldAlt, label: "Transparent Process" },
    ],
  },

  benefits: {
    badge: "What We Offer",
    title: "Comprehensive Development",
    highlight: "Solutions",
    items: [
      {
        id: 1,
        icon: FaStore,
        title: "Urban Markets",
        description: "Multi-vendor market complexes built for daily commerce.",
      },
      {
        id: 2,
        icon: FaTrophy,
        title: "Sports Stadiums",
        description: "Arenas and stadiums built to host large-scale events.",
      },
      {
        id: 3,
        icon: FaRunning,
        title: "Recreational Facilities",
        description: "Parks and recreation centers for community wellbeing.",
      },
      {
        id: 4,
        icon: FaBusAlt,
        title: "Transit Infrastructure",
        description: "Access roads and transit hubs supporting foot traffic.",
      },
      {
        id: 5,
        icon: FaLightbulb,
        title: "Public Lighting & Utilities",
        description: "Infrastructure for safe, functional public spaces.",
      },
      {
        id: 6,
        icon: FaChartLine,
        title: "Commercial Zoning",
        description: "Development planning that maximizes investment value.",
      },
    ],
  },

  process: {
    badge: "Our Process",
    title: "How We Deliver Your",
    highlight: "Development",
    steps: [
      {
        id: 1,
        number: "01",
        icon: FaComments,
        title: "Consultation",
        description: "We assess community needs, scale, and site conditions.",
      },
      {
        id: 2,
        number: "02",
        icon: FaDraftingCompass,
        title: "Design & Planning",
        description: "We plan for capacity, safety, and commercial viability.",
      },
      {
        id: 3,
        number: "03",
        icon: FaHardHat,
        title: "Construction",
        description: "We build large-scale infrastructure with strict oversight.",
      },
      {
        id: 4,
        number: "04",
        icon: FaHandshake,
        title: "Handover",
        description: "We deliver a fully operational public facility.",
      },
    ],
  },

  gallery: {
    badge: "Project Gallery",
    title: "Our Recent Development",
    highlight: "Projects",
    images: [
      {
        id: 1,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/stadium-gallery-1.jpg",
        alt: "Urban market complex",
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/stadium-gallery-2.jpg",
        alt: "Sports stadium exterior",
      },
      {
        id: 3,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/stadium-gallery-3.jpg",
        alt: "Recreational facility",
      },
      {
        id: 4,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/stadium-gallery-4.jpg",
        alt: "Community market development",
      },
      {
        id: 5,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/stadium-gallery-5.jpg",
        alt: "Stadium at night",
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
        question: "How do you plan for large crowd capacity and safety?",
        answer:
          "We design with crowd flow modeling, emergency egress planning, and compliance with public safety codes from the outset.",
      },
      {
        id: 2,
        question: "Do you handle investment and economic impact planning?",
        answer:
          "We work with planners and stakeholders to align development scale with projected commercial and community impact.",
      },
      {
        id: 3,
        question: "How long does a stadium or market project take?",
        answer:
          "Timelines range from 12 months for market complexes to 24+ months for full-scale stadium developments.",
      },
      {
        id: 4,
        question: "Can these facilities be built in phases?",
        answer:
          "Yes, phased development is common for large-scale projects to manage budget and allow partial early use.",
      },
    ],
  },

  cta: {
    title: "Ready to Build Community Infrastructure?",
    description:
      "Let's discuss your market or stadium development project. Get in touch with our team today for a consultation.",
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

export default urbanMarketStadiumDevelopment;
