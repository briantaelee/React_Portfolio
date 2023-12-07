import React from "react";
import PP from "../assets/Profile Placeholder.png";

const Profile = () => {
  return (
<div>
    <div id="profile" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Profile</h1>
      <img src={PP} alt="" className="rounded-xl group-hover:opacity-10 mt-4" />
    
    <div className="flex flex-col items-center">
  <p className="my-2 text-xl text-stone-500 mt-8">
  Hello there! I'm Brian Tae Lee, an aspiring and results-driven software engineer eager to embark on my journey in the world of technology. I recently graduated from a software engineering bootcamp, where I gained proficiency in essential programming concepts and hands-on experience in crafting real-world applications. The immersive experience of the bootcamp not only solidified my understanding of fundamental programming concepts but also equipped me with a diverse range of technologies. These include CSS Frameworks, React.js, Node.js, MongoDB, MySQL, HTML, JavaScript, and jQuery. This experience helped to hone my ability to create robust and efficient solutions.
  </p>
  <p className="my-2 text-xl text-stone-500">
  Looking ahead, my goal is to leverage my skills to create innovative, user-centric solutions that make a positive impact on the tech landscape. I'm enthusiastic about taking on new challenges and opportunities for growth, whether it's solving complex algorithms, optimizing code for performance, or exploring emerging technologies. Thanks for considering my unique perspective. I'm eager to contribute to your team's success and continue evolving in the dynamic field of software engineering. Let's connect and explore how we can achieve great things together!
  </p>
</div>
</div>
</div>
  );
};

export default Profile;
