import {
  Building2,
  Landmark,
  MapPinned,
  Trophy,
  Globe2,
  Sparkles,
} from "lucide-react";

const timelineData = {
  eyebrow: "OUR JOURNEY",

  title: "Building a Legacy",

  highlight: "One Milestone at a Time",

  description:
    "From a small construction company to a trusted engineering partner for residential, commercial, and government developments, every milestone reflects our commitment to quality, innovation, and excellence.",
};

export default timelineData;

export const timeline = [
  {
    id: 1,
    year: "2009",
    icon: Building2,

    title: "Ecohome Concepts Founded",

    description:
      "The company was established with a vision of delivering quality residential construction projects built on trust, craftsmanship and innovation.",

    color: "green",
  },

  {
    id: 2,
    year: "2012",
    icon: Landmark,

    title: "First Government Contract",

    description:
      "Successfully secured and delivered our first government infrastructure project, marking a major milestone in the company's growth.",

    color: "blue",
  },

  {
    id: 3,
    year: "2016",
    icon: MapPinned,

    title: "Nationwide Expansion",

    description:
      "Expanded operations across multiple Nigerian states while growing our engineering team and project portfolio.",

    color: "green",
  },

  {
    id: 4,
    year: "2020",
    icon: Trophy,

    title: "100+ Projects Delivered",

    description:
      "Reached over one hundred successfully completed residential, commercial and institutional developments.",

    color: "blue",
  },

  {
    id: 5,
    year: "2023",
    icon: Globe2,

    title: "Sustainable Construction Initiative",

    description:
      "Integrated modern sustainable construction practices, environmentally responsible materials and energy-efficient designs into our projects.",

    color: "green",
  },

  {
    id: 6,
    year: "2025",

    icon: Sparkles,

    title: "Industry Recognition",

    description:
      "Recognized as one of the leading construction and engineering companies delivering innovative solutions across Nigeria.",

    color: "blue",
  },
];