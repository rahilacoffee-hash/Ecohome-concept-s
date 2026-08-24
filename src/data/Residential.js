import {
  FaHome,
  FaHardHat,
  FaUsers,
  FaLeaf,
  FaClock,
  FaShieldAlt,
  FaBuilding,
  FaCogs,
  FaPaintRoller,
  FaComments,
  FaDraftingCompass,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

let residential = {
  slug: "residential",

  breadcrumb: {
    trail: [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Services", href: "/services" },
    ],
    current: "Residential Construction",
  },

  hero: {
    badge: "Residential Construction",
    badgeIcon: FaHome,
    title: "Build Your",
    highlight: "Dream Home",
    description:
      "We design and build exceptional homes that reflect your lifestyle, personality, and vision.",
    primaryButton: { label: "Request a Quote", href: "/contact" },
    secondaryButton: { label: "Our Projects", href: "/projects" },
    image:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/residential-hero.jpg",
    stats: [
      { id: 1, icon: FaHardHat, value: "10+", label: "Years Experience" },
      { id: 2, icon: FaShieldAlt, value: "500+", label: "Projects Completed" },
      { id: 3, icon: FaUsers, value: "98%", label: "Client Satisfaction" },
    ],
  },

  overview: {
    badge: "Overview",
    title: "Building Homes,",
    highlight: "Building Relationships",
    paragraphs: [
      "Our residential construction services are tailored to bring your dream home to life with precision, quality, and care.",
      "From modern family houses to luxury villas, we manage every aspect of the construction process — from design and planning to execution and final handover.",
      "We use premium materials, advanced technology, and a skilled team to ensure your home is beautiful, durable, and built to last.",
    ],
    image:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/residential-overview.jpg",
    features: [
      { id: 1, icon: FaLeaf, label: "Quality Materials" },
      { id: 2, icon: FaUsers, label: "Experienced Team" },
      { id: 3, icon: FaClock, label: "On-Time Delivery" },
      { id: 4, icon: FaShieldAlt, label: "Transparent Process" },
    ],
  },

  benefits: {
    badge: "What We Offer",
    title: "Comprehensive Residential",
    highlight: "Solutions",
    items: [
      {
        id: 1,
        icon: FaHome,
        title: "Custom Homes",
        description: "Tailored designs that match your lifestyle and preferences.",
      },
      {
        id: 2,
        icon: FaBuilding,
        title: "Luxury Villas",
        description: "Elegant and premium villas built with excellence.",
      },
      {
        id: 3,
        icon: FaHome,
        title: "Duplexes",
        description: "Functional and stylish duplex homes for modern living.",
      },
      {
        id: 4,
        icon: FaCogs,
        title: "Smart Homes",
        description: "Integrated smart technology for modern convenience.",
      },
      {
        id: 5,
        icon: FaBuilding,
        title: "Structural Engineering",
        description: "Strong and safe structural solutions built to last.",
      },
      {
        id: 6,
        icon: FaPaintRoller,
        title: "Interior Finishing",
        description: "Beautiful interiors that add comfort and value.",
      },
    ],
  },

  process: {
    badge: "Our Process",
    title: "How We Build Your",
    highlight: "Dream Home",
    steps: [
      {
        id: 1,
        number: "01",
        icon: FaComments,
        title: "Consultation",
        description: "We understand your needs, budget, and vision.",
      },
      {
        id: 2,
        number: "02",
        icon: FaDraftingCompass,
        title: "Design & Planning",
        description: "Our architects create a plan that brings your ideas to life.",
      },
      {
        id: 3,
        number: "03",
        icon: FaHardHat,
        title: "Construction",
        description: "We build with precision, quality, and on-time delivery.",
      },
      {
        id: 4,
        number: "04",
        icon: FaHandshake,
        title: "Handover",
        description: "We deliver a perfect home ready for you.",
      },
    ],
  },

  gallery: {
    badge: "Project Gallery",
    title: "Our Recent Residential",
    highlight: "Projects",
    images: [
      {
        id: 1,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/residential-gallery-1.jpg",
        alt: "Modern residential home exterior",
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/residential-gallery-2.jpg",
        alt: "Contemporary duplex build",
      },
      {
        id: 3,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/residential-gallery-3.jpg",
        alt: "Minimalist family home",
      },
      {
        id: 4,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/residential-gallery-4.jpg",
        alt: "Luxury villa at dusk",
      },
      {
        id: 5,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/residential-gallery-5.jpg",
        alt: "Smart home with landscaped garden",
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
        question: "How long does it take to build a home?",
        answer:
          "Most residential projects take between 8 to 14 months depending on size, complexity, and site conditions. We provide a detailed timeline during the planning phase.",
      },
      {
        id: 2,
        question: "What is included in your construction service?",
        answer:
          "Our service covers design, planning, permits, structural work, finishing, and final handover — a complete end-to-end build managed by our team.",
      },
      {
        id: 3,
        question: "Do you help with permits and approvals?",
        answer:
          "Yes, we handle all necessary government permits and regulatory approvals on your behalf, so you don't have to navigate the process alone.",
      },
      {
        id: 4,
        question: "Do you provide design services?",
        answer:
          "Yes, our in-house architects work with you to create custom designs, or refine plans you already have, before construction begins.",
      },
      {
        id: 5,
        question: "Can I make changes during construction?",
        answer:
          "Minor changes can typically be accommodated. We'll walk you through any cost or timeline impact before proceeding with modifications.",
      },
      {
        id: 6,
        question: "How do you ensure quality?",
        answer:
          "Every project passes through scheduled inspections and quality checks at each construction phase, following strict industry standards.",
      },
    ],
  },

  cta: {
    title: "Ready to Build Your Dream Home?",
    description:
      "Let's turn your vision into reality. Get in touch with our team today for a free consultation.",
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

export default residential;
