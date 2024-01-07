

import ServiceSlider from "../../components/ServiceSlider"
import Bulb from "../../components/Bulb"
import Circles from "../../components/Circles"

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col"></div>
        <Bulb />
      </div>
    </div>
  );
};

export default Services;
