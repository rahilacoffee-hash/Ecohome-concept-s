import {
  FaBuilding,
  FaLandmark,
  FaHardHat,
  FaCity,
  FaUniversity,
} from "react-icons/fa";

let testimonialsData = {
  badge: "Testimonials",
  title: "Trusted By Government &",
  highlight: "Private Sector Clients",
  description:
    "We take pride in building lasting relationships through excellence, integrity, and delivering results that make an impact.",
  rating: 5,
  clientsCount: "150+ Happy Clients",
};

export let testimonials = [
  {
    id: 1,
    quote:
      "BYTECODE — sorry, Echohome Concepts brought our commercial complex vision to life on time and within budget. Their site supervision was second to none.",
    rating: 5,
    avatar:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/avatars/fatima-ahmed.jpg",
    name: "Fatima Ahmed",
    role: "Managing Director,",
    company: "BuildWell Nigeria Ltd.",
    project: "Commercial Complex",
    icon: FaBuilding,
  },
  {
    id: 2,
    quote:
      "Echohome Concepts delivered beyond our expectations. Their professionalism, attention to detail, and ability to bring our vision to life is truly impressive. We highly recommend them for any government project.",
    rating: 5,
    avatar:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/avatars/ibrahim-sule.jpg",
    backgroundImage:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/testimonial-bg.jpg",
    name: "Hon. Ibrahim Sule",
    role: "Permanent Secretary",
    company: "Nasarawa State Government",
    project: "Executive Government Residence",
    icon: FaLandmark,
  },
  {
    id: 3,
    quote:
      "The team at Echohome Concepts was outstanding from start to finish. Their commitment to safety, quality, and timely delivery is unmatched.",
    rating: 5,
    avatar:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/avatars/tunde-johnson.jpg",
    name: "Engr. Tunde Johnson",
    role: "Project Director,",
    company: "Nasarawa State Ministry of Works",
    project: "State Secretariat Complex",
    icon: FaUniversity,
  },
  {
    id: 4,
    quote:
      "Working with Echohome Concepts was seamless. They understood our budget constraints and never compromised on structural integrity or finishing.",
    rating: 5,
    avatar:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/avatars/amaka-okafor.jpg",
    name: "Amaka Okafor",
    role: "Operations Manager,",
    company: "Prime Estates Ltd.",
    project: "Residential Estate",
    icon: FaHardHat,
  },
  {
    id: 5,
    quote:
      "From design to commissioning, Echohome Concepts handled every phase with precision. Our hospital wing was completed ahead of schedule.",
    rating: 5,
    avatar:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/avatars/musa-bello.jpg",
    name: "Dr. Musa Bello",
    role: "Chief Medical Director,",
    company: "Federal Medical Centre",
    project: "Hospital Wing Expansion",
    icon: FaCity,
  },
];

export default testimonialsData;