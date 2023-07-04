import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaVuejs,
  FaPhp,
  FaAngular,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNestjs,
  SiExpress,
  SiPlaywright,
} from "react-icons/si";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="h-[90px]"></div>
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
            I'm a Full stack Developer
          </h3>
          <div className=" flex gap-[1rem] mt-[4rem] max-md:mt-[2rem]">
            <a
              href="https://github.com/SafaeQ"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillGithub className=" w-[30px] h-[30px] cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/safae-qarssane-661101213/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin className=" w-[30px] h-[30px] cursor-pointer" />
            </a>
          </div>
        </motion.div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit)",
            gridAutoRows: "50px",
            gridGap: 8,
            // width: "100%",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="box w-[30px] h-auto max-w-full"
          >
            <FaReact className="text-blue-500" size={"2rem"} />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="box w-[30px] h-auto max-w-full"
          >
            <FaVuejs className="text-blue-500" size={"2rem"} />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="box w-[30px] h-auto max-w-full"
          >
            <FaHtml5 className="text-blue-500" size={"2rem"} />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="box w-[30px] h-auto max-w-full"
          >
            <FaCss3 className="text-blue-500" size={"2rem"} />
          </motion.div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit)",
            gridAutoRows: "50px",
            gridGap: 8,
            // width: "100%",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="box w-[30px] h-auto max-w-full"
          >
            <SiTypescript className="text-blue-500" size={"2rem"} />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="box w-[30px] h-auto max-w-full"
          >
            <SiJavascript className="text-blue-500" size={"2rem"} />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="box w-[30px] h-auto max-w-full"
          >
            <SiNestjs className="text-blue-500" size={"2rem"} />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="box w-[30px] h-auto max-w-full"
          >
            <FaNodeJs className="text-blue-500" size={"2rem"} />
          </motion.div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit)",
            gridAutoRows: "50px",
            gridGap: 8,
            // width: "100%",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="box w-[30px] h-auto max-w-full"
          >
            <SiExpress className="text-blue-500" size={"2rem"} />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="box w-[30px] h-auto max-w-full"
          >
            <FaPhp className="text-blue-500" size={"2rem"} />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="box w-[30px] h-auto max-w-full"
          >
            <SiPlaywright className="text-blue-500" size={"2rem"} />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: ["0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="box w-[30px] h-auto max-w-full"
          >
            <FaAngular className="text-blue-500" size={"2rem"} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
