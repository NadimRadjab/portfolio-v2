import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { AiFillGithub } from "react-icons/ai";
import Slider from "../components/UI/Slider";
import { odinBookImageData } from "../data/imagesSeeds";
const OdinBook = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full 2xl:flex 2xl:justify-center h-screen">
      <div className="max-w-[1240px] w-full h-full ">
        <div className="w-full h-full grid lg:grid-cols-2 gap-10 grid-cols-1 justify-items-center items-center my-5">
          <div className="2xl:max-w-[500px] max-w-[400px] flex justify-center mx-2">
            <Slider xlWidth="100%" width="80%" sliderData={odinBookImageData} />
          </div>
          <div className="lg:text-start text-center flex flex-col items-center lg:block">
            <h2 className="text-4xl mb-10 ">{t("overview")}</h2>
            <p className="lg:text-xl text-lg max-w-[95%]">
              {t("odinBookText")}
            </p>
          </div>
          <div className="bg-zinc-900 shadow-lg shadow-neutral-700  h-auto rounded-xl justify-center p-3 flex flex-col ">
            <h2 className="text-2xl mb-10 self-center">{t("technologies")}</h2>
            <ul className="text-white mx-10 text-lg list-disc ">
              <li>TypeScript</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>express</li>
              <li>Socket.IO</li>
              <li>Redux</li>
              <li>Cloudinary</li>
              <li>Material-UI</li>
            </ul>
          </div>
          <div className="bg-zinc-900 xl:w-[100%]  shadow-lg shadow-neutral-700   h-auto rounded-xl grid grid-cols-2 gap-12 p-10 md:mx-20 mx-2">
            <div className="flex col-span-2 justify-center items-center w-[100%] md:h-[64px] h-[58px] rounded-xl shadow-lg  shadow-zinc-800 bg-gray-500 mx-4   transition ease-in-out duration-300">
              <p className="text-lg mx-2">GitHub</p>
              <AiFillGithub size={30} />
            </div>
            <div className="flex col-span-2 justify-center items-center w-[100%] md:h-[64px] h-[58px] rounded-xl shadow-lg  shadow-zinc-800 bg-gray-500 mx-4   transition ease-in-out duration-300">
              <p className="text-lg mx-2">Demo</p>
              <AiFillGithub size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdinBook;
