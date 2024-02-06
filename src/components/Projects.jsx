import React from "react";
import placeholderImg from "../assets/placeholder.png"
import Shopie from "../assets/Shopie.png"
import ProjectItem from "./ProjectItem";
import BookEngine from "../assets/Book Search Engine.png"
import FridgeProject from "../assets/FridgeProject.png"
import VballProject from "../assets/Volleyball Store.png"

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
        
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <a href="https://github.com/KrystianKowalak/shopie" target="_blank">
          <ProjectItem img={Shopie} title="Shopie"/>
        </a>
        <a href="https://github.com/briantaelee/Book_Search_Engine" target="_blank">
          <ProjectItem img={BookEngine} title="Book Search"/>
        </a>
        <a href="https://github.com/MJ-AZN/Empty-Your-Fridge" target="_blank">
          <ProjectItem img={FridgeProject} title="Fridge Project"/>
        </a>
        <a href="https://github.com/briantaelee/Ecommerce_Website" target="_blank">
          <ProjectItem img={VballProject} title="Volleyball Store"/>
        </a>
      </div>
    </div>
  )
}

export default Projects