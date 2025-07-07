"use client";
import useGsapAnim from "@/hooks/useGsapAnimation";
import { useRef } from "react";

const funFacts = [
  { id: 1, percentage: "99%", label: "Business Strategy" },
  { id: 2, percentage: "80%", label: "Customer Experience" },
  { id: 3, percentage: "62K", label: "Marketing Growth" },
  { id: 4, percentage: "15K", label: "Product Scalability" },
  { id: 5, percentage: "100", label: "Product Scalability" },
];

const FunFact = () => {
  const headingRefs = useRef([]);

  useGsapAnim(headingRefs, "fadeInUp");
  return (
    <section id="fun_fact" className="pb-24" aria-labelledby="funFactHeading">
      <div className="container mx-auto px-4">
        <div
          ref={(el) => {
            headingRefs.current[0] = el;
          }}
          className="max-w-[1365px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 justify-between items-center"
        >
          {funFacts.map((fact) => (
            <div
              key={fact.id}
              className="max-w-[200px] pt-5 border-t-2 border-[var(--headingColor)]/15 hover:border-[var(--primaryColor)]"
            >
              <h4 className="text-[40px] md:text-[50px] leading-20 font-normal text-[var(--headingColor)] ">
                {fact.percentage}
              </h4>
              <p className="pt-5 text-[16px] text-[var(--textColor)]">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFact;
