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
import expo from "../assets/images/Skills/Miscellaneous/expo.png";
import firebase from "../assets/images/Skills/Miscellaneous/firebase.png";
import git from "../assets/images/Skills/Miscellaneous/git.png";
import github from "../assets/images/Skills/Miscellaneous/github.png";
import npm from "../assets/images/Skills/Miscellaneous/npm.png";
import redux from "../assets/images/Skills/Miscellaneous/redux.png";

const Skills = () => {
  return (
    <div className="w-full 2xl:h-screen" id="skills">
      <div className="max-w-[1240px] mx-auto h-full flex flex-col">
        <div className="my-10  border-b-2 text-center md:text-start mx-10">
          <h2 className="align-middle md:text-6xl uppercase text-4xl">
            What I can do
          </h2>
        </div>
        <div className="flex flex-col p-5">
          <div className="w-full shadow-lg shadow-neutral-700  h-auto rounded-xl relative flex flex-col md:p-3 p-10  m-10 group self-center bg-zinc-900">
            <div className="mb-10 self-center">
              <h3 className="text-3xl text-gray-200">Front-end</h3>
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-3 gap-10">
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <Image alt="html" src={html} />
                <p className="text-md text-gray-200">HTML</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <Image alt="css" src={css} />
                <p className="text-md text-gray-200">CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <Image alt="js" src={js} />
                <p className="text-md text-gray-200">JS</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <Image alt="ts" src={ts} />
                <p className="text-md text-gray-200">TS</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <Image alt="react" src={react} />
                <p className="text-md text-gray-200">React</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%] text-center">
                <Image alt="reactNative" src={react} />
                <p className="text-md text-gray-200">React Native</p>
              </div>
            </div>
          </div>
          <div className="w-full shadow-lg shadow-neutral-700  h-auto rounded-xl relative flex flex-col items-center md:p-3 p-10 m-10 group self-center bg-zinc-900 ">
            <div className="mb-10 self-center">
              <h3 className="text-3xl text-gray-200">Back-end</h3>
            </div>
            <div className="grid lg:grid-cols-5 grid-cols-3 gap-10">
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <Image alt="nodeJs" src={nodeJs} />
                <p className="text-md text-gray-200">NodeJs</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <div className="bg-white p-1">
                  <Image alt="express" src={express} />
                </div>
                <p className="text-md text-gray-200">express</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <Image alt="mongodb" src={mongodb} />
                <p className="text-md text-gray-200">MongoDB</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <div className="md:w-[96px]">
                  <Image alt="socket" src={socket} />
                </div>
                <p className="text-md text-gray-200">Socket.IO</p>
              </div>
            </div>
          </div>
          <div className="w-full shadow-lg shadow-neutral-700  h-auto rounded-xl relative flex flex-col items-center md:p-3 p-10  m-10 group self-center bg-zinc-900">
            <div className="mb-10 self-center">
              <h3 className="text-2xl text-gray-200">Miscellaneous</h3>
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-3 gap-10">
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <Image alt="github" src={github} />
                <p className="text-md text-gray-200">GitHub</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <div>
                  <Image alt="git" src={git} />
                </div>
                <p className="text-md text-gray-200">Git</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <Image alt="npm" src={npm} />
                <p className="text-md text-gray-200">npm</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <div className="bg-white p-1">
                  <Image alt="expo" src={expo} />
                </div>
                <p className="text-md text-gray-200">Expo</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <div>
                  <Image alt="redux" src={redux} />
                </div>
                <p className="text-md text-gray-200">Firebase</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer transition ease-out duration-500 hover:-translate-y-2 md:w-[85%] w-[50%]">
                <div>
                  <Image alt="firebase" src={firebase} />
                </div>
                <p className="text-md text-gray-200">Firebase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
