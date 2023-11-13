/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useState } from "react";

// icons
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiCplusplus } from "react-icons/si";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiTailwindcss,
  SiC,
} from "react-icons/si";
import { BiLogoBlender, BiLogoPython } from "react-icons/bi";

//  data
const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "Programming and Web Development",
        icons: [
          <SiC />,
          <SiCplusplus />,
          <BiLogoPython />,

          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiTailwindcss />,
        ],
      },
      {
        title: "Machine Learning",
        icons: [
          <BiLogoPython />,
          <SiTensorflow />,
          <SiKeras />,
          <SiPytorch />,
          <SiScikitlearn />,
        ],
      },
      {
        title: "Graphics Designg",
        icons: [
          <SiAdobephotoshop />,
          <SiAdobeillustrator />,
          <SiAdobepremierepro />,
          <SiAdobeaftereffects />,
          <BiLogoBlender />,
        ],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Graduated from Kushtia Zilla School, Bangladesh",
        stage: "2016",
      },
      {
        title: "Graduated from Kushtia Govt. Collage, Bangladesh",
        stage: "2018",
      },
      {
        title: "Department of ETE, RUET, Bangladesh (Undergraduate)",
        stage: "2019-",
      },
    ],
  },

  {
    title: "Research Field",
    info: [
      {
        title: "Machine Learning, Deep Learninng, AI, XAI",
        stage: "-",
      },
      {
        title:
          "Classification, Prediction, Segmentation, Detection, Computer Vision",
        stage: "-",
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title:
          "Student, working on different projects: web development, machine learning and electronics.",
        stage: "-",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/60 py-32 text-center xl:text-left">
      <Circles />
      {/**avatar img*/}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div
        className="container mx-auto h-full flex flex-col items-center xl:flex-row
      gap-x-6"
      >
        {/*text*/}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            My <span className="text-accent">journery</span>
            <br /> from curiosity to a programmer.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Hey there, I'm Saber Sakin, an Electronics and Telecommunication
            Engineering student at RUET, Bangladesh. I'm a tech enthusiast about
            programming, electronics, full-stack web development, and graphics
            design. Outside of academics, I enjoy gaming, watching movies, and
            staying updated on the latest tech trends and gadgets.
          </motion.p>
          {/*counters*/}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-l xl:gap-x-6">
              {/*expericencce*/}
              <div
                className="relative flex-1 after-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/*clients*/}
              <div
                className="relative flex-1 after-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Research Completed
                </div>
              </div>
              {/*projects*/}
              <div
                className="relative flex-1 after-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/*info*/}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } 
                  cursor-pointer capitalize xl:text-lg relative after:w-8
                  after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/*title*/}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/*icons*/}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
