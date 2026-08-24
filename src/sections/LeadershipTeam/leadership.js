import {
  Mail,
  Phone,
  Crown,
  Cpu,
  Briefcase,
 
  Users,
  Calculator,
  Compass,
  Hammer,
  ShieldCheck,
} from "lucide-react";

/* =========================================
   Section Data
========================================= */

const leadershipData = {
  eyebrow: "MEET THE LEADERSHIP",

  title: "The People",

  highlight: "Building Ecohome's Legacy",

  description:
    "Our leadership team combines decades of engineering, construction, project management and business expertise to deliver projects that stand the test of time.",
};

export default leadershipData;

/* =========================================
   Featured Leader
========================================= */

export const featuredLeader = {
  id: 1,

  name: "Emmanuel Eromosele",

  position: "Founder & Chief Executive Officer",

  experience: "20+ Years Experience",

  bio: "With over two decades in construction and engineering, John has led Ecohome Concepts from a small startup into one of Nigeria's respected construction firms. His leadership is driven by innovation, integrity and a passion for building lasting communities.",

  

  badge: "Founder",

  icon: Crown,

  socials: [
  
    {
      id: 2,
      icon: Mail,
      url: "#",
    },
    {
      id: 3,
      icon: Phone,
      url: "#",
    },
  ],
};

/* =========================================
   Executive Leadership
========================================= */

export const executiveLeaders = [
  {
    id: 2,

    name: "Ephraim Ikunobe",

    position: "Project Coordinator",

    experience: "15+ Years",


    icon: Cpu,

 
  },

  {
    id: 3,

    name: "Martin Abah",

    position: "Legal",

    experience: "18+ Years",

  

    icon: Briefcase,

   
  },
];

/* =========================================
   Senior Leadership
========================================= */

export const leadershipTeam = [


  {
    id: 4,

    name: "Ola Olurunsola",

    position: "Project Manager",

    experience: "13 Years",


    icon: Users,
  },

  {
    id: 5,

    name: "Godwin Udoh",

    position: "Site Manager.",

    experience: "15 Years",


    icon: Calculator,
  },

  {
    id: 6,

    name: "Samuel Titus",

    position: "Project Architect",

    experience: "11 Years",


    icon: Compass,
  },

  {
    id: 7,

    name: "Precious",

    position: "Project Engineer",

    experience: "14 Years",


    icon: Hammer,
  },

  {
    id: 8,

    name: "Panshak",

    position: "Site Manager",

    experience: "12 Years",


    icon: ShieldCheck,
  },
];