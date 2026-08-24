
import Footer from "../components/layout/footer/Footer";
import Navbar from "../components/layout/Navbar";
import AboutHero from "../sections/AboutHero/AboutHero";
import CompanyTimeline from "../sections/CompanyTimeline/CompanyTimeline";
import CTA from "../sections/CTA/Cta";
import LeadershipTeam from "../sections/LeadershipTeam/LeadershipTeam";
import StorySection from "../sections/StorySection/StorySection";




export default function About() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        {/* ================= Hero ================= */}

        <AboutHero />

        {/* ================= Our Story ================= */}

        <StorySection />

        {/* ================= Company Stats ================= */}

        <CompanyTimeline />

        {/* ================= Why Choose Ecohome ================= */}

        <LeadershipTeam />

     <div>

     </div>

        <CTA />
      </main>

      <Footer />
      
    </>
  );
}
