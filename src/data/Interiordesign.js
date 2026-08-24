import {
  FaCouch,
  FaHardHat,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaPaintRoller,
  FaLightbulb,
  FaPalette,
  FaCube,
  FaTree,
  FaComments,
  FaPencilRuler,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";


import interior from "../assets/images/backgrounds/interior.png";

let interiorDesign = {
  slug: "interior-design",

  breadcrumb: {
    trail: [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Services", href: "/services" },
    ],
    current: "Interior Design",
  },

  hero: {
    badge: "Interior Design",
    badgeIcon: FaCouch,
    title: "Interiors With",
    highlight: "Timeless Luxury",
    description:
      "Elegant residential, commercial, and hospitality interiors crafted to deliver comfort, functionality, and timeless luxury.",
    primaryButton: { label: "Request a Quote", href: "/contact" },
    secondaryButton: { label: "Our Projects", href: "/projects" },
    image:
      interior,
    stats: [
      { id: 1, icon: FaHardHat, value: "8+", label: "Years Experience" },
      { id: 2, icon: FaShieldAlt, value: "300+", label: "Spaces Designed" },
      { id: 3, icon: FaUsers, value: "99%", label: "Client Satisfaction" },
    ],
  },

  overview: {
    badge: "Overview",
    title: "Designing Interiors,",
    highlight: "Elevating Living",
    paragraphs: [
      "Our interior design team creates spaces that reflect character and purpose, whether residential, commercial, or hospitality.",
      "From material selection to lighting design and furniture layout, we manage every detail of the interior experience.",
      "We work closely with our construction teams to ensure interiors are finished to the same standard as the structure itself.",
    ],
    image:
      interior,
    features: [
      { id: 1, icon: FaPalette, label: "Curated Materials" },
      { id: 2, icon: FaLightbulb, label: "Lighting Design" },
      { id: 3, icon: FaClock, label: "On-Time Delivery" },
      { id: 4, icon: FaShieldAlt, label: "Transparent Process" },
    ],
  },

  benefits: {
    badge: "What We Offer",
    title: "Comprehensive Interior",
    highlight: "Solutions",
    items: [
      {
        id: 1,
        icon: FaCouch,
        title: "Residential Interiors",
        description: "Warm, functional interiors tailored to your lifestyle.",
      },
      {
        id: 2,
        icon: FaPaintRoller,
        title: "Commercial Interiors",
        description: "Professional spaces designed to reflect your brand.",
      },
      {
        id: 3,
        icon: FaLightbulb,
        title: "Lighting Design",
        description: "Ambient and functional lighting plans for every room.",
      },
      {
        id: 4,
        icon: FaCube,
        title: "3D Space Planning",
        description: "Visualized layouts before any furniture is placed.",
      },
      {
        id: 5,
        icon: FaPalette,
        title: "Material & Finish Selection",
        description: "Curated palettes matched to your design direction.",
      },
      {
        id: 6,
        icon: FaTree,
        title: "Hospitality Interiors",
        description: "Guest-focused design for hotels and lounges.",
      },
    ],
  },

  process: {
    badge: "Our Process",
    title: "How We Design Your",
    highlight: "Interior Space",
    steps: [
      {
        id: 1,
        number: "01",
        icon: FaComments,
        title: "Consultation",
        description: "We learn your style, needs, and budget.",
      },
      {
        id: 2,
        number: "02",
        icon: FaPencilRuler,
        title: "Concept & Mood Boards",
        description: "We present design directions and material palettes.",
      },
      {
        id: 3,
        number: "03",
        icon: FaHardHat,
        title: "Execution",
        description: "We manage sourcing, installation, and finishing.",
      },
      {
        id: 4,
        number: "04",
        icon: FaHandshake,
        title: "Handover",
        description: "We deliver a fully styled, move-in ready space.",
      },
    ],
  },

  gallery: {
    badge: "Project Gallery",
    title: "Our Recent Interior",
    highlight: "Projects",
    images: [
      {
        id: 1,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/interior-gallery-1.jpg",
        alt: "Modern living room interior",
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/interior-gallery-2.jpg",
        alt: "Minimalist kitchen design",
      },
      {
        id: 3,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/interior-gallery-3.jpg",
        alt: "Contemporary office interior",
      },
      {
        id: 4,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/interior-gallery-4.jpg",
        alt: "Styled hospitality lounge",
      },
      {
        id: 5,
        src: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/services/interior-gallery-5.jpg",
        alt: "Luxury bedroom interior",
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
        question: "How long does an interior project take?",
        answer:
          "Most interior projects take 4 to 12 weeks depending on scope, from a single room refresh to a full property.",
      },
      {
        id: 2,
        question: "Do you source furniture and materials?",
        answer:
          "Yes, we handle sourcing, procurement, and delivery coordination as part of our full-service package.",
      },
      {
        id: 3,
        question: "Do you design hospitality and commercial interiors too?",
        answer:
          "Yes, alongside residential work we design interiors for offices, hotels, and hospitality venues.",
      },
      {
        id: 4,
        question: "Do you offer 3D previews before starting?",
        answer:
          "Yes, we provide 3D renders and mood boards so you can approve the direction before any work begins.",
      },
    ],
  },

  cta: {
    title: "Ready to Transform Your Space?",
    description:
      "Let's turn your interior vision into reality. Get in touch with our team today for a free consultation.",
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

export default interiorDesign;
