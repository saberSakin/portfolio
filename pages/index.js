/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Link from "next/link";

const Home = () => {
  // Create a ref to store the Typed instance
  const typedRef = useRef(null);

  // Use useEffect to initialize Typed.js when the component mounts
  useEffect(() => {
    const options = {
      strings: ["Engineer", "Programmer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    typedRef.current = new Typed(".auto-type", options);

    // Clean up the Typed instance when the component unmounts
    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <div
      className="bg-primary/60 h-full bg-gradient-to-r from-primary/10 via-black/30
    to-black/10"
    >
      {/*text */}
      <div className="w-full h-full">
        <div
          className="text-center flex flex-col  justify-center xl:pt-40 xl:text-left
    h-full container mx-auto"
        >
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=""
          >
            Hey there<span className="text-accent">...</span>
          </motion.h2>
          {/*title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            I'm Sakin
          </motion.h1>
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            <span className="auto-type text-accent"></span>
          </motion.h1>
          {/*subtitle*/}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Turning concepts into digital reality, where code converges with
            creativity and functionality seamlessly blends with captivating
            elegance. Let's collaboratively shape a digital masterpiece.
          </motion.p>
          {/*btn */}
          <div className="flex justify-center xl:hidden relative z-10">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/*image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/*bg-img*/}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        {/*particles*/}
        <ParticlesContainer />
        {/*avatar img*/}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
