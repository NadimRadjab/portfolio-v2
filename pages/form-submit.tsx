import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
const FormSubmit = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="max-w-[1240px] w-full h-full text-center justify-center flex flex-col">
        <h2 className="md:text-6xl text-3xl">{t("thankYou")}</h2>
        <Link href="/">
          <p className="my-10 text-2xl cursor-pointer text-transparent transition ease-in-out duration-300 bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-100 hover:text-sky-50">
            {t("goBack")}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FormSubmit;
