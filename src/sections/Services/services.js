import {
  Landmark,
  Building2,
  BriefcaseBusiness,
  Trophy,
  ClipboardCheck,
  Sofa,
} from "lucide-react";

import government from "../../assets/images/backgrounds/government.png";
import legislative from "../../assets/images/backgrounds/legislative.png";
import office from "../../assets/images/backgrounds/office.png";
import stadium from "../../assets/images/backgrounds/stadium.png";
import interior from "../../assets/images/backgrounds/interior.png";
import management from "../../assets/images/backgrounds/management.png";

const services = [
  {
    id: 1,
    icon: Landmark,
    image: government,
    title: "Executive Government Residences",
    description:
      "We design and construct premium government residences that combine security, luxury and modern architectural.",
    link: "/services/executive-government-residences",
  },

  {
    id: 2,
    icon: Building2,
    image: legislative,
    title: "Civic & Legislative Buildings",
    description:
      "Construction of ministries, secretariats, legislative complexes and public institutions built for functionality, durability and national pride.",
    link: "/services/civic-legislative-buildings",
  },

  {
    id: 3,
    icon: BriefcaseBusiness,
    image: office,
    title: "High-Profile Administrative Offices",
    description:
      "Modern office developments tailored for government agencies, institutions and corporate organizations with efficient workspace planning.",
    link: "/services/administrative-offices",
  },

  {
    id: 4,
    icon: Trophy,
    image: stadium,
    title: "Urban Market & Stadium Development",
    description:
      "Large-scale market complexes, sports facilities and recreational infrastructure that promote commerce, investment and community development.",
    link: "/services/urban-market-stadium-development",
  },

  {
    id: 5,
    icon: ClipboardCheck,
    image: management,
    title: "Project Management",
    description:
      "End-to-end planning, supervision and execution that ensures every project is delivered safely, on schedule and within budget.",
    link: "/services/project-management",
  },

  {
    id: 6,
    icon: Sofa,
    image: interior,
    title: "Interior Design",
    description:
      "Elegant residential, commercial and hospitality interiors crafted to deliver comfort, functionality and timeless luxury.",
    link: "/services/interior-design",
  },
];

export default services;