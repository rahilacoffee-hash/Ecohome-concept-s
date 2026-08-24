import {
  Landmark,
  Trophy,
  Building2,
  Home,
} from "lucide-react";

// Featured Project
import featuredImage from "../../assets/images/hero/hero.png";

// Project Images
import stadiumImage from "../../assets/images/backgrounds/stadium.png";
import governmentImage from "../../assets/images/backgrounds/government.png";
import residentialImage from "../../assets/images/backgrounds/residentialImage.png";

const featuredProject = {
  id: 1,
  category: "Government",
  icon: Landmark,
  image: featuredImage,
   slug: "office-of-the-deputy-governor-nasarawa-state",
  title: "Office of the Deputy Governor",

  location: "Lafia, Nasarawa State",

  completed: "2024",

  projectType: "Government Office",

  size: "2,500 sqm",

  scope: "Design & Construction",

  description:
    "A premium executive residence designed and constructed to provide comfort, security and architectural excellence. Built with modern construction techniques, quality finishes and sustainable materials to meet the highest government standards.",
};

export const projects = [
  {
    id: 2,
    category: "Government",
   slug: "nasida-headquarters",
    icon: Trophy,

    image: stadiumImage,

    title: "Remodelled Lafia City Stadium",

    location: "Lafia, Nasarawa State",

    description:
      "A modern multi-purpose sports complex developed to international standards for sporting excellence and community engagement.",
  },

  {
    id: 3,
    category: "Government",

    icon: Landmark,

    image: governmentImage,

    title: "Office of the First Lady-Government House",

    location: "Lafia, Nasarawa State",

    description:
      "A premium commercial development providing modern office spaces with innovative architecture and functional work environments.",
  },

  {
    id: 4,
    category: "Residential",

    icon: Home,

    image: residentialImage,

    title: "New Presidental Lodge-Government House",

    location: "Keffi, Nasarawa State",

    description:
      "A contemporary luxury residence combining elegance, functionality and premium finishing for modern family living.",
  },
];

export default featuredProject;