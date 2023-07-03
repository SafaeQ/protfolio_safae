import React from "react";
import safae from "../assets/safa.png";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { motion } from "framer-motion";
import index from '../page/tree.html'

const Home = () => {
  const technologies = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-red-500" /> },
    { name: "CSS", icon: <FaCss3 className="text-indigo-500" /> },
    // Add more technologies as needed
  ];

  return (
    <div className=" flex justify-between items-center mx-[4rem] mt-[4rem] max-lg:mx-[1rem] max-lg:mt-[2rem] max-lg:gap-[4rem] max-lg:flex-col">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ y: [-250, 0], opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h1>Hi 👋, My name is</h1>
        <h3 className="text-[3rem] max-md:text-[1.9rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-500">
          SAFAE QARSSANE
        </h3>
        <h3 className="text-[3rem] max-md:text-[1.5rem] ">
          I'm a Full stack Developer,
          <br />
          {/* Designer & Content Creator. */}
        </h3>
        <div className=" flex gap-[1rem] mt-[4rem] max-md:mt-[2rem]">
          <a href="https://github.com/SafaeQ" rel="noreferrer" target="_blank">
            <AiFillGithub className=" w-[30px] h-[30px] cursor-pointer" />
          </a>
          {/* <a
            href="https://www.instagram.com/gitcoder"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillInstagram className=" w-[30px] h-[30px] cursor-pointer" />
          </a> */}
          <a
            href="https://www.linkedin.com/in/safae-qarssane-661101213/"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin className=" w-[30px] h-[30px] cursor-pointer" />
          </a>
        </div>
      </motion.div>

      {/* <motion.img
        src={safae}
        alt="Safae"
        class="w-[500px] h-auto max-w-full rounded-full"
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ y: [250, 0], opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      /> */}
      <index/>
    </div>
  );
};

export default Home;
