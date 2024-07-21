import React from "react";


const About = () => {
  return (
    <div id="about" className="flex h-[60vh] w-full bg-zinc-200 pt-[7vw] px-20">
      <div className=" w-[50%]">
        <div className="text-5xl font-bold">
            About Me
        </div>
        <div className=" text-xl font-normal tracking-wide w-full text-justify text-stone-600 leading-normal pt-[3vh]">
          Hello! My name is Harshit Agarwal. I am a 3rd Year student at Vellore
          Institute of Technology, Vellore. I am currently pursuing BTECH in
          Computer Science and Engineering. I am currently learning Machine
          Learning and Artificial Intelligence.
          <div>
            <button className="mt-10 text-center hover:underline pb-1.5 items-center justify-center bg-yellow-500 px-4 py-1 text-xl font-semibold rounded-[3vw] text-stone-800 tracking-wide">
              <a href="public\assets\Harshit-Resume.pdf" download="Harshit's Resume">Resume</a>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
            <img src="./assets/dots.png" className="justify-center ml-[20vw] h-[50vh]"></img>
      </div>
    </div>
  );
};

export default About;
