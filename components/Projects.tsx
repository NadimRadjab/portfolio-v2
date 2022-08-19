import React from "react";
import Image from "next/image";
import simpleCV from "../assets/images/simpleCV.png";
import ptManager from "../assets/images/ptManager.png";
import simpleInvoice from "../assets/images/simpleInvoice.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="h-screen w-full ">
      <div className="my-10 mx-20 border-b-4 max-w-[1240px]">
        <h2 className="align-middle text-8xl uppercase">My Porjects</h2>
      </div>
      <div className="max-w-[1440px] w-full h-full mx-auto justify-center flex flex-col ">
        <div className="grid grid-cols-2 gap-5">
          <div className="max-w-9xl shadow-lg shadow-gray-600 h-[540px] rounded-xl cursor-pointer relative flex flex-col justify-center">
            <Image
              alt="Vercel logo"
              src={simpleCV}
              layout="fill"
              className="rounded-xl transition-all ease-in delay-100 hover:opacity-[0.13] z-20 hover:z-10 "
            />
            <div className="w-[100%] flex items-center flex-col">
              <p className="text-3xl m-5">Simple CV</p>
              <div className="w-[30%] h-14 rounded-xl  flex justify-center items-center transition ease-in-out delay-150 bg-emerald-700 hover:-translate-y-1 hover:scale-110 duration-300 z-10 ">
                <Link href="">
                  <p className="text-xl">More Info</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-9xl h-[540px]  shadow-lg shadow-gray-600 rounded-md cursor-pointer relative">
            <Image
              alt="Vercel logo"
              src={ptManager}
              layout="fill"
              className="rounded-xl transition-opacity ease-in delay-100 hover:opacity-[0.33]"
            />
          </div>
          <div className="max-w-9xl shadow-lg shadow-gray-600 h-[540px]  rounded-md cursor-pointer relative">
            <Image
              alt="Vercel logo"
              src={simpleInvoice}
              layout="fill"
              className="rounded-xl transition-opacity ease-in delay-100 hover:opacity-[0.33]"
            />
          </div>
          <div className="max-w-9xl shadow-lg h-[540px]  shadow-gray-600 rounded-md cursor-pointer">
            b
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
