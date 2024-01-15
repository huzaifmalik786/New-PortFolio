import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Kavach Hackathon - Winner',
        stage: '2023',
      },
      {
        title: 'Appointed as Student Placement Coordinator - JMI',
        stage: '2023'
      }
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'SDE Intern - Heliverse Technologies',
        stage: '2023 - Present*',
      },
      {
        title: 'Tech Lead - 180DC JMI',
        stage: '2023 - Present*',
      },
      {
        title: 'Web Development Team Lead - GDSC,JMI',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'High School - AMS, SRE - 95.6%',
        stage: '2019',
      },
      {
        title: 'HSC/Intermediate - AMS, SRE - 92%',
        stage: '2021',
      },
      {
        title: 'E&C Engineering - Jamia Millia Islamia, New Delhi',
        stage: '2025*',
      },
    ],
  },
];

import Avatar from "../../components/Avatar"
import Circles from "../../components/Circles"

import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

import CountUp from "react-countup";
import Head from "next/head";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Head>
        <title>Huzaif Malik: About Me</title>
      </Head>
      <div className="h-full bg-primary/30 py-32 pb-16 md:pb-32 text-center xl:text-left">
        <Circles />
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px]">
          <Avatar />
        </motion.div>
        <div className="container overflow-scroll md:overflow-hidden mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 text-[35px]">Behind the <span className="text-accent">Curtain of Code</span>: A Developer's Tale</motion.h2>
            <motion.p variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit="hidden" className="mx-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              Welcome to my digital realm! I'm Huzaif Malik, a passionate software developer on a perpetual quest to craft innovative and seamless online experiences. With a foundation built on code and creativity, I thrive on transforming concepts into functional, visually compelling realities.
              Beyond the lines of code, I believe in the power of user-centric design, striving to create interfaces that not only meet functional requirements but also elevate the overall user experience.
            </motion.p>
            <motion.div variants={fadeIn('right', 0.6)} initial="hidden" animate="show" exit="hidden" className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
              <div className="flex flex-1 xl:gap-x-6">
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <span><CountUp start={0} end={2} duration={2} />+</span>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
                </div>
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <span><CountUp start={0} end={400} duration={3} />+</span>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Questions on Leetcode</div>
                </div>
                <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <span><CountUp start={0} end={10} duration={2} />+</span>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemindex) => {
                return (
                  <div key={itemindex} className={`${index === itemindex && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemindex)}>
                    {item.title}
                  </div>
                )
              })}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center xl:items-baseline text-white/60">
                    <div className="font-light mb-2 mb:mb-0">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div key={itemIndex} className="text-2xl text-white">{icon}</div>
                        )
                      })}
                    </div>

                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </>
  );
};

export default About;
