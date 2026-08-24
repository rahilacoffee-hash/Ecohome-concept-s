import {
  Home,
  CheckCircle2,
  ClipboardCheck,
  Ruler,
  Hammer,
  KeyRound,
   Home,
  Building2,
  Sofa,
  CheckCircle2,
  ClipboardCheck,
  Ruler,
  Hammer,
  KeyRound,
} from "lucide-react";

/* ==========================================================
   SERVICE DETAILS
========================================================== */

const serviceDetails = [
  {
    id: 1,

    slug: "residential-construction",

    /* ======================================================
       HERO
    ====================================================== */

    hero: {
      eyebrow: "Residential Construction",

      title: "Building",

      highlight: "Dream Homes",

      description:
        "From luxury villas to modern family homes, we design and construct residences that combine timeless architecture, premium craftsmanship, and sustainable building practices.",

      image: "/images/services/residential/hero.jpg",

      breadcrumb: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Residential Construction",
        },
      ],
    },

    /* ======================================================
       OVERVIEW
    ====================================================== */

    overview: {
      title: "Creating Homes That Last For Generations",

      subtitle:
        "Every home we build reflects quality, comfort, functionality, and long-term value.",

      description: [
        "At Ecohome Concepts, residential construction is more than putting blocks together. It is about creating living spaces where families grow, memories are made, and investments appreciate over time.",

        "Our experienced architects, engineers, and project managers work closely with every client to ensure every detail—from planning to final finishes—is executed with precision.",

        "Whether you're building your first home, upgrading to a luxury residence, or developing an estate, our team delivers projects that exceed expectations."
      ],

      image: "/images/services/residential/overview.jpg",

      experience: "15+ Years",

      projects: "250+ Homes",

      satisfaction: "98%",

      icon: Home,
    },

    /* ======================================================
       FEATURES
    ====================================================== */

    features: [
      {
        id: 1,

        icon: CheckCircle2,

        title: "Luxury Home Construction",

        description:
          "Premium custom-built homes tailored to your lifestyle."
      },

      {
        id: 2,

        icon: CheckCircle2,

        title: "Smart Home Integration",

        description:
          "Modern technology seamlessly integrated into every residence."
      },

      {
        id: 3,

        icon: CheckCircle2,

        title: "Structural Engineering",

        description:
          "Engineered for safety, durability and long-term performance."
      },

      {
        id: 4,

        icon: CheckCircle2,

        title: "Premium Finishes",

        description:
          "Luxury interiors and exterior finishes built to the highest standards."
      },

      {
        id: 5,

        icon: CheckCircle2,

        title: "Energy Efficient Design",

        description:
          "Sustainable homes that reduce energy consumption and operating costs."
      },

      {
        id: 6,

        icon: CheckCircle2,

        title: "Complete Project Delivery",

        description:
          "From concept to handover, we manage every stage of construction."
      },
    ],

    /* ======================================================
       PROCESS
    ====================================================== */

    process: [
      {
        id: 1,

        icon: ClipboardCheck,

        title: "Consultation",

        description:
          "Understanding your vision, budget and project requirements."
      },

      {
        id: 2,

        icon: Ruler,

        title: "Design & Planning",

        description:
          "Architectural design, engineering and project scheduling."
      },

      {
        id: 3,

        icon: Hammer,

        title: "Construction",

        description:
          "Quality-driven construction using premium materials and skilled professionals."
      },

      {
        id: 4,

        icon: KeyRound,

        title: "Project Handover",

        description:
          "Final inspections, quality assurance and successful project delivery."
      },
    ],    /* ======================================================
       STATISTICS
    ====================================================== */

    statistics: [
      {
        id: 1,
        value: "250+",
        label: "Homes Completed",
      },

      {
        id: 2,
        value: "15+",
        label: "Years Experience",
      },

      {
        id: 3,
        value: "98%",
        label: "Client Satisfaction",
      },

      {
        id: 4,
        value: "100%",
        label: "Quality Guaranteed",
      },
    ],

    /* ======================================================
       WHY CHOOSE THIS SERVICE
    ====================================================== */

    whyChoose: {
      title: "Why Choose Ecohome For Residential Construction?",

      description:
        "We combine innovative architectural design, engineering excellence and meticulous project management to create homes that deliver lasting value.",

      image: "/images/services/residential/why-choose.jpg",

      benefits: [
        {
          id: 1,
          title: "Experienced Team",
          description:
            "Architects, engineers and builders with decades of industry experience.",
        },

        {
          id: 2,
          title: "Premium Materials",
          description:
            "Only trusted, high-quality construction materials are used on every project.",
        },

        {
          id: 3,
          title: "Transparent Communication",
          description:
            "Regular updates, milestone reporting and complete project visibility.",
        },

        {
          id: 4,
          title: "On-Time Delivery",
          description:
            "Efficient planning ensures projects stay on schedule without compromising quality.",
        },

        {
          id: 5,
          title: "Modern Design",
          description:
            "Elegant architecture that balances beauty, comfort and functionality.",
        },

        {
          id: 6,
          title: "Lifetime Value",
          description:
            "Homes built to appreciate in value while standing the test of time.",
        },
      ],
    },

    /* ======================================================
       PROJECT GALLERY
    ====================================================== */

    gallery: [
      {
        id: 1,
        image: "/images/services/residential/gallery-1.jpg",
        title: "Luxury Duplex",
      },

      {
        id: 2,
        image: "/images/services/residential/gallery-2.jpg",
        title: "Modern Villa",
      },

      {
        id: 3,
        image: "/images/services/residential/gallery-3.jpg",
        title: "Private Residence",
      },

      {
        id: 4,
        image: "/images/services/residential/gallery-4.jpg",
        title: "Family Home",
      },

      {
        id: 5,
        image: "/images/services/residential/gallery-5.jpg",
        title: "Smart Home",
      },

      {
        id: 6,
        image: "/images/services/residential/gallery-6.jpg",
        title: "Luxury Interior",
      },
    ],

    /* ======================================================
       HIGHLIGHTS
    ====================================================== */

    highlights: [
      "Fully licensed construction professionals",

      "Dedicated project manager",

      "Premium quality assurance process",

      "Energy-efficient building techniques",

      "Sustainable construction practices",

      "Comprehensive post-project support",
    ],    /* ======================================================
       FAQ
    ====================================================== */

    faq: [
      {
        id: 1,

        question: "How long does it take to build a residential home?",

        answer:
          "The construction timeline depends on the size and complexity of the project. Most residential homes are completed within 6 to 12 months after approvals and planning."
      },

      {
        id: 2,

        question: "Can Ecohome handle both design and construction?",

        answer:
          "Yes. We provide complete design-build services, including architecture, engineering, project management and construction."
      },

      {
        id: 3,

        question: "Do you help with building approvals?",

        answer:
          "Absolutely. We assist clients with drawings, permits, approvals and regulatory compliance before construction begins."
      },

      {
        id: 4,

        question: "Do you offer project supervision?",

        answer:
          "Yes. Every project is assigned experienced engineers and project managers who supervise every phase of construction."
      },

      {
        id: 5,

        question: "Do you provide post-construction support?",

        answer:
          "Yes. After project completion we remain available for inspections, maintenance guidance and any required support."
      },
    ],

    /* ======================================================
       CALL TO ACTION
    ====================================================== */

    cta: {
      eyebrow: "Ready To Build?",

      title: "Let's Build",

      highlight: "Your Dream Home",

      description:
        "Whether you're building your first home or your forever home, Ecohome Concepts is ready to bring your vision to life with world-class construction and engineering expertise.",

      primaryButton: {
        text: "Request Consultation",
        href: "/contact",
      },

      secondaryButton: {
        text: "Call Our Team",
        href: "tel:+2348000000000",
      },
    },

    /* ======================================================
       SEO
    ====================================================== */

    seo: {
      title:
        "Residential Construction | Ecohome Concepts",

      description:
        "Professional residential construction services by Ecohome Concepts. We design and build modern, sustainable homes with premium quality and engineering excellence.",

      keywords: [
        "Residential Construction",
        "Home Builders Nigeria",
        "Luxury Home Construction",
        "Custom Homes",
        "Ecohome Concepts",
      ],
    },
  },  /* ==========================================================
     COMMERCIAL CONSTRUCTION
  ========================================================== */

  {
    id: 2,

    slug: "commercial-construction",

    hero: {
      eyebrow: "Commercial Construction",

      title: "Building",

      highlight: "Business Spaces",

      description:
        "We deliver commercial buildings that combine functionality, innovation and long-term value for businesses of every size.",

      image: "/images/services/commercial/hero.jpg",

      breadcrumb: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Commercial Construction",
        },
      ],
    },

    overview: {
      title: "Commercial Buildings Built For Growth",

      subtitle:
        "Creating productive spaces that inspire businesses and communities.",

      description: [
        "From office complexes to shopping malls and corporate headquarters, we provide complete commercial construction solutions.",

        "Our multidisciplinary team manages every phase of development while maintaining quality, budget and schedule.",

        "Every commercial project is designed to maximize efficiency, aesthetics and return on investment."
      ],

      image: "/images/services/commercial/overview.jpg",

      experience: "15+ Years",

      projects: "120+ Projects",

      satisfaction: "98%",

      icon: Building2,
    },

    features: [
      {
        id: 1,
        icon: CheckCircle2,
        title: "Office Buildings",
        description: "Modern workspaces designed for productivity.",
      },
      {
        id: 2,
        icon: CheckCircle2,
        title: "Shopping Complexes",
        description: "Retail developments built for high performance.",
      },
      {
        id: 3,
        icon: CheckCircle2,
        title: "Hotels",
        description: "Premium hospitality construction services.",
      },
      {
        id: 4,
        icon: CheckCircle2,
        title: "Educational Buildings",
        description: "Schools and institutions built to modern standards.",
      },
      {
        id: 5,
        icon: CheckCircle2,
        title: "Healthcare Facilities",
        description: "Hospitals and clinics with functional layouts.",
      },
      {
        id: 6,
        icon: CheckCircle2,
        title: "Industrial Buildings",
        description: "Warehouses and production facilities.",
      },
    ],
  },

  /* ==========================================================
     INTERIOR DESIGN
  ========================================================== */

  {
    id: 3,

    slug: "interior-design",

    hero: {
      eyebrow: "Interior Design",

      title: "Beautiful",

      highlight: "Interior Spaces",

      description:
        "Transforming interiors into elegant, functional environments that perfectly reflect your personality and lifestyle.",

      image: "/images/services/interior/hero.jpg",

      breadcrumb: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Interior Design",
        },
      ],
    },

    overview: {
      title: "Where Style Meets Functionality",

      subtitle:
        "Thoughtfully designed interiors that inspire everyday living.",

      description: [
        "Our interior designers combine creativity with functionality to create spaces that feel timeless and comfortable.",

        "Whether residential or commercial, every design is tailored around your lifestyle, brand or business needs.",

        "From concept to installation, we ensure every detail reflects exceptional craftsmanship."
      ],

      image: "/images/services/interior/overview.jpg",

      experience: "12+ Years",

      projects: "180+ Projects",

      satisfaction: "99%",

      icon: Sofa,
    },

    features: [
      {
        id: 1,
        icon: CheckCircle2,
        title: "Space Planning",
        description: "Optimized layouts for maximum functionality.",
      },
      {
        id: 2,
        icon: CheckCircle2,
        title: "Furniture Selection",
        description: "Premium furniture sourcing and specification.",
      },
      {
        id: 3,
        icon: CheckCircle2,
        title: "Lighting Design",
        description: "Ambient and architectural lighting solutions.",
      },
      {
        id: 4,
        icon: CheckCircle2,
        title: "Material Selection",
        description: "Luxury finishes and premium materials.",
      },
      {
        id: 5,
        icon: CheckCircle2,
        title: "Custom Interiors",
        description: "Bespoke interior concepts for unique spaces.",
      },
      {
        id: 6,
        icon: CheckCircle2,
        title: "3D Visualization",
        description: "Photorealistic previews before construction.",
      },
    ],
  },/* ==========================================================
   ARCHITECTURE & PLANNING
========================================================== */

