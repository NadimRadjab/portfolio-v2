import Image from "next/image";
import css from "../assets/images/Skills/Front-end/css.png";
import html from "../assets/images/Skills/Front-end/html.png";
import js from "../assets/images/Skills/Front-end/js.png";
import ts from "../assets/images/Skills/Front-end/ts.png";
import react from "../assets/images/Skills/Front-end/react.png";
import express from "../assets/images/Skills/Back-end/express.png";
import nodeJs from "../assets/images/Skills/Back-end/nodeJs.png";
import mongodb from "../assets/images/Skills/Back-end/mongodb.png";
import socket from "../assets/images/Skills/Back-end/socket.png";

const Skills = () => {
  return (
    <div className="w-full h-screen" id="projects">
      <div className="max-w-[1240px] mx-auto h-full flex flex-col justify-center">
        <div className="my-10  border-b-2 text-center md:text-start mx-10">
          <h2 className="align-middle lg:text-6xl uppercase text-4xl">
            What I can do
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-7">
          <div className="w-full shadow-lg shadow-gray-600 h-auto rounded-xl relative flex flex-col items-center p-3 group ">
            <div className="my-5">
              <h3 className="text-2xl text-gray-200">Front-end</h3>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-3 gap-10">
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[65%] w-[50%]">
                <Image alt="html" src={html} />
                <p className="text-md text-gray-200">HTML</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[65%] w-[50%]">
                <Image alt="css" src={css} />
                <p className="text-md text-gray-200">CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[65%] w-[50%]">
                <Image alt="js" src={js} />
                <p className="text-md text-gray-200">JS</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[65%] w-[50%]">
                <Image alt="ts" src={ts} />
                <p className="text-md text-gray-200">TS</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[65%] w-[50%]">
                <Image alt="react" src={react} />
                <p className="text-md text-gray-200">React</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[65%] w-[50%] text-center">
                <Image alt="reactNative" src={react} />
                <p className="text-md text-gray-200">React Native</p>
              </div>
            </div>
          </div>
          <div className="w-full shadow-lg shadow-gray-600 h-auto rounded-xl relative flex flex-col items-center p-3 group ">
            <div className="my-5">
              <h3 className="text-2xl text-gray-200">Back-end</h3>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-3 gap-10">
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[65%] w-[50%]">
                <Image alt="nodeJs" src={nodeJs} />
                <p className="text-md text-gray-200">Node Js</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[65%] w-[50%]">
                <Image alt="express" src={express} />
                <p className="text-md text-gray-200">express</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[65%] w-[50%]">
                <Image alt="mongodb" src={mongodb} />
                <p className="text-md text-gray-200">MongoDB</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[65%] w-[50%]">
                <Image alt="socket" src={socket} />
                <p className="text-md text-gray-200">Socket.IO</p>
              </div>
            </div>
          </div>
          <div className="w-full shadow-lg shadow-gray-600 h-auto rounded-xl relative flex flex-col items-center p-3 group self-center">
            <div>
              <h3 className="text-2xl text-gray-200">Miscellaneous</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
