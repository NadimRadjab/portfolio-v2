import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Main = () => {
  const { t } = useTranslation();
  return (
    <main className="h-screen w-full text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="align-middle md:text-6xl text-4xl">
            {t("hello")} <span className="text-emerald-700">Nadim</span>
          </h2>
          <h2 className="md:text-5xl text-4xl">{t("subtitle")}</h2>
        </div>
        <p className="text-xl py-4 max-w-[70%] text-gray-300">
          {t("mainText")}
        </p>
        <div className="my-24 flex">
          <div className="w-[64px] h-[64px] cursor-pointer rounded-full shadow-lg flex justify-center items-center shadow-zinc-800 bg-gradient-to-r from-[#5651] to-zinc-800 mx-4 hover:bg-sky-50 hover:scale-125 transition ease-in-out duration-300">
            <Link href="https://github.com/NadimRadjab">
              <AiFillGithub size={30} />
            </Link>
          </div>
          <div className="w-[64px] h-[64px] cursor-pointer rounded-full shadow-lg flex justify-center items-center shadow-zinc-800 bg-gradient-to-r from-[#5651] to-zinc-800 mx-4 hover:bg-sky-50 hover:scale-125 transition ease-in-out duration-300">
            <Link href="mailto:nadimradjab.work@gmail.com">
              <AiOutlineMail size={30} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
