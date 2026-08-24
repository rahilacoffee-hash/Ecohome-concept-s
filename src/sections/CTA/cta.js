import {
  FaBuilding,
  FaRegCommentDots,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

let ctaData = {
  eyebrowIcon: FaBuilding,
  eyebrow: "Let's Build The Future Together",
  title: "Ready to Build",
  titleLine2: "Your Next",
  highlight: "Landmark?",
  description:
    "From concept to completion, Echohome Concepts delivers innovative construction and engineering solutions tailored to government, commercial and residential developments.",
  backgroundImage:
    "",
};

export let buttons = [
  {
    id: 1,
    label: "Request Consultation",
    icon: FaRegCommentDots,
    arrowIcon: FaArrowRight,
    variant: "primary",
    href: "/contact",
  },
  {
    id: 2,
    label: "View Our Projects",
    icon: FaBuilding,
    arrowIcon: FaArrowRight,
    variant: "secondary",
    href: "/projects",
  },
];

export let trustPills = [
  {
    id: 1,
    icon: FaCheckCircle,
    title: "Free Consultation",
    description: "Discuss your project with our experts",
  },
  {
    id: 2,
    icon: FaCheckCircle,
    title: "Experienced Team",
    description: "Skilled professionals with proven track record",
  },
  {
    id: 3,
    icon: FaCheckCircle,
    title: "Quality Guaranteed",
    description: "Commitment to excellence in every detail",
  },
];

export default ctaData;
