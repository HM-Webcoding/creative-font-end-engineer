"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";
import SlideItems from "./SlideItems";
import "swiper/css/effect-coverflow";
import SliderNextButton from "@/component/ui/SliderNextButton";
import { LeftArrow, RightArrow } from "@/component/icons";
import SliderPrevButton from "@/component/ui/SliderPrevButton";

const RecentWorkSlider = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const animateSlides = (swiper: any) => {
    swiper.slides.forEach((slide: HTMLElement, index: number) => {
      const inner = slide.querySelector(".slide-inner") as HTMLElement;
      if (!inner) return;

      gsap.killTweensOf(inner);

      let config = {
        height: 490,
        scale: 1,
        delay: 0,
      };

      if (index === swiper.activeIndex) {
        config = { height: 605, scale: 1.025, delay: 0.1 };
      } else if (
        index === swiper.activeIndex + 1 ||
        (swiper.activeIndex === swiper.slides.length - 1 && index === 0)
      ) {
        config = { height: 530, scale: 1.01, delay: 0.05 };
      }

      gsap.to(inner, {
        ...config,
        duration: 0.7,
        ease: "expo.out",
      });
    });
  };

  useEffect(() => {
    if (swiperRef.current) {
      animateSlides(swiperRef.current);
    }
  }, []);

  return (
    <>
      <div className="flex gap-5 justify-end">
        <SliderNextButton
          onClick={() => swiperRef.current?.slideNext()}
          className="group"
        >
          <RightArrow className="w-5 h-5 group-hover:[&_.arrow-path]:stroke-white" />
        </SliderNextButton>

        <SliderPrevButton
          onClick={() => swiperRef.current?.slidePrev()}
          className="group"
        >
          <LeftArrow className="w-5 h-5 group-hover:[&_.arrow-path]:stroke-white" />
        </SliderPrevButton>
      </div>

      <div className="relative h-[605px] overflow-visible ">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            animateSlides(swiper);
            setActiveIndex(swiper.activeIndex);
          }}
          onSlideChange={(swiper) => {
            animateSlides(swiper);
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {[...Array(6)].map((_, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div className="w-full h-full flex items-end justify-center">
                  <SlideItems isActive={isActive} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default RecentWorkSlider;
