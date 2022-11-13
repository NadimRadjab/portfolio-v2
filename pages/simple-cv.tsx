import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import appStoreImage from "../assets/images/appStoreImage.png";
import playStoreImage from "../assets/images/playStoreImage.png";
import { AiFillGithub } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";
import Slider from "../components/UI/Slider";
import { simpleCVImageData } from "../data/imagesSeeds";
import { simpleCVWebsiteImageData } from "../data/imagesSeeds";
const SimpleCV = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full 2xl:flex 2xl:justify-center ">
      <div className="max-w-[1240px] w-full h-full py-10 ">
        <div>
          <div className="w-full h-full grid lg:grid-cols-2 gap-10 grid-cols-1 justify-items-center items-center my-5">
            <Slider xlWidth="60%" width="50%" sliderData={simpleCVImageData} />
            <Slider
              xlWidth="100%"
              width="80%"
              sliderData={simpleCVWebsiteImageData}
            />
          </div>
          <div className="lg:text-start text-center lg:m-32 m-5 my-20 flex flex-col items-center lg:block">
            <h2 className="lg:text-4xl text-2xl mb-8 text-center">
              {t("overview")}
            </h2>
            <p className="md:text-xl text-md tracking-wide text-center">
              {t("simpleCvText")}
            </p>
          </div>
          <div className="w-full h-full grid lg:grid-cols-2 gap-10 grid-cols-1 justify-items-center items-center my-5">
            <div className="bg-zinc-900 shadow-lg shadow-neutral-700  h-auto rounded-xl justify-center p-3 m-2 flex flex-col ">
              <h2 className="text-2xl mb-6 self-center">{t("technologies")}</h2>
              <div className="grid grid-cols-2">
                <div>
                  <h3 className="text-xl mb-2 text-center">App</h3>
                  <ul className="text-white mx-10 lg:text-lg list-disc ">
                    <li>React Native</li>
                    <li>TypeScript</li>
                    <li>Expo Bare Workflow</li>
                    <li>Redux</li>
                    <li>Firebase</li>
                    <li>RevenueCat</li>
                    <li>Google Analytics</li>
                    <li>NativeBase</li>
                    <li>Jest</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-center">Website</h3>
                  <ul className="text-white mx-10 lg:text-lg list-disc ">
                    <li>Next.Js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Redux</li>
                    <li>Firebase</li>
                    <li>Google Analytics</li>
                    <li>Jest</li>
                    <li>Cypress</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 xl:w-[100%] shadow-lg shadow-neutral-700 place-items-center h-auto rounded-xl grid grid-cols-2 gap-12 p-10 md:mx-20 mx-2">
              <Link href="https://apps.apple.com/app/simple-cv/id1600041611">
                <div>
                  <Image
                    alt="app-store-image"
                    className="cursor-pointer lg:hover:opacity-70 active:opacity-70 transition duration-300 ease-in-out"
                    src={appStoreImage}
                  />
                </div>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.nr.cop.apps.simplecv">
                <div>
                  <Image
                    alt="play-store-image"
                    className="cursor-pointer lg:hover:opacity-70 active:opacity-70 transition duration-300 ease-in-out"
                    src={playStoreImage}
                  />
                </div>
              </Link>
              <Link href="https://www.simple-cv-maker.com/">
                <div className="cursor-pointer hover:bg-sky-50 flex col-span-2 justify-center items-center w-full md:h-[64px] h-[58px] rounded-xl shadow-lg  shadow-zinc-800 bg-gradient-to-r from-[#5651] to-zinc-800 mx-4   transition ease-in-out duration-300">
                  <p className="xl:text-lg text-md mx-2">Website</p>
                  <FaFirefoxBrowser size={30} />
                </div>
              </Link>
              <div className="flex col-span-2 justify-center items-center w-[100%] md:h-[64px] h-[58px] rounded-xl shadow-lg  shadow-zinc-800 bg-gray-500 mx-4   transition ease-in-out duration-300">
                <p className="xl:text-lg text-md mx-2">
                  GitHub({t("onRequest")})
                </p>
                <AiFillGithub size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCV;
