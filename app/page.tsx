
import AboutSection from "@/component/sections/AboutSection";
import FunFact from "@/component/sections/Funfact";
import HeroSection from "@/component/sections/HeroSection";
import PopulerService from "@/component/sections/PopulerService";
import RecentWork from "@/component/sections/RecentWoek";
import Testimonial from "@/component/sections/Testimonial";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <FunFact/>
      <PopulerService/>
      <RecentWork/>
      {/* <Testimonial/> */}
    </>
  );  
}


