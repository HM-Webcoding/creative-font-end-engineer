import Image from "next/image";
import workIcon from "@/public/images/Rocket-small.svg";
import RecentWorkSlider from "@/component/sliders/RecentWork/RecentWorkSlider";

const RecentWork = () => {
  return (
    <section id="recent_work" className="py-24">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 -mb-20">
          <div className="flex items-center justify-end gap-4 w-full lg:w-1/4 h-fit">
            <Image
              src={workIcon}
              alt="Work showcase icon"
              width={40}
              height={40}
            />
            <span className="text-[18px] font-primary bg-gradient-to-r from-[#708BFD] to-[#FE71B9] bg-clip-text text-transparent">
              Work showcase
            </span>
          </div>

          <h2 className="text-[60px] lg:text-[140px] xl:text-[180px] font-primary font-bold leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-[#5163FF14] to-[#FE71B902] w-full lg:w-1/2 text-center lg:text-left">
            Recent <span className="pl-16 inline-block">Works</span>
          </h2>

          <p className="text-right text-base text-gray-400 leading-8 font-primary w-full lg:w-1/4">
            Ready to transform your hard work into a thriving, stress-free
            business?
          </p>
        </div>
        <RecentWorkSlider />
      </div>
    </section>
  );
};

export default RecentWork;
