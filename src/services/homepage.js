const configuredApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
const apiUrl = configuredApiUrl.replace(/\/api\/?$/, "");

export const defaultHomepageContent = {
  hero: {
    badge: "Building Excellence Since Day One",
    title: "Building Exceptional Spaces",
    highlight: "With Precision & Excellence.",
    description: "Ecohome Concepts delivers innovative construction, engineering, renovation and project management solutions with quality craftsmanship, integrity and attention to detail.",
    primaryButtonLabel: "Request a Quote",
    primaryButtonHref: "/contact",
    secondaryButtonLabel: "View Projects",
    secondaryButtonHref: "/projects",
    backgroundImage: "",
  },
  stats: [
    { value: 150, suffix: "+", label: "Projects Completed", icon: "Building" },
    { value: 50, suffix: "+", label: "Professional Team", icon: "Users" },
    { value: 25, suffix: "+", label: "Years Experience", icon: "Trophy" },
    { value: 98, suffix: "%", label: "Client Satisfaction", icon: "Star" },
  ],
  about: { eyebrow: "About Ecohome Concepts", title: "Building the Future", highlight: "with Innovation, Quality & Integrity.", description: "Ecohome Concepts delivers exceptional construction, engineering and project management services tailored to residential, commercial and institutional developments." },
  whyChoose: { badge: "Why choose us", title: "Built on", highlight: "trust and quality.", description: "We combine expertise, quality craftsmanship and dependable delivery on every project." },
  cta: { eyebrow: "Let's Build The Future Together", title: "Ready to Build", highlight: "Your Next Landmark?", description: "From concept to completion, Ecohome Concepts delivers innovative construction and engineering solutions tailored to your needs." },
  footer: { description: "Delivering innovative construction and engineering solutions that build lasting infrastructure and communities.", phone: "+234 801 234 5678", email: "info@ecohomeconcepts.com", address: "Plot 123, Construction Avenue, Central Business District, Abuja, Nigeria." },
};

export const fetchHomepageContent = async () => {
  const response = await fetch(`${apiUrl}/api/homepage`);
  if (!response.ok) throw new Error("Unable to load homepage content");
  const payload = await response.json();
  return {
    hero: { ...defaultHomepageContent.hero, ...payload.data?.hero },
    stats: payload.data?.stats?.length ? payload.data.stats : defaultHomepageContent.stats,
    about: { ...defaultHomepageContent.about, ...payload.data?.about },
    whyChoose: { ...defaultHomepageContent.whyChoose, ...payload.data?.whyChoose },
    cta: { ...defaultHomepageContent.cta, ...payload.data?.cta },
    footer: { ...defaultHomepageContent.footer, ...payload.data?.footer },
  };
};
