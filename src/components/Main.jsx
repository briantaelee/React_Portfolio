import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Main = () => {
  return (
    <div id="main">
      <img className="w-full h-screen object-cover top-0 left-0 z-0 absolute"
        src="https://images.unsplash.com/photo-1474433188271-d3f339f41911?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Brian Tae Lee</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[

                'Developer',
                2000,
                'Coder',
                2000,
                'Tech Enthusiast',
                2000,
                'Software Engineer',
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://www.google.com/" target="_blank" className="cursor-pointer">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.google.com/" target="_blank" className="cursor-pointer">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/briantaelee/" target="_blank" className="cursor-pointer">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/brian-tae-lee/" target="_blank" className="cursor-pointer">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main