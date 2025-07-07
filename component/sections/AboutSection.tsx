"use client";
import Image from "next/image";
import Link from "next/link";
import aboutImage from "@/public/images/about.png";
import ceoImage from "@/public/images/ceo.jpg";
import bgShape from "@/public/images/Bg shape right.png";
import PrimaryButton from "../ui/PrimaryButton";
import IconButton from "../ui/IconButton";
import { ArrowTop } from "../icons";
import { useRef } from "react";
import useGsapAnim from "@/hooks/useGsapAnimation";

const AboutSection = () => {
  const headingRefs = useRef([]);
  const cardRef = useRef();
  const imageRefs = useRef();

  useGsapAnim(headingRefs, "fadeInUp");
  useGsapAnim(cardRef, "fadeInRight", 0.2);
  useGsapAnim(imageRefs, "zoomIn", 0.2);

  return (
    <section
      id="about"
      className="py-20 lg:py-28 relative"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-16 items-center">
          {/* Left Side Image */}
          <div ref={imageRefs} className="w-full lg:max-w-[575px] ml-auto">
            <Image
              src={aboutImage}
              alt="About our company"
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Right Content */}
          <div
            ref={(el) => (headingRefs.current[0] = el)}
            className="w-full lg:max-w-[565px] mr-auto px-0 md:px-3"
          >
            <div className="mb-4">
              <IconButton>
                <ArrowTop />
                Know about us
              </IconButton>
            </div>

            <article
              className="section_heading"
              aria-labelledby="about-heading"
            >
              <h2
                ref={(el) => (headingRefs.current[1] = el)}
                id="about-heading"
                className="text-5xl md:text-4xl font-semibold max-w-xl pt-6 text-[var(--headingColor)]"
              >
                All-in-one web solution for your business
              </h2>
              <p
                ref={(el) => (headingRefs.current[2] = el)}
                className="pt-4 text-[var(--textColor)] max-w-2xl"
              >
                We are creative agency, we are here to helping your business
                growth consectetur adipiscing.
              </p>
              <ul
                ref={(el) => (headingRefs.current[3] = el)}
                className="mt-6 space-y-4 list-none pl-10 relative"
              >
                {[
                  "There are many variations of passages available",
                  "Majority have suffered alteration in some form",
                  "Contrary to popular belief is not simply random",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="relative text-[18px] leading-8 text-[var(--textColor)]"
                  >
                    <span className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 w-[26px] h-[26px] bg-white rounded-full shadow-md"></span>
                    <span className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-custom-radial z-10"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <div
              ref={(el) => (headingRefs.current[4] = el)}
              className="pt-10 flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <Link href="/about" className="text-[var(--textColor)]">
                <PrimaryButton>More about us</PrimaryButton>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] rounded-full border-2 border-gray-200 overflow-hidden">
                  <Image
                    src={ceoImage}
                    alt="CEO profile"
                    width={60}
                    height={60}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-sm text-center">
                  <div className="border-b border-gray-200 pb-1 mb-1">
                    Autography
                  </div>
                  <p className="text-[var(--textColor)]">CEO at Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 z-[-1]">
        <Image
          src={bgShape}
          alt="About background shape"
          className=""
          width={355}
          height={600}
        />
      </div>
    </section>
  );
};

export default AboutSection;
