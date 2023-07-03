import React from "react";
import safae from "../assets/safa.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-[12rem] mx-[4rem] max-xl:mx-[1rem]" id="about">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className=" text-[3rem] font-bold mb-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-900"
      >
        About Me
      </motion.h1>
      <div className=" flex gap-[10rem] max-xl:gap-[3rem] max-xl:flex-wrap justify-center">
        <motion.div
          className="w-[100%] flex flex-col gap-[2rem]"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className=" text-[2.5rem] max-md:text-[2rem]">
            I’m a full stack developer mainly focused on React ecosystem.
          </h1>
          <p className=" text-[2rem] max-md:text-[1.5rem] text-[#838697]">
            I am a software engineer student at ALX, a passionate and skilled
            developer and I am particularly interested in frontend stack. I have
            one year of experience.
          </p>
        </motion.div>
        <motion.img
          src={safae}
          alt="Me"
          initial={{ opacity: 0 }}
          whileInView={{ x: [-100, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className=" w-[30%] h-[100%] rounded-xl max-xl:w-[100%]"
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default About;
