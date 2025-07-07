import { useEffect, useRef } from "react";
import Image from "next/image";
import workImage from "@/public/images/slider image one.png";
import { ArrowTop } from "@/component/icons";
import gsap from "gsap";

const SlideItems = ({ isActive }: { isActive: boolean }) => {
  const contentRef = useRef(null);

  console.log(isActive);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="relative w-full h-full max-w-5xl mx-auto shadow-xl pb-4 slide-inner transition-all">
      <div className="relative w-full h-full border-4 border-white rounded-[10px] overflow-hidden">
        <Image
          src={workImage}
          alt="Recent work preview image"
          className="object-cover w-full h-full"
          fill
          sizes="(max-width: 768px) 100vw, 700px"
        />
      </div>

      <div
        className={`absolute bottom-8 left-8 w-[85%] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isActive
            ? "opacity-100 translate-y-0 visible pointer-events-auto"
            : "opacity-0 translate-y-10 invisible pointer-events-none"
        }`}
        ref={contentRef}
      >
        <div className="inline-block mb-2 px-4 py-1 rounded bg-gradient-to-r from-indigo-500 to-pink-500">
          <p className="text-white text-sm font-primary">2024, Business</p>
        </div>
        <div className="flex justify-between items-center bg-white px-6 py-4 rounded-md">
          <h4 className="text-xl font-primary font-semibold text-gray-900">
            Business Consulting Service
          </h4>
          <div className="p-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-md">
            <ArrowTop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideItems;
