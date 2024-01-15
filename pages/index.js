import Avatar from "../components/Avatar";
import ProjectsBtn from "../components/ProjectsBtn";
import Circles from "../components/Circles";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import Head from "next/head";

const Home = () => {
  return (
    <>
    <Head>
      <title>Huzaif Malik: Homegage</title>
    </Head>
      <div className="w-full h-full py-36 xl:pt-12 pb-16 md:pb-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="flex xl:hidden">
          <Circles />
        </div>
        <div className="text-center overflow-scroll md:overflow-hidden flex flex-col xl:pt-28 xl:text-left h-full container mx-auto xl:ml-16">
          <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1 xl:mb-4">
            <span className="hidden xl:block">
              Bringing digital visions<br />to life with{' '}
              <span className="text-accent inline-flex flex-col h-[68px] overflow-hidden">
                <ul className="block text-left leading-tight [&_li]:block animate-text-slide">
                  <li>Creativity</li>
                  <li>Innovation</li>
                  <li>Precision</li>
                </ul>
              </span>
            </span>
            <span className="block xl:hidden">
              Bringing digital visions to life with{' '}
              <span className="text-accent inline-flex flex-col h-[40px] md:h-[68px] overflow-hidden">
                <ul className="block text-left leading-tight [&_li]:block animate-text-slide">
                  <li>Creativity</li>
                  <li>Innovation</li>
                  <li>Precision</li>
                </ul>
              </span>
            </span>
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-5">
            Elevating ideas through meticulously crafted code is the essence of my professional journey.
            As a dedicated software developer, I am passionate about the convergence of innovation, creativity, and precision in the digital realm.
          </motion.p>
          {/* <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div> */}
          <motion.div className="flex" variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0 hidden xl:flex">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge animate-pulse duration-5 translate-z-0"></div>
        <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden" transition={{ duration: 1, ease: "easeInOut" }} className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[2%]">
          <Avatar />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
