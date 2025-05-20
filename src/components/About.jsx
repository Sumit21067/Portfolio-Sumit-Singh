import React, { useEffect } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <h2 className="text-4xl  font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        <p
          data-aos="slide-up"
          data-aos-duration="500"
          className="text-xl mt-5 ease-in fade-in"
        >
          I started my journey as an MCA student in Computer Applications & Engineering at KIET Group of Institutions, Ghaziabad, where my passion for technology truly came to life. 
          Along the way, I explored various creative and professional fields like Graphic Designing, Content Creation, Freelancing, and even Entrepreneurship. I enjoy diving into new 
          challenges and expanding my skill set, which led me to work with technologies like Java, DBMS, React.js, MySQL, and more. I'm always excited to learn, build, and grow in this ever-evolving tech world.
        </p>
        <br />
        <p
          data-aos="slide-up"
          data-aos-duration="500"
          className="text-xl mt-5 ease-in fade-in"
        >
          I'm Sumit Singh, a Full Stack Developer with a passion for building 
          both frontend and backend solutions. I love turning ideas into real-world web applications and constantly work on improving
           my skills to stay updated with the latest technologies.
        </p>
       
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2"
        >
          <AiOutlineCloudDownload />
          <a href="./resume_Sumit.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
