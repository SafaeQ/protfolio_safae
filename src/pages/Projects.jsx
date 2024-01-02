import React from "react";
import Project from "../components/Project";
import apple_phone from "../assets/apple_phone.png";
import imageinfo from "../assets/intro.png";
import camerashop from "../assets/grh.jpg";
import bookshelf from "../assets/gestion-des-congés-et-absences.webp";
import heatmap from "../assets/image.png";
import reactperformance from "../assets/testgr.jpeg";

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
        className=" grid grid-cols-1 gap-[5rem] md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3"
        style={{ alignSelf: "center" }}
      >
        <Project
          img={bookshelf}
          title="LEAVES MANAGEMENT"
          github="https://github.com/SafaeQ/Gestion_de_Conge"
          desc="Employee leave management application.
          using React.js, node.js, Nest.js, TypeORM."
        />
        <Project
          img={imageinfo}
          title="MYTICKETS APP"
          github="https://github.com/SafaeQ/tickets_mobile"
          desc="Tickets application. using Nest.js, TypeORM,
          React.js et React Native."
          demo="https://play.google.com/store/apps/details?id=org.ticketings"
        />
        <Project
          img={apple_phone}
          title="JUST GIVE APP"
          github="https://github.com/SafaeQ/JustGive_ionic"
          desc="Application of Moroccan associations.
          using Ionic, React, TypeScript, MongoDB."
        />
        <Project
          img={camerashop}
          title="MaGrh"
          github="https://github.com/Naotnie21/maGRH"
          demo="https://ma-grh.fr/connexion"
          desc="Creation of a laravel web application for the company in order to correctly manage its HR requests."
        />
        <Project
          img={heatmap}
          title="Heatmap"
          github="https://github.com/SafaeQ/Mentalome_um6p"
          demo=""
          desc="Creation of a laravel web application for heatmap using the techologies vue.js , laravel and Vega & Vega-Lite for heatmap."
        />
        <Project
          img={reactperformance}
          title="newelec"
          github="https://github.com/SafaeQ/newelec"
          demo="https://eclectic-semolina-b96d2c.netlify.app/"
          desc="Creation of a site web for a company using the techologies react.js and laravel. this is just a part from the project!"
        />
      </motion.div>
    </div>
  );
};

export default Projects;
