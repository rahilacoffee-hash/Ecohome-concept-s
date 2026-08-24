export let categoryColors = {
  Government: { bg: "bg-[#73B72B]", text: "text-white" },
  Commercial: { bg: "bg-[#102A72]", text: "text-white" },
  Residential: { bg: "bg-[#73B72B]", text: "text-white" },
  Renovation: { bg: "bg-[#102A72]", text: "text-white" },
  Infrastructure: { bg: "bg-[#73B72B]", text: "text-white" },
};

let projects = [
  {
    id: 1,
    slug: "office-of-the-deputy-governor-nasarawa-state",
    title: "Office of the Deputy Governor Nasarawa State",
    category: "Government",
    location: "Lafia, Nasarawa State",
    client: "Nasarawa State Government",
    year: "2024",
    duration: "18 months",
    area: "6,200 sqm",
    image:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/deputy-governor-office.jpg",
    description:
      "An executive office complex built for the Office of the Deputy Governor, combining institutional stature with modern administrative functionality.",
    services: ["Civic & Legislative Buildings", "Project Management"],
    gallery: [
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/deputy-governor-office-1.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/deputy-governor-office-2.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/deputy-governor-office-3.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/deputy-governor-office-4.jpg",
    ],
  },
  {
    id: 2,
    slug: "nasida-headquarters",
    title: "NASIDA Headquarters",
    category: "Commercial",
    location: "Keffi, Nasarawa State",
    client: "Nasarawa State Investment & Development Agency",
    year: "2023",
    duration: "16 months",
    area: "4,800 sqm",
    image:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/nasida-headquarters.jpg",
    description:
      "A modern headquarters building for the state's investment agency, featuring a glass curtain-wall facade and flexible commercial-grade office floors.",
    services: ["Commercial Construction", "Structural Engineering"],
    gallery: [
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/nasida-headquarters-1.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/nasida-headquarters-2.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/nasida-headquarters-3.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/nasida-headquarters-4.jpg",
    ],
  },
  {
    id: 3,
    slug: "luxury-residential-development",
    title: "Luxury Residential Development",
    category: "Residential",
    location: "Abuja, FCT",
    client: "Private Client",
    year: "2024",
    duration: "14 months",
    area: "1,450 sqm",
    image:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/luxury-residential-development.jpg",
    description:
      "A contemporary luxury residence with open-plan living spaces, a cantilevered upper floor, and warm evening lighting throughout the landscaped grounds.",
    services: ["Residential Construction", "Interior Design"],
    gallery: [
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/luxury-residential-development-1.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/luxury-residential-development-2.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/luxury-residential-development-3.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/luxury-residential-development-4.jpg",
    ],
  },
  {
    id: 4,
    slug: "corporate-office-renovation",
    title: "Corporate Office Renovation",
    category: "Renovation",
    location: "Abuja, FCT",
    client: "Meridian Holdings",
    year: "2024",
    duration: "5 months",
    area: "2,100 sqm",
    image:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/corporate-office-renovation.jpg",
    description:
      "A full interior renovation of an existing corporate office floor, introducing open-concept workspaces, upgraded lighting, and a refreshed material palette.",
    services: ["Renovation & Remodeling", "Interior Design"],
    gallery: [
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/corporate-office-renovation-1.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/corporate-office-renovation-2.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/corporate-office-renovation-3.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/corporate-office-renovation-4.jpg",
    ],
  },
  {
    id: 5,
    slug: "regional-highway-infrastructure",
    title: "Regional Highway Infrastructure Project",
    category: "Infrastructure",
    location: "Nasarawa State",
    client: "Federal Ministry of Works",
    year: "2023",
    duration: "24 months",
    area: "42 km",
    image:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/regional-highway.jpg",
    description:
      "A regional highway expansion project including new drainage systems, bridge crossings, and road safety infrastructure across a 42km corridor.",
    services: ["Urban Market & Stadium Development", "Project Management"],
    gallery: [
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/regional-highway-1.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/regional-highway-2.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/regional-highway-3.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/regional-highway-4.jpg",
    ],
  },
  {
    id: 6,
    slug: "site-supervision-team-deployment",
    title: "Site Supervision & Safety Deployment",
    category: "Infrastructure",
    location: "Nasarawa State",
    client: "Federal Ministry of Works",
    year: "2023",
    duration: "24 months",
    area: "42 km",
    image:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/site-supervision-team.jpg",
    description:
      "On-site supervision and safety personnel deployment supporting the regional highway corridor build, ensuring compliance at every phase.",
    services: ["Project Management"],
    gallery: [
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/site-supervision-team-1.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/site-supervision-team-2.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/site-supervision-team-3.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/site-supervision-team-4.jpg",
    ],
  },
  {
    id: 7,
    slug: "riverside-apartments",
    title: "Riverside Apartments",
    category: "Residential",
    location: "Port Harcourt, Rivers State",
    client: "Riverside Properties Ltd.",
    year: "2022",
    duration: "18 months",
    area: "6,400 sqm",
    image:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/riverside-apartments.jpg",
    description:
      "A mid-rise residential development of 48 apartments overlooking the river, designed with shared amenities, secure parking, and energy-efficient building systems.",
    services: ["Residential Construction", "Structural Engineering"],
    gallery: [
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/riverside-apartments-1.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/riverside-apartments-2.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/riverside-apartments-3.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/riverside-apartments-4.jpg",
    ],
  },
  {
    id: 8,
    slug: "metropolitan-office-tower",
    title: "Metropolitan Office Tower",
    category: "Commercial",
    location: "Lagos, Nigeria",
    client: "Meridian Holdings",
    year: "2021",
    duration: "22 months",
    area: "18,500 sqm",
    image:
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/metropolitan-office-tower.jpg",
    description:
      "A 24-storey commercial office tower engineered for efficiency and scale, featuring a curtain-wall glass facade and column-free floor plates.",
    services: ["Commercial Construction", "Project Management"],
    gallery: [
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/metropolitan-office-tower-1.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/metropolitan-office-tower-2.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/metropolitan-office-tower-3.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/echohome/projects/metropolitan-office-tower-4.jpg",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getRelatedProjects(currentProject, limit = 3) {
  return projects
    .filter(
      (project) =>
        project.id !== currentProject.id &&
        project.category === currentProject.category
    )
    .slice(0, limit);
}

export default projects;