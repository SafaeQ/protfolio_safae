import React from "react";
import safae from "../assets/me.jpeg";
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
          <h1 className=" text-[2rem] max-md:text-[2rem]">
            I am a full stack developer💻 create dynamic and interactive web
            applications using React, Node.js, MongoDB, and other technologies.
          </h1>
          <p className=" text-[1.3rem] max-md:text-[1.5rem] text-[#838697]">
            I graduated from YouCode Maroc,🐱‍👤 a renowned IT school that offers
            innovative and hands-on training in web development. There,😊 I
            learned the fundamentals of programming, as well as how to use
            popular frameworks and tools to build responsive and user-friendly
            websites and mobile apps. I also developed my problem-solving,
            critical thinking, and communication skills, which enable me to
            collaborate effectively with others👍.
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
