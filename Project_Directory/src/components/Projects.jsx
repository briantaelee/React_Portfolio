import React from "react";
import placeholderImg from "../assets/placeholder.png"
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga consequatur optio neque magnam laborum iste eligendi quasi ad ullam. Aliquam laborum ducimus nisi, consequatur quod perspiciatis doloremque dolore facere.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={placeholderImg} title="placeholder"/>
        <ProjectItem img={placeholderImg} title="placeholder"/>
        <ProjectItem img={placeholderImg} title="placeholder"/>
        <ProjectItem img={placeholderImg} title="placeholder"/>
      </div>
    </div>
  )
}

export default Projects