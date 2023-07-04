import React from "react";
import Project from "../components/Project";
// import rickandmorty from "../../assets/project-1.png";
// import magictrick from "../../assets/project-2.png";
// import camerashop from "../../assets/project-3.png";
// import bookshelf from "../../assets/project-4.png";
// import reacthooks from "../assets/BeFunky-design.jpg";
// import reactperformance from "../../assets/project-6.png";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className=" flex flex-col justify-center mx-[1rem] lg:mx-[4rem] pt-[12rem]"
      id="projects"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className=" text-[3rem] font-bold mb-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-500"
      >
        Projects
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: [-100, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" grid grid-cols-1 gap-[5rem] md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 "
      >
        <Project
          // img={reacthooks}
          title="LEAVES MANAGEMENT"
          github="https://github.com/SafaeQ/Gestion_de_Conge"
          desc="Employee leave management application.
          using React.js, node.js, Nest.js, TypeORM."
        />
        <Project
          //   img={reactperformance}
          title="MYTICKETS APP"
          github="https://github.com/SafaeQ/tickets_mobile"
          desc="Tickets application. using Nest.js, TypeORM,
          React.js et React Native."
          demo="https://play.google.com/store/apps/details?id=org.ticketings"
        />
        <Project
          //   img={camerashop}
          title="JUST GIVE APP"
          github="https://github.com/SafaeQ/JustGive_ionic"
          desc="Application of Moroccan associations.
          using Ionic, React, TypeScript, MongoDB."
        />
      </motion.div>
    </div>
  );
};

export default Projects;
