"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";

import { PhoneRing, Plus } from "../icons";
import PrimaryButton from "../ui/PrimaryButton";
import MarqueeScrollText from "../MarqueeScrollText";

import heroImage from "@/public/images/banner image 2.png";
import circleIcon from "@/public/images/Circle Button.png";
import client1 from "@/public/images/client-1.jpg";
import client2 from "@/public/images/client-2.jpg";
import shape from "@/public/images/hero-shape.svg";
import rocketShape from "@/public/images/Rocket-small.svg";
import heroShape from "@/public/images/Element Blur.svg";

import useGsapAnim from "@/hooks/useGsapAnimation";
import MovingAnimatedShape from "@/component/MovingAnimatedShape";

const HeroSection = () => {
  const headingRefs = useRef([]);
  const cardRef = useRef(null);
  const shapeRef = useRef(null);
  const imageRefs = useRef(null);
  const orbitRef = useRef(null);

  useGsapAnim(headingRefs, "fadeInUp");
  useGsapAnim(cardRef, "fadeInRight", 0.2);
  useGsapAnim(shapeRef, "floatInfinite", 0);
  useGsapAnim(imageRefs, "zoomIn", 0.2);
  useGsapAnim(orbitRef, "circleSpin", 8);

  const clients = [client1, client2, client1];

  return (
    <section
      id="hero_part"
      className="pt-18 relative overflow-hidden"
      aria-label="Hero Section"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start justify-between relative z-10">
        {/* Left Content */}
        <div className="max-w-[1070px] z-1 relative">
          <header className="relative w-fit">
            <h1
              ref={(el) => (headingRefs.current[0] = el)}
              className="text-[42px] sm:text-[56px] lg:text-[64px] xl:text-[100px] font-bold leading-tight text-[var(--headingColor)]"
            >
              We shape the future of{" "}
              <span className="bg-gradient-to-r from-[#5163FF] via-[#C872F2] to-[#FE71B9] bg-clip-text text-transparent">
                business
              </span>
            </h1>
            <p
              ref={(el) => (headingRefs.current[1] = el)}
              className="pt-6 text-[18px] leading-[32px] max-w-[574px] text-[var(--textColor)]"
            >
              A business consultant is a professional who provides expert advice
              and guidance to businesses on various aspects such.
            </p>

            {/* Decorative Shapes */}
            <div
              ref={shapeRef}
              className="absolute -top-10 -right-2.5 hidden lg:block"
            >
              <Image
                src={shape}
                alt="decorative shape"
                width={100}
                height={100}
              />
            </div>
            <MovingAnimatedShape
              className="absolute bottom-23 left-[54%] hidden lg:block"
              src={rocketShape}
              alt="rocket shape"
              width={90}
              height={90}
            />
          </header>

          {/* CTA and Contact */}
          <div
            ref={(el) => (headingRefs.current[2] = el)}
            className="pt-12 flex items-center gap-8 flex-wrap"
          >
            <Link href="/about" className="text-[var(--textColor)]">
              <PrimaryButton>Explore more</PrimaryButton>
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border-2 border-gray-200 rounded-full flex items-center justify-center">
                <PhoneRing />
              </div>
              <div>
                <p
                  ref={(el) => (headingRefs.current[3] = el)}
                  className="text-sm text-[var(--textColor)]"
                >
                  Free Consultant
                </p>
                <address
                  ref={(el) => (headingRefs.current[4] = el)}
                  className="not-italic text-base text-[var(--headingColor)]"
                >
                  <a href="tel:(406) 555-0120">(406) 555-0120</a>
                </address>
              </div>
            </div>
          </div>

          {/* Client Avatars */}
          <div
            ref={(el) => (headingRefs.current[5] = el)}
            className="pt-10 flex items-center gap-5 flex-wrap"
          >
            <div className="flex items-center -space-x-4">
              {clients.map((img, id) => (
                <Image
                  key={id}
                  src={img}
                  alt={`Client ${id}`}
                  width={55}
                  height={55}
                  className="w-[55px] h-[55px] rounded-full border-4 border-white object-cover object-top"
                />
              ))}
              <div className="w-[55px] h-[55px] relative rounded-full overflow-hidden border-4 border-white bg-[#FE71BA]/80 flex items-center justify-center">
                <Image
                  src={client2}
                  alt="More Clients"
                  fill
                  className="object-cover opacity-20"
                />
                <Plus className="text-white z-10 absolute" />
              </div>
            </div>
            <p className="text-sm max-w-[200px] text-[var(--bodyColor)]">
              <span className="text-[var(--primaryColor)] font-medium">
                2.5K+
              </span>{" "}
              Business Peoples Already Registered
            </p>
          </div>
        </div>
      </div>

      {/* Right Image OUTSIDE container */}
      <div
        ref={imageRefs}
        className="absolute -bottom-[100px] right-0 w-[60%] h-full pointer-events-none hidden lg:block"
      >
        <div className="relative h-full w-full">
          <Image
            src={heroImage}
            alt="Hero banner"
            fill
            className="object-contain object-right"
            priority
          />
          <div ref={orbitRef} className="absolute top-20 left-[47%] z-100">
            <Image
              src={circleIcon}
              ref={orbitRef}
              alt="Play button icon"
              width={170}
              height={170}
            />
          </div>
        </div>
      </div>

      <MovingAnimatedShape
        className="absolute top-23 left-5 hidden lg:block"
        src={heroShape}
        alt="rocket shape"
        width={90}
        height={90}
      />

      <MarqueeScrollText />
    </section>
  );
};

export default HeroSection;
