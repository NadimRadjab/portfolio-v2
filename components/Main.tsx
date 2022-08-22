import React from "react";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import ContactButton from "./UI/ContactButton";
const Main = () => {
  const { t } = useTranslation();

  return (
    <main className="h-screen w-full text-center">
      <div
        data-aos="fade-up"
        className="max-w-[1240px] w-full h-full mx-auto flex flex-col justify-center items-center"
      >
        <div className="text-center">
          <h2 className="align-middle md:text-6xl text-3xl">
            {t("hello")} <span className="text-emerald-700">Nadim</span>
          </h2>
          <h2 className="md:text-5xl text-2xl">{t("subtitle")}</h2>
        </div>
        <p className="text-lg md:text-xl py-4 max-w-[70%] text-gray-300">
          {t("mainText")}
        </p>
        <div className="my-12 flex">
          <ContactButton link="https://github.com/NadimRadjab" />
          <ContactButton isEmail link="mailto:nadimradjab.work@gmail.com" />
        </div>
      </div>
    </main>
  );
};

export default Main;
