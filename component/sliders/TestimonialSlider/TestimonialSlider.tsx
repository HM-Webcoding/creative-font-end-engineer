import Image from "next/image";
import clintImage from "@/public/images/client-1.jpg";

const TestimonialSlider = () => {
  return (
    <section id="testimonial" className="relative bg-[#EEEFFF] py-[100px]">
      <div className="container mx-auto px-4">
        <div className="max-w-[744px] mx-auto">
          {/* Avatar Row */}
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-white opacity-70 hover:opacity-100 transition"
              >
                <Image
                  src={clintImage} // Adjust src per image
                  alt="testimonial client avatar"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Testimonial Content */}
          <div className="pt-5 space-y-10">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="text-center">
                <p className="text-[24px] leading-[40px] text-[#5D5D66] font-sans">
                  “Simply dummy text of the printing and{" "}
                  <span className="text-[#1C1C1E]"> Expert Advisor.</span> lorem
                  Ipsum has been the standard dummy text ever since the when an
                  unknown printer took a galley of type and scrambled.”
                </p>
                <p className="text-[20px] pt-5">
                  <span className="font-semibold">Bm Ashik -</span> UI/UX
                  Designer
                </p>
                <div className="flex justify-center items-center gap-1 pt-3 text-[#FFA722]">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
