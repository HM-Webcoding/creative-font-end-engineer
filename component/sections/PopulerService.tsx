import image from "@/public/images/hero-image01.png";
import Image from "next/image";
import IconButton from "../ui/IconButton";
import { ArrowTop } from "../icons";
import PrimaryButton from "../ui/PrimaryButton";
import bgColorShdowCenter from "@/public/images/Bg Color Shado (1).svg";
import bgElement from "@/public/images/Bg Element.svg";
import bgColorShdowBottom from "@/public/images/Bg Color Shado.svg";

const PopulerService = () => {
  return (
    <section
      id="service"
      className="relative pt-[100px] pb-[120px] bg-[linear-gradient(135deg,_#FFF9FC_0%,_#FCFCFD_100%)]"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center pb-[70px]">
          <div className="secondary_button mb-4">
            <IconButton>
              <ArrowTop />
              What We Do
            </IconButton>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--headingColor)]">
            Our Popular Services
          </h2>
        </div>

        {/* Service Item */}
        <div className="relative z-10">
          <div className="max-w-[1365px] mx-auto flex flex-col md:flex-row items-center gap-15 bg-white border border-white inset-double-light rounded-[10px] p-[50px]">
            <div className="max-w-[416px] w-full min-h-[345px] border-[5px] border-white rounded-[10px] overflow-hidden object-cover">
              <Image
                src={image}
                alt="Digital Marketing Service"
                className="w-full h-[345px] object-cover rounded-[10px]"
                width={416}
                height={345}
              />
            </div>

            <div className="max-w-[600px] w-full">
              <div className="bg-[#EEEFFF] text-sm font-medium text-indigo-600 rounded-full px-4 py-2 inline-block mb-2">
                <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                  Service 1
                </span>
              </div>

              <div className="mb-5">
                <h3 className="text-[56px] font-semibold text-[var(--headingColor)] mb-2">
                  Digital Marketing
                </h3>
                <p className="text-gray-600 text-lg">
                  Where we specialize in transforming your visions into
                  unforgettable experiences. With a passion for perfection and
                  an eye for detail, our dedicated team of event professionals
                  ensures impactful results.
                </p>
              </div>

              <div className="pt-5">
                <button className="font-semibold gap-2 text-[var(--textColor)] py-4 px-7 rounded-xl border-2 border-[#00234b]/10 hover:opacity-90 transition">
                  Read Details
                </button>
              </div>
            </div>
          </div>

          {/* View All Services Button */}
          <div className="flex justify-center pt-[60px]">
            <PrimaryButton>View all services</PrimaryButton>
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute top-0 left-0 max-w-[260px]">
        <Image src={bgElement} alt="background shape left" />
      </div>
      <div className="absolute top-0 right-0">
        <Image src={bgColorShdowCenter} alt="background shape right" />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src={bgColorShdowBottom} alt="background shape bottom" />
      </div>
    </section>
  );
};

export default PopulerService;
