import {
  FaShieldAlt,
  FaAward,
  FaBuilding,
  FaUsers,
  FaClock,
  FaLeaf,
  FaBriefcase,
  FaUniversity,
  FaMapMarkerAlt,
} from "react-icons/fa";
import whyChooseImage from "../../assets/images/backgrounds/why-choose-us.png";

export let features = [
  {
    id: 1,
    icon: FaShieldAlt,
    title: "Proven Track Record",
    description:
      "A solid track record of delivering complex projects for state governments and institutions across Nigeria.",
  },
  {
    id: 2,
    icon: FaAward,
    title: "Executive-Level Quality",
    description:
      "Uncompromising attention to executive detail and the highest standards of craftsmanship in every project.",
  },
  {
    id: 3,
    icon: FaBuilding,
    title: "End-to-End Delivery",
    description:
      "Full project lifecycle delivery — from concept and design to build, finish, and commissioning.",
  },
  {
    id: 4,
    icon: FaUsers,
    title: "Cultural & Protocol Conscious",
    description:
      "Experienced in delivering high-profile projects with cultural sensitivity and protocol awareness.",
  },
  {
    id: 5,
    icon: FaClock,
    title: "Timely & Budget-Aware",
    description:
      "We are committed to delivering projects on time and within budget without compromising on quality.",
  },
  {
    id: 6,
    icon: FaLeaf,
    title: "Sustainable Construction",
    description:
      "Building with the future in mind through sustainable practices and innovative engineering solutions.",
  },
];

export let experience = {
  icon: FaBuilding,
  years: 15,
  title: "Years of Excellence",
  description: "Delivering landmark projects since 2009",
};

export let statistics = [
  {
    icon: FaBriefcase,
    value: "250+",
    label: "Projects Completed",
  },
  {
    icon: FaUniversity,
    value: "25+",
    label: "Government Clients",
  },
  {
    icon: FaMapMarkerAlt,
    value: "12+",
    label: "States Covered",
  },
  {
    icon: FaUsers,
    value: "98%",
    label: "Client Satisfaction",
  },
];

let whyChooseData = {
  badge: "Why Choose Us",
  title: "Why Nigeria",
  highlight: "Trusts Ecohome",
  description:
    "We combine experience, innovation, and integrity to deliver exceptional construction projects that stand the test of time.",
  image:
    whyChooseImage,
};

export default whyChooseData;