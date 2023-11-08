import React from "react";
import WorkItem from "./WorkItem"

const data=[
  {
    year: 2020,
    title: "Content Creator",
    duration: "1 Year",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse libero, quasi eveniet voluptates excepturi aliquid quibusdam, accusamus culpa fugiat rerum obcaecati? Dignissimos sapiente vel maxime reprehenderit officiis, minima sit?"
  },
  {
    year: 2020,
    title: "Content Creator",
    duration: "1 Year",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse libero, quasi eveniet voluptates excepturi aliquid quibusdam, accusamus culpa fugiat rerum obcaecati? Dignissimos sapiente vel maxime reprehenderit officiis, minima sit?"
  },
  {
    year: 2020,
    title: "Content Creator",
    duration: "1 Year",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse libero, quasi eveniet voluptates excepturi aliquid quibusdam, accusamus culpa fugiat rerum obcaecati? Dignissimos sapiente vel maxime reprehenderit officiis, minima sit?"
  },
]

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem className="text-white"
        key={idx} 
        year={item.year} 
        title={item.title} 
        duration={item.duration} 
        details={item.details}
        />
      ))}
    </div>
  )
}

export default Work