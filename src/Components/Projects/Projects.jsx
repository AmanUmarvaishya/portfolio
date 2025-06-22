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
          link='https://github.com/AmanUmarvaishya/Backend_project_1'
          title="Online home-booking Platform"
          main="This is a Online home-booking Platform created in MERN stack technology and used node express and mongodb."
        />
           <ProjectCard
        image={Quara}
             link='https://github.com/AmanUmarvaishya/BACKEND_PROJECT_2'
          title="Massesing website"
          main="This is a Massesing website created in MERN stack technology and the user can add, delete , edit and update our massege."
        />
        <ProjectCard
        image={commerce}
             link='https://github.com/AmanUmarvaishya/React-E-commerce'
          title="E-commerce Website"
          main="This is a E-commerce Website created in Ract js and used some component library."
        />
        <ProjectCard
        image={Pattern}
             link='https://github.com/AmanUmarvaishya/Simon_Says_game.'
          title="Pattern games"
          main="This is a Pattern games created in html css and javasript and Here use can start the the game by clicking any keys"
        />
        <ProjectCard
        image={DisColor}
             link='https://github.com/AmanUmarvaishya/Background_Color_Change'
          title="Background_Color_Change"
          main="This is a Background_Color_Change created in html css and javasript and Here use can change our display color "
        />
          <ProjectCard
        image={Cal}
               link='https://github.com/AmanUmarvaishya/Responsive-calculator'
          title="Responsive calculator"
          main="This is a Responsive calculator created in html css javasript and CSS grid. and Here we can calculate mathematic operations"
        />
       
      </div>
    </div>
  );
};

export default Projects;
