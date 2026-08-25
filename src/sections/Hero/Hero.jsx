import heroBg from "../../assets/images/hero/hero.png";
import { Link } from "react-router-dom";
import Container from "../../components/layout/Container";

export default function Hero({ hero }) {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        sm:min-h-[90vh]
        lg:min-h-[85vh]
      "
      style={{
        backgroundImage: `url(${hero?.backgroundImage || heroBg})`,
      }}
    >
      {/* Background overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/75
          via-black/50
          to-black/20
        "
      />

      {/* Subtle bottom fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-24
          bg-gradient-to-b
          from-transparent
          to-white/90
          sm:h-32
          lg:h-40
        "
      />

      {/* Content */}
      <Container>
    <div
  className="
    relative
    z-10
    flex
    min-h-[100svh]
    items-center
    py-28
    sm:min-h-[90vh]
    sm:items-start
    sm:py-32
    md:min-h-[720px]
    md:py-36
    lg:min-h-[85vh]
    lg:py-40
  "
>
          <div className="w-full max-w-4xl md:max-w-3xl lg:max-w-4xl">

            {/* Badge */}
            <span
              className="
                inline-flex
                max-w-full
                items-center
                rounded-full
                border
                border-white/20
                bg-white/10
                px-3.5
                py-1.5
                text-xs
                font-medium
                text-white
                backdrop-blur-md
                sm:px-5
                sm:py-2
                sm:text-sm
              "
            >
              <span className="mr-2">🏗️</span>

              <span className="truncate">
                {hero?.badge}
              </span>
            </span>

            {/* Heading */}
            <h1
              className="
                mt-5
                max-w-4xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-white
                sm:mt-6
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              {hero?.title}

              <span className="mt-1 block text-[#73B72B] sm:mt-2">
                {hero?.highlight}
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                 mt-5
  max-w-xl
  md:max-w-2xl
                text-sm
                leading-6
                text-gray-200
                sm:mt-6
                sm:text-base
                sm:leading-7
                lg:text-lg
                lg:leading-8
              "
            >
              {hero?.description}
            </p>

            {/* Buttons */}
            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:mt-9
                sm:flex-row
                sm:flex-wrap
                sm:gap-4
              "
            >
              <Link
                to={hero?.primaryButtonHref || "/contact"}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-[#73B72B]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-black/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#5EA628]
                  hover:shadow-xl
                  sm:w-auto
                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >
                {hero?.primaryButtonLabel || "Get Started"}
              </Link>

              <Link
                to={hero?.secondaryButtonHref || "/projects"}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-[#102A72]
                  sm:w-auto
                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >
                {hero?.secondaryButtonLabel || "View Projects"}
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}