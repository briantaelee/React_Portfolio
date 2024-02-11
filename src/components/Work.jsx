import React from "react";
import WorkItem from "./WorkItem"

const data=[
  {
    year: 2023,
    title: "UCI Bootcamp Graduate",
    duration: "12 Weeks",
    details: "Completed an intensive full-stack development program covering modern web technologies. Gained hands-on experience in building responsive and interactive web applications. Developed a solid understanding of fundamental programming concepts and algorithms. Participated in team projects, fostering collaboration and effective communication skills"
  },
  {
    year: "2021-2022",
    title: "Sushi Chef",
    duration: "1 Year",
    details: "Created comfortable work environment by seamlessly transitioning between different sushi stations and roles, ensuring uninterrupted service during peak periods and unexpected changes. Improved quality of food by demonstrating extensive knowledge of prep work and fresh ingredients, guiding the team to consistently deliver high-quality sushi dishes. Reduced the amount of supplies wasted by 10% with accurate and thorough inventory checks. Optimized food delivery during rush hours by distributing different tasks between chefs, and concisely communicating with kitchen staff, hosts, and servers. Maintained a 4.5 star Yelp rating while also increasing revenue by 15% in 2021 and 20% in 2022"
  },
  {
    year: "2024-Current",
    title: "Student",
    duration: "",
    details: "I am currently enrolled as a student at Irvine City College, and am taking classes that are specifically tailored towards Computer Science. Although I have not started my classes yet, I am excited and driven to immerse myself in the coursework and engaging projects. My goal is to fully understand the fundamentals all while maintaining a good GPA, which will help me eventually transfer into a college for a Bacholers Degree.",
  }
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