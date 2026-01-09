import FaqAndCta from "../../components/FaqAndCta";
import HomeHero from "../../components/HomeHero";
import HowItWorks from "../../components/HowItWorks";
import Stats from "../../components/Stats";
import Testimonials from "../../components/Testimonials";
import VehicleTypes from "../../components/VehicleTypes";


export default function Home() {
  return (
    <>
    <HomeHero/>
    <HowItWorks />
      <Stats />
      <VehicleTypes />
      <Testimonials />
      <FaqAndCta />
    </>
  );
}
