import React from "react";

const Hero = () => {
  return (
    <div className="flex h-[87vh] w-full bg-zinc-200 pt-[7vw] px-20">
      <div className=" w-[50%] text-6xl pt-17 leading-normal tracking-tight font-bold ">
        <div className=" text-yellow-500 w-[5vw] text-xl font-semibold font-nunito tracking-normal">
          Student
        </div>

        <div className="w-[38vw] pb-5 leading-[9.5vh]">
          Hello, My name is Harshit Agarwal
        </div>

        <div className="text-lg font-light tracking-wide w-[38vw] text-stone-500 leading-normal">
          Aspiring web developer with a passion for creating dynamic and
          user-friendly websites. Experienced in front-end development and
          proficient in various programming languages.
        </div>
        <div className="w-[17vw] flex justify-between">
          <div>
            <button className="text-center hover:underline pb-1.5 items-center justify-center bg-yellow-500 px-4 py-1 text-xl font-semibold rounded-[3vw] text-stone-800 tracking-wide">
              <a href="#projects">Projects</a>
            </button>
          </div>
          <div>
            <button className="hover:underline text-center pb-1.5 items-center justify-center border-2 border-black px-4 py-1 text-xl font-semibold rounded-[3vw] text-stone-600 tracking-wide">
              <a href="https://www.linkedin.com/in/harshit-agarwal-iam007">LinkedIn</a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex -mt-[15vh] -mr-[5vw]">
        <img src=".\assets\image.png" className="w-[60vw] h-[80vh]"></img>
      </div>
      {/* <div className="-scale-x-100"><img src=".\assets\selfie.png"></img></div> */}
      
    </div>
  );
};

export default Hero;
