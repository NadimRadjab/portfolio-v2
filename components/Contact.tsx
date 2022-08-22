import React from "react";
import Link from "next/link";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { TbArrowBigUpLines } from "react-icons/tb";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full 2xl:h-screen" id="contact">
      <div className="max-w-[1240px] mx-auto h-full flex flex-col overflow-hidden">
        <div
          data-aos="fade-left"
          className="my-10 md:text-start text-center border-b-2 mx-10"
        >
          <h2 className="align-middle md:text-6xl text-4xl uppercase">
            {t("getInTouch")}
          </h2>
        </div>
        <div className="flex md:flex-row flex-col p-5">
          <div
            data-aos="slide-right"
            className="bg-zinc-900 w-full shadow-lg shadow-neutral-700 h-auto rounded-xl flex flex-col justify-center p-3 md:mx-10 my-10 md:my-0"
          >
            <div className="text-center">
              <h3 className="md:text-3xl my-10  text-xl">{t("reachMe")}</h3>
              <div className="my-24 flex justify-center">
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
              <h3 className="md:text-3xl text-xl my-10">{t("sendMessage")}</h3>
            </div>
          </div>
          <div
            data-aos="slide-left"
            className="bg-zinc-900 w-full shadow-lg shadow-neutral-700 h-auto rounded-xl flex flex-col p-4"
          >
            <form
              action="https://formsubmit.co/nadimradjab.work@gmail.com"
              method="POST"
              className="flex flex-col"
            >
              <div className="flex md:flex-row flex-col w-[100%]">
                <div className="md:w-[50%]">
                  <p className="text-xl my-5">{t("name")}</p>
                  <input
                    type="text"
                    name="name"
                    required
                    className="rounded-lg border-neutral-500 border-2 h-10 p-3  w-[95%]"
                  />
                </div>
                <div className="md:w-[50%]">
                  <p className="text-xl my-5">{t("phone")}</p>
                  <input
                    type="text"
                    name="phone"
                    className="rounded-lg border-neutral-500 border-2 h-10 p-3 w-[95%]"
                  />
                </div>
              </div>
              <div>
                <p className="text-xl my-5">{t("email")}</p>
                <input
                  type="email"
                  required
                  name="email"
                  className="rounded-lg border-neutral-500 border-2 h-10 p-3 w-[95%]"
                />
              </div>
              <div>
                <p className="text-xl my-5">{t("subject")}</p>
                <input
                  type="subject"
                  name="subject"
                  required
                  className="rounded-lg border-neutral-500 border-2 h-10 p-3 w-[95%]"
                />
              </div>
              <div>
                <p className="text-xl my-5">{t("message")}</p>
                <textarea
                  required
                  name="about"
                  className="rounded-lg border-neutral-500 border-2 h-40 p-3 w-[95%]"
                />
              </div>
              <input
                value={t("submit")}
                className="w-[85%] self-center rounded-xl h-12 my-10 text-xl shadow-lg shadow-neutral-700 cursor-pointer bg-gradient-to-r from-[#5651] to-zinc-800 hover:bg-sky-50 transition duration-300 ease-in-out "
                type="submit"
              />
              <input
                type="hidden"
                name="_next"
                value="https://nadimradjab.com/form-submit"
              />
            </form>
          </div>
        </div>
        <div className="my-20 self-center w-[74px] h-[74px] cursor-pointer rounded-full shadow-lg flex justify-center items-center shadow-zinc-800 bg-gradient-to-r from-[#5651] to-zinc-800 mx-4 hover:bg-sky-50 hover:scale-125 transition ease-in-out duration-300 ">
          <Link href="/">
            <TbArrowBigUpLines className="animate-bounce" size={34} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Contact;
