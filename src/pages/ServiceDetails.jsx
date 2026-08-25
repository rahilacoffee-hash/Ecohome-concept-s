import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaHardHat, FaLeaf, FaShieldAlt, FaUsers } from "react-icons/fa";
import { fetchServiceBySlug } from "../services/services";
import { getServiceBySlug as getBuiltInServiceBySlug } from "../data/Index";

import Hero from "../sections/serviceDetails/Hero";
import Overview from "../sections/serviceDetails/Overview";
import CTA from "../sections/CTA/Cta";
import Footer from "../components/layout/footer/Footer";

const toServiceDetails = (service) => {
  const description = service.description || service.brief;

  return {
    hero: {
      badge: "Our Service",
      badgeIcon: FaHardHat,
      title: service.title,
      highlight: "",
      description,
      primaryButton: { label: "Request a Quote", href: "/contact" },
      secondaryButton: { label: "Our Projects", href: "/projects" },
      image: service.image,
      stats: [],
    },
    breadcrumb: { current: service.title },
    overview: {
      badge: "Overview",
      title: service.title,
      highlight: "",
      paragraphs: [description].filter(Boolean),
      image: service.image,
      features: [
        { id: "quality", icon: FaLeaf, label: "Quality Focused" },
        { id: "team", icon: FaUsers, label: "Expert Team" },
        { id: "delivery", icon: FaShieldAlt, label: "Built to Last" },
      ],
    },
  };
};

export default function ServiceDetails() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    setService(null);
    setError(null);
    setIsLoading(true);

    fetchServiceBySlug(slug)
      .then((data) => active && setService(toServiceDetails(data)))
      .catch((requestError) => {
        const builtInService = requestError.status === 404 && getBuiltInServiceBySlug(slug);
        if (active && builtInService) setService(builtInService);
        else if (active) setError(requestError);
      })
      .finally(() => active && setIsLoading(false));

    return () => {
      active = false;
    };
  }, [slug]);

  if (isLoading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#F8FAFC] px-6 text-center font-semibold text-[#102A72]">
        Loading service…
      </main>
    );
  }

  // ================= Not Found Fallback =================

  if (error?.status === 404) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#F8FAFC] px-6 text-center">
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#73B72B]">
          404
        </span>

        <h1 className="mt-4 text-3xl font-black text-[#102A72] md:text-4xl">
          Service Not Found
        </h1>

        <p className="mt-3 max-w-md text-slate-500">
          We couldn't find a service matching "{slug}". It may have been
          moved or no longer exists.
        </p>

        <Link
          to="/services"
          className="
            mt-8
            rounded-xl
            bg-[#73B72B]
            px-7
            py-4
            font-bold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#65a324]
          "
        >
          View All Services
        </Link>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#F8FAFC] px-6 text-center">
        <h1 className="text-3xl font-black text-[#102A72]">Unable to Load Service</h1>
        <p className="mt-3 max-w-md text-slate-500">{error.message}</p>
        <Link to="/" className="mt-8 rounded-xl bg-[#73B72B] px-7 py-4 font-bold text-white">Return Home</Link>
      </main>
    );
  }

  // ================= Service Page =================

  return (
    <>
    <main>
      <Hero hero={service.hero} breadcrumb={service.breadcrumb} />
      <Overview overview={service.overview} />
      <CTA/>
    </main>
    <Footer/>
    </>
  );
}
