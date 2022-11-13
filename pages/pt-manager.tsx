import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import appStoreImage from "../assets/images/appStoreImage.png";
import playStoreImage from "../assets/images/playStoreImage.png";
import { AiFillGithub } from "react-icons/ai";
import Slider from "../components/UI/Slider";
import { ptManagerImageData } from "../data/imagesSeeds";
const PManager = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full 2xl:flex 2xl:justify-center h-screen">
      <div className="max-w-[1240px] w-full h-full ">
        <div className="w-full h-full grid lg:grid-cols-2 gap-10 grid-cols-1 justify-items-center items-center my-5">
          <div className="max-w-[400px] align-middle  flex justify-center">
            <Slider xlWidth="60%" width="50%" sliderData={ptManagerImageData} />
          </div>
          <div className="lg:text-start text-center m-2 flex flex-col items-center lg:block">
            <h2 className="text-4xl mb-8 ">{t("overview")}</h2>
            <p className="lg:text-xl text-md max-w-[95%] tracking-wide">
              {t("ptManagerText")}
            </p>
          </div>
          <div className="bg-zinc-900 shadow-lg shadow-neutral-700  h-auto rounded-xl justify-center p-3 flex flex-col ">
            <h2 className="text-2xl mb-10 self-center">{t("technologies")}</h2>
            <ul className="text-white mx-10 lg:text-lg list-disc">
              <li>React Native</li>
              <li>TypeScript</li>
              <li>Expo Bare Workflow</li>
              <li>React Navigation</li>
              <li>Redux</li>
              <li>Firebase</li>
              <li>RevenueCat</li>
              <li>Jest</li>
            </ul>
          </div>
          <div className="bg-zinc-900 xl:w-[100%]  shadow-lg shadow-neutral-700 place-items-center h-auto rounded-xl grid grid-cols-2 gap-12 p-10 md:mx-20 mx-2">
            <Link href="https://apps.apple.com/app/pt-manager-gym-trainer-helper/id1639118197">
              <div>
                <Image
                  alt="store-image"
                  className="cursor-pointer lg:hover:opacity-70 active:opacity-70 transition duration-300 ease-in-out"
                  src={appStoreImage}
                />
              </div>
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=nr.cop.apps.pt.manager">
              <div>
                <Image
                  alt="store-image"
                  className="cursor-pointer lg:hover:opacity-70 active:opacity-70 transition duration-300 ease-in-out"
                  src={playStoreImage}
                />
              </div>
            </Link>
            <div className="flex col-span-2 justify-center items-center w-[100%] md:h-[64px] h-[58px] rounded-xl shadow-lg  shadow-zinc-800 bg-gray-500 mx-4   transition ease-in-out duration-300">
              <p className="lg:text-lg mx-2">GitHub({t("onRequest")})</p>
              <AiFillGithub size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PManager;
