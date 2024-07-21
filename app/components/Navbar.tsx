import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-3 flex justify-between items-center backdrop-blur-sm text-stone-800  text-lg font-normal tracking-wider">
      <div className="flex font-semibold text-xl font-comfortaa">Harshit Agarwal
      </div>
      <div className="justify-between flex w-[30%] font-raleway">
        <div className="hover:underline cursor-pointer"><a href="#about">About</a></div>
        <div className="hover:underline cursor-pointer"><a href="#projects">Projects</a></div>
        <div className="hover:underline cursor-pointer"><a href="#contacts">Contact</a></div>
      </div>
    </div>
  );
};

export default Navbar;
