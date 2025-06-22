import React from "react";
import ProjectCard from "./ProjectCard";
import online from "../../assets/online.png";
import commerce from "../../assets/commerce.png";
import Pattern from "../../assets/Pattern.png";
import Quara from "../../assets/Quara.png";
import DisColor from "../../assets/DisColor.png";
import Cal from "../../assets/Cal.png";
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
        image={online}
          link={https://github.com/AmanUmarvaishya/Backend_project_1}
          title="Online home-booking Platform"
          main="This is a Online home-booking Platform created in MERN stack technology and used node express and mongodb."
        />
           <ProjectCard
        image={Quara}
          title="Quara post"
          main="This is a Quara post Platform created in MERN stack technology and used node express"
        />
        <ProjectCard
        image={commerce}
          title="E-commerce Website"
          main="This is a E-commerce Website created in Ract js and used some component library."
        />
        <ProjectCard
        image={Pattern}
          title="Pattern games"
          main="This is a Pattern games created in html css and javasript and Here use can start the the game by clicking any keys"
        />
        <ProjectCard
        image={DisColor}
          title="Pattern games"
          main="This is a Pattern games created in html css and javasript and Here use can start the the game by clicking any keys"
        />
          <ProjectCard
        image={Cal}
          title="Pattern games"
          main="This is a Pattern games created in html css and javasript and Here use can start the the game by clicking any keys"
        />
       
      </div>
    </div>
  );
};

export default Projects;
