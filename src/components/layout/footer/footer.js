import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaLandmark,
  FaBuilding,
  FaHome,
  FaCog,
  FaClipboardList,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHardHat,
  FaUserFriends,
  FaAward,
  FaHandshake,
} from "react-icons/fa";

let footerData = {
  logoIcon: FaBuilding,
  brandName: "ECOHOME",
  brandHighlight: "CONCEPTS",
  description:
    "Delivering innovative construction and engineering solutions that build lasting infrastructure and communities. We turn visions into landmarks.",
};

export let contactInfo = [
  {
    id: 1,
    icon: FaMapMarkerAlt,
    label: "Our Office",
    text: "Plot 123, Construction Avenue, Central Business District, Abuja, Nigeria.",
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    label: "Call Us",
    text: "+234 801 234 5678",
  },
  {
    id: 3,
    icon: FaEnvelope,
    label: "Email Us",
    text: "info@ecohomeconcepts.com",
  },
  {
    id: 4,
    icon: FaGlobe,
    label: "Visit Our Website",
    text: "www.ecohomeconcepts.com",
  },
];

export let quickLinks = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About Us", href: "/about" },
  { id: 3, label: "Services", href: "#services" },
  { id: 4, label: "Projects", href: "/projects" },
  { id: 5, label: "Why Choose Us", href: "#why-choose-us" },
  { id: 6, label: "Testimonials", href: "#testimonials" },
  { id: 8, label: "Contact Us", href: "/contact" },
];

export let services = [
  {
    id: 1,
    icon: FaLandmark,
    label: "Government Construction",
    href: "#services",
  },
  {
    id: 2,
    icon: FaBuilding,
    label: "Commercial Buildings",
    href: "#services",
  },
  {
    id: 3,
    icon: FaHome,
    label: "Residential Projects",
    href: "#services",
  },
  {
    id: 4,
    icon: FaCog,
    label: "Engineering Consultancy",
    href: "#services",
  },
  {
    id: 5,
    icon: FaClipboardList,
    label: "Project Management",
    href: "#services",
  },
];

export let newsletter = {
  icon: FaEnvelope,
  title: "Subscribe to our newsletter",
  description:
    "Stay updated with our latest projects, industry insights and company news.",
};

export let footerStats = [
  {
    id: 1,
    icon: FaHardHat,
    value: "15+",
    label: "Years Experience",
  },
  {
    id: 2,
    icon: FaUserFriends,
    value: "250+",
    label: "Projects Completed",
  },
  {
    id: 3,
    icon: FaAward,
    value: "50+",
    label: "Skilled Professionals",
  },
  {
    id: 4,
    icon: FaHandshake,
    value: "100%",
    label: "Client Satisfaction",
  },
];

export let socialLinks = [
  { id: 1, icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
  { id: 2, icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
  { id: 3, icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { id: 4, icon: FaTwitter, label: "Twitter", href: "https://twitter.com" },
  { id: 5, icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
];

export let legalLinks = [
  { id: 1, label: "Privacy Policy", href: "#privacy-policy" },
  { id: 2, label: "Terms of Service", href: "#terms-of-service" },
  { id: 3, label: "Sitemap", href: "#sitemap" },
];

export default footerData;
