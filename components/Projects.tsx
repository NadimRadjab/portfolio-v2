import React from "react";
import Image from "next/image";
import simpleCV from "../assets/images/simpleCV.png";
import ptManager from "../assets/images/ptManager.png";
import simpleInvoice from "../assets/images/simpleInvoice.png";
import odinBook from "../assets/images/odinbook.png";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-10 overflow-hidden">
        <div
          data-aos="fade-left"
          className="my-10 md:text-start text-center border-b-2 mx-10"
        >
          <h2 className="align-middle md:text-6xl text-4xl uppercase">
            {t("myProjects")}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div
            data-aos="flip-right"
            className="bg-zinc-900 w-full shadow-lg shadow-neutral-700  h-auto rounded-xl cursor-pointer relative flex flex-col justify-center p-3 group hover:bg-gradient-to-r from-[#5651] to-gray-700 "
          >
            <Image
              alt="Simple CV"
              src={simpleCV}
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col hidden group-hover:block">
              <div className="w-[140px] h-[140px] rounded-full  flex justify-center items-center bg-white group-hover:animate-[view-button_0.5s_ease-in-out]">
                <Link href="/simple-cv">
                  <p className="text-xl text-gray-800">{t("view")}</p>
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            className="bg-zinc-900 w-full shadow-lg shadow-neutral-700  h-auto rounded-xl cursor-pointer relative flex flex-col justify-center p-3 group hover:bg-gradient-to-r from-[#5651] to-gray-700 "
          >
            <Image
              alt="PT-Manager"
              src={ptManager}
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col hidden group-hover:block">
              <div className="w-[130px] h-[130px] rounded-full  flex justify-center items-center bg-white group-hover:animate-[view-button_0.5s_ease-in-out]">
                <Link href="/pt-manager">
                  <p className="text-xl text-gray-800">{t("view")}</p>
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="bg-zinc-900 w-full shadow-lg shadow-neutral-700  h-auto rounded-xl cursor-pointer relative flex flex-col justify-center p-3 group hover:bg-gradient-to-r from-[#5651] to-gray-700 "
          >
            <Image
              alt="Simple Invoice"
              src={simpleInvoice}
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col hidden group-hover:block">
              <div className="w-[130px] h-[130px] rounded-full  flex justify-center items-center bg-white group-hover:animate-[view-button_0.5s_ease-in-out]">
                <Link href="/simple-invoice">
                  <p className="text-xl text-gray-800">{t("view")}</p>
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            className="bg-zinc-900 w-full shadow-lg shadow-neutral-700  h-auto rounded-xl cursor-pointer relative flex flex-col justify-center p-3 group hover:bg-gradient-to-r from-[#5651] to-gray-700 "
          >
            <Image
              alt="Odin Book"
              src={odinBook}
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col hidden group-hover:block">
              <div className="w-[130px] h-[130px] rounded-full  flex justify-center items-center bg-white group-hover:animate-[view-button_0.5s_ease-in-out]">
                <Link href="/odin-book">
                  <p className="text-xl text-gray-800">{t("view")}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
