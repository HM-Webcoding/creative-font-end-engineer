import darkLogo from "@/public/images/dark-logo.svg";
import eventImg from "@/public/images/client-1.jpg";
import Image from "next/image";
import { Facebook, Instagram, Linkdin, RingBell, Twiter } from "../icons";
import MovingAnimatedShape from "../MovingAnimatedShape";
import footerShape from "@/public/images/footer shape.svg";
import footerShape1 from "@/public/images/footer shape 1.svg";

const Footer = () => {
  const socialIcons = [
    { name: "facebook", icon: <Facebook /> },
    { name: "twitter", icon: <Twiter /> },
    { name: "instagram", icon: <Instagram /> },
    { name: "linkedin", icon: <Linkdin /> },
  ];

  const quickLinks = [
    "About Company",
    "Strategy",
    "Investor Presentation",
    "Investor Career",
    "Meet Our Team",
    "Get in Touch",
  ];

  const services = [
    "Digital Marketing",
    "Web Development",
    "UI/UX Design",
    "SEO Optimization",
    "Brand Strategy",
    "Consulting Services",
  ];

  return (
    <footer
      id="footer"
      className="relative bg-[#0C0129] pt-20 pb-16 overflow-hidden z-10"
    >
      <div className="container mx-auto px-4">
        {/* Top Sections */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          {/* About */}
          <div className="w-full lg:w-1/3 bg-gradient-to-br from-[rgba(254,113,185,0.04)] to-[rgba(20,2,73,0.01)] shadow-inner p-6 sm:p-8 rounded-[10px]">
            <div className="mb-6 max-w-[180px]">
              <Image src={darkLogo} alt="dark logo" priority />
            </div>
            <p className="text-white text-base leading-7 font-primary mb-4">
              Introducing our team of talented and skilled professionals who are
              ready to increase your productivity and grow your business.
            </p>
            <p className="text-[#d9d9d9] pt-5">We Are Available !!</p>
            <p className="text-white font-medium text-lg">
              Mon-Sat: <time dateTime="10:00">10:00</time>am -{" "}
              <time dateTime="20:00">08:00</time>pm
            </p>
            <div className="flex gap-3 pt-6 flex-wrap">
              {socialIcons.map(({ name, icon }) => (
                <a
                  key={name}
                  href="#"
                  aria-label={`Social media - ${icon}`}
                  className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white/10 text-white/40 hover:text-white hover:bg-gradient-to-r from-[#708BFD] to-[#FE71B9] transition-all duration-500"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links & Events */}
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row gap-10 bg-gradient-to-br from-[rgba(254,113,185,0.04)] to-[rgba(20,2,73,0.01)] shadow-inner p-6 sm:p-8 rounded-[10px]">
            <div className="w-full lg:w-1/3">
              <h3 className="text-white text-2xl font-semibold font-primary mb-6">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-4">
                {quickLinks.map((text, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white text-base font-primary hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 transition-all"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/3">
              <h3 className="text-white text-2xl font-semibold font-primary mb-6">
                Our Services
              </h3>
              <ul className="flex flex-col gap-4">
                {services.map((text, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white text-base font-primary hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 transition-all"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Events */}
            <div className="w-full lg:w-1/3">
              <h3 className="text-white text-xl font-semibold font-primary mb-6">
                Upcoming Events
              </h3>
              <div className="flex flex-col gap-6">
                {[1, 2, 3].map((_, idx) => (
                  <div key={idx} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={eventImg}
                        alt="Event profile"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-white text-base font-medium font-primary block hover:underline"
                      >
                        Business Consulting
                      </a>
                      <time className="text-white/50 text-sm font-primary block">
                        26 March, USA
                      </time>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div
          style={{ backgroundImage: "url('/images/newsletter-bg.svg')" }}
          className="mt-12 bg-cover bg-center bg-no-repeat p-6 sm:p-10 rounded-[10px] flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          {/* Icon & Text */}
          <div className="flex items-center gap-6 w-full lg:w-1/2 text-center sm:text-left">
            <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <RingBell className="text-3xl" />
              </div>
            </div>
            <h3 className="text-white text-xl sm:text-2xl font-semibold font-secondary leading-snug">
              Keep up to date <br />
              Get updates with latest topics
            </h3>
          </div>

          {/* Form */}
          <div className="w-full lg:w-[510px] bg-gradient-to-br from-white/45 to-pink-200/0 border border-white/30 shadow-inner p-3 rounded-[10px]">
            <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email..."
                aria-label="Email address"
                className="flex-grow text-white text-base sm:text-lg font-primary placeholder-white bg-transparent outline-none w-full py-2 px-4"
              />
              <button
                type="submit"
                className="primary-gradient text-white py-2 px-6 rounded-md font-medium hover:opacity-90 transition w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <MovingAnimatedShape
        className="absolute top-0 -left-20 hidden lg:block -z-1"
        src={footerShape}
        alt="rocket shape"
        width={300}
        height={300}
      />

      <MovingAnimatedShape
        className="absolute -bottom-20 right-0 hidden lg:block -z-1"
        src={footerShape1}
        alt="rocket shape"
        width={250}
        height={250}
      />
    </footer>
  );
};

export default Footer;