{
  id: 4,

  slug: "architecture-planning",

  hero: {
    eyebrow: "Architecture & Planning",
    title: "Innovative",
    highlight: "Architectural Design",
    description:
      "Creative architectural solutions that combine aesthetics, sustainability and functionality.",
    image: "/images/services/architecture/hero.jpg",

    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Architecture & Planning" },
    ],
  },

  overview: {
    title: "Designing Tomorrow's Landmarks",

    subtitle:
      "Architecture that balances creativity, engineering and long-term functionality.",

    image: "/images/services/architecture/overview.jpg",

    experience: "14+ Years",

    projects: "300+ Designs",

    satisfaction: "98%",
  },
},

/* ==========================================================
   RENOVATION & REMODELING
========================================================== */

{
  id: 5,

  slug: "renovation-remodeling",

  hero: {
    eyebrow: "Renovation & Remodeling",
    title: "Transform",
    highlight: "Existing Spaces",
    description:
      "Modern renovation solutions that breathe new life into homes, offices and commercial buildings.",

    image: "/images/services/renovation/hero.jpg",

    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Renovation & Remodeling" },
    ],
  },

  overview: {
    title: "Renovations Built Around Your Vision",

    subtitle:
      "Upgrading spaces without compromising structural integrity or design quality.",

    image: "/images/services/renovation/overview.jpg",

    experience: "15+ Years",

    projects: "400+ Renovations",

    satisfaction: "99%",
  },
},

/* ==========================================================
   PROJECT MANAGEMENT
========================================================== */

{
  id: 6,

  slug: "project-management",

  hero: {
    eyebrow: "Project Management",

    title: "Professional",

    highlight: "Project Delivery",

    description:
      "Ensuring every project is delivered on time, within budget and to the highest quality standards.",

    image: "/images/services/project-management/hero.jpg",

    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Project Management" },
    ],
  },

  overview: {
    title: "Managing Every Detail From Start To Finish",

    subtitle:
      "Experienced project managers coordinating every stage of construction.",

    image: "/images/services/project-management/overview.jpg",

    experience: "18+ Years",

    projects: "500+ Projects",

    satisfaction: "99%",
  },
},

];

export default serviceDetails;