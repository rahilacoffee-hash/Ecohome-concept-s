import heroBg from "../../assets/images/hero/hero.png";
import { Link } from "react-router-dom";
import Container from "../../components/layout/Container";

export default function Hero({ hero }) {
  return (
    <section
    id="home"
      className="relative min-h-[100svh] sm:min-h-[90vh] lg:min-h-[85vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${hero?.backgroundImage || heroBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 lg:h-48 bg-gradient-to-b from-transparent via-white/20 to-white" />

      {/* Content */}
      <Container>
      <div className="relative z-10 flex min-h-[100svh] sm:min-h-[90vh] lg:min-h-screen items-center sm:items-start pt-28 sm:pt-40 lg:pt-48 pb-16 sm:pb-0">
          <div className="max-w-5xl">
            {/* Badge */}

            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-md">
              🏗️ {hero?.badge}
            </span>

            {/* Heading */}

            <h1 className="mt-5 sm:mt-6 text-3xl sm:text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
              {hero?.title}
              <span className="block text-[#73B72B]">
                {hero?.highlight}
              </span>
            </h1>

            {/* Paragraph */}

            <p className="mt-5 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
              {hero?.description}
            </p>

            {/* Buttons */}

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                to={hero?.primaryButtonHref || "/contact"}
                className="
                  w-full
                  flex 
                  items-center
                  justify-center
                  sm:w-auto
                  rounded-full
                  bg-[#73B72B]
                  px-6
                  sm:px-8
                  py-3.5
                  sm:py-4
                  text-sm
                  sm:text-base
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#5EA628]
                  hover:shadow-xl
                "
              >
                {hero?.primaryButtonLabel}
              </Link>

              <Link
                to={hero?.secondaryButtonHref || "/projects"}
                className="
                  w-full
                   flex 
                  items-center
                  justify-center
                  sm:w-auto
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  px-6
                  sm:px-8
                  py-3.5
                  sm:py-4
                  text-sm
                  sm:text-base
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-slate-900
                "
              >
                {hero?.secondaryButtonLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
