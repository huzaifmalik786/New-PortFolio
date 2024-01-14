import WorkSlider from "../../components/WorkSlider";
import Circles from "../../components/Circles"
import Bulb from "../../components/Bulb"

import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

import { BsArrowRight } from "react-icons/bs";

const Work = () => {
  return (
    <div className="h-full bg-primary/50 pt-32 pb-16 md:pb-36 md:pt-40 flex items-center">
      <Circles />
      <Bulb />
      <div className="container mx-auto h-full sm:overflow-hidden overflow-scroll">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[300vw] flex-col lg:text-left mb-4
          xl:mb-0">
            <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" exit="hidden" animate="show" className="h2 xl:mt-8">
              My <span className="text-accent">Works</span>
            </motion.h2>
            <motion.p variants={fadeIn('up', 0.4)} initial="hidden" exit="hidden" animate="show" className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Whether it's crafting intuitive user interfaces, optimizing performance, or integrating cutting-edge technologies, my projects embody the fusion of creativity and functionality.
            </motion.p>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Explore</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </div>

          {/* slider */}
          <motion.div variants={fadeIn('down', 0.6)} initial="hidden" exit="hidden" animate="show" className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
