// hooks/useSwiperGsapAnim.ts
import { useEffect } from "react";

const useSwiperGsapAnim = (swiperRef) => {
  useEffect(() => {
    if (!swiperRef?.current) return;

    const swiper = swiperRef.current;

    // Animate on mount
    animateSlides(swiper);

    // Listen to slide changes
    const onSlideChange = () => {
      animateSlides(swiper);
    };

    swiper.on("slideChange", onSlideChange);

    // Clean up
    return () => {
      swiper.off("slideChange", onSlideChange);
    };
  }, [swiperRef]);
};

export default useSwiperGsapAnim;
