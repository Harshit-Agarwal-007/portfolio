import React from "react";

const Contact = () => {
  return (
    <div id="contacts" className="  w-full bg-zinc-200 pt-[7vw] justify-center">
      <div className="flex w-full justify-center">
        <div className="text-4xl justify-center text-center  font-bold w-[35vw] border-b-[0.5vw] border-yellow-500 h-[7vh]">
          Lets Get in Touch!
        </div>
      </div>
      <div className="pt-20 full flex justify-center">
        <form className="flex-row justify-center">
          <div className="justify-self-center items-center ">
            <label htmlFor="name">Name</label>
            <br></br>
            <input
              className="w-[25vw] h-[5vh] rounded-xl px-2"
              id="name"
              type="text"
            ></input>
          </div>
          <div className="pt-4">
            <label htmlFor="email">E-mail</label>
            <br></br>
            <input
              className="w-[25vw] h-[5vh] rounded-xl px-2"
              id="email"
              type="email"
            ></input>
          </div>
          <div className="pt-4">
            <label htmlFor="msg" className="pt-4">
              Message
            </label>
            <br></br>
            <textarea
              id="msg"
              className="w-[25vw] h-[15vh] rounded-xl px-2 overflow-hidden overflow-y-scroll"
            ></textarea>
            <div className="flex">
              <button className="mt-10 text-center hover:underline pb-1.5 items-center justify-center bg-yellow-500 px-4 py-1 text-xl font-semibold rounded-[3vw] text-stone-800 tracking-wide">
                Send
              </button>
              <a href="https://www.linkedin.com/in/harshit-agarwal-iam007" className="mt-11 pl-6">
                <img src="./assets/Linkedin.png" className="h-7"></img>
              </a>
              
            </div>
          </div>
        </form>
      </div>
      <img src="./assets/vector.png" className="w-full"></img>
    </div>
  );
};

export default Contact;
