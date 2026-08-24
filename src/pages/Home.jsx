import Footer from "../components/layout/footer/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../sections/About/About";
import CTA from "../sections/CTA/Cta";

import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import Services from "../sections/Services/Services";
import Stats from "../sections/Stats/Stats";
import Testimonials from "../sections/Testimonials/Testimonials";
import TrustedClients from "../sections/TrustedClients/TrustedClients";
import WhyChooseUs from "../sections/WhyChooseUs/WhyChooseUs";
import { useEffect, useState } from "react";
import { defaultHomepageContent, fetchHomepageContent } from "../services/homepage";

export default function Home() {
  const [homepage, setHomepage] = useState(defaultHomepageContent);

  useEffect(() => {
    fetchHomepageContent().then(setHomepage).catch(() => {});
  }, []);

  return (
    <>
      <Navbar />

      <main>
     <Hero hero={homepage.hero} />
     <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white" />
     <Stats stats={homepage.stats} />
     <About content={homepage.about} />
     <Services/>
     <Projects/>
     <WhyChooseUs content={homepage.whyChoose} />
     <Testimonials/>
<TrustedClients/>
<CTA content={homepage.cta}/>
     
      </main>
      <Footer content={homepage.footer} />
    </>
  );
}
