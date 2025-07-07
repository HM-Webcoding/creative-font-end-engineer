"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

import star1 from "@/public/images/Star 4.svg";
import star2 from "@/public/images/Union.svg";

const marqueeItems = ["Creative", "Solutions", "Expert Guidance", "Consulting"];

const MarqueeScroll = () => {
  const marqueeContainerRef = useRef(null);
  const scrollingTextRef = useRef(null);

  useEffect(() => {
    const tween = gsap.to(scrollingTextRef.current, {
      x: "-50%",
      ease: "none",
      duration: 50,
      repeat: -1,
    });

    const el = marqueeContainerRef.current;

    const handleMouseEnter = () => tween.pause();
    const handleMouseLeave = () => tween.play();

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tween.kill();
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={marqueeContainerRef}
      className="w-full overflow-hidden whitespace-nowrap box-border relative z-10 py-5 mt-[160px]"
      style={{
        background: "linear-gradient(90deg, #708BFD 0%, #FE71B9 100%)",
      }}
    >
      <div ref={scrollingTextRef} className="inline-block pl-[10%]">
        <div className="flex items-center gap-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <h4
              key={i}
              className="flex items-center text-[61px] uppercase font-bold text-transparent whitespace-nowrap"
              style={{
                WebkitTextStroke: "1.5px #fff",
                fontFamily: "var(--primary-font)",
              }}
            >
              {marqueeItems[i % marqueeItems.length]}
              <span className="-mr-10 inline-block relative w-12 h-12">
                <Image
                  src={i % 2 === 0 ? star1 : star2}
                  alt="star icon"
                  fill
                  className="object-contain"
                />
              </span>
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeScroll;
