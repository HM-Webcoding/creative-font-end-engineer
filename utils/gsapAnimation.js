import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const baseScrollTrigger = (trigger) => ({
  trigger,
  start: "top 85%",
  toggleActions: "play reverse play reverse",
  markers: false,
});

export const slideFadeDown = (target, delay = 0) => {
  gsap.fromTo(
    target,
    { y: -30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      delay,
      duration: 0.8,
      ease: "power3.out",
    }
  );
};

export const stickyNavScrollReveal = (target) => {
  let lastScrollY = window.scrollY;

  ScrollTrigger.create({
    start: 0,
    end: "bottom bottom",
    onUpdate: () => {
      const currentY = window.scrollY;

      if (currentY < lastScrollY) {
        gsap.to(target, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(target, {
          y: -100,
          duration: 0.3,
          ease: "power2.in",
        });
      }

      lastScrollY = currentY;
    },
  });
};

export const fadeInUp = (target, delay = 0) => {
  gsap.fromTo(
    target,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      delay,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: baseScrollTrigger(target),
    }
  );
};

export const fadeInLeft = (target, delay = 0) => {
  gsap.fromTo(
    target,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      delay,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: baseScrollTrigger(target),
    }
  );
};

export const fadeInRight = (target, delay = 0) => {
  gsap.fromTo(
    target,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      delay,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: baseScrollTrigger(target),
    }
  );
};

export const zoomIn = (target, delay = 0) => {
  gsap.fromTo(
    target,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      delay,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: baseScrollTrigger(target),
    }
  );
};

export const floatInfinite = (
  target,
  duration = 4,
  yDistance = 20,
  xDistance = 10
) => {
  gsap.to(target, {
    y: `+=${yDistance}`,
    x: `+=${xDistance}`,
    duration,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
};

export const circleSpin = (target, duration = 6) => {
  gsap.to(target, {
    rotate: 360,
    duration,
    ease: "linear",
    repeat: -1,
    transformOrigin: "50% 50%",
  });
};
