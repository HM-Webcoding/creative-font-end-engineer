import { useEffect } from "react";
import * as anim from "@/utils/gsapAnimation";

const useGsapAnim = (ref, type = "fadeInUp", delay = 0) => {
  useEffect(() => {
    if (!ref || !type || typeof anim[type] !== "function") return;

    if (Array.isArray(ref.current)) {
      ref.current.forEach((el, i) => {
        if (el) anim[type](el, delay + i * 0.1);
      });
    } else if (ref.current) {
      anim[type](ref.current, delay);
    }
  }, [ref, type, delay]);
};

export default useGsapAnim;
