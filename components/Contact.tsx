import React from "react";
import Link from "next/link";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { TbArrowBigUpLines } from "react-icons/tb";
const Contact = () => {
  return (
    <div className="w-full 2xl:h-screen" id="contact">
      <div className="max-w-[1240px] mx-auto h-full flex flex-col">
        <div className="my-10 md:text-start text-center border-b-2 mx-10">
          <h2 className="align-middle md:text-6xl text-4xl uppercase">
            get in touch
          </h2>
        </div>
        <div className="flex md:flex-row flex-col p-5">
          <div className="bg-zinc-900 w-full shadow-lg shadow-neutral-700 h-auto rounded-xl flex flex-col justify-center p-3 md:mx-10 my-10 md:my-0">
            <div className="text-center">
              <h3 className="md:text-3xl my-10  text-xl">
                You can reach me through
              </h3>
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
              <h3 className="md:text-3xl text-xl my-10">
                Or you can send me a message
              </h3>
            </div>
          </div>
          <div className="bg-zinc-900 w-full shadow-lg shadow-neutral-700 h-auto rounded-xl flex flex-col p-4">
            <form className="flex flex-col">
              <div className="flex md:flex-row flex-col w-[100%]">
                <div className="md:w-[50%]">
                  <p className="text-xl my-5">Name</p>
                  <input
                    type="text"
                    name="name"
                    required
                    className="rounded-lg border-neutral-500 border-2 h-10 p-3  w-[95%]"
                  />
                </div>
                <div className="md:w-[50%]">
                  <p className="text-xl my-5">Phone</p>
                  <input
                    type="text"
                    name="phone"
                    className="rounded-lg border-neutral-500 border-2 h-10 p-3 w-[95%]"
                  />
                </div>
              </div>
              <div>
                <p className="text-xl my-5">Email</p>
                <input
                  type="email"
                  required
                  name="email"
                  className="rounded-lg border-neutral-500 border-2 h-10 p-3 w-[95%]"
                />
              </div>
              <div>
                <p className="text-xl my-5">Subject</p>
                <input
                  type="subject"
                  name="subject"
                  required
                  className="rounded-lg border-neutral-500 border-2 h-10 p-3 w-[95%]"
                />
              </div>
              <div>
                <p className="text-xl my-5">Message</p>
                <textarea
                  required
                  name="about"
                  className="rounded-lg border-neutral-500 border-2 h-40 p-3 w-[95%]"
                />
              </div>
              <input
                className="w-[85%]  self-center rounded-xl h-12 my-10 text-xl shadow-lg shadow-neutral-700 cursor-pointer bg-gradient-to-r from-[#5651] to-zinc-800 hover:bg-sky-50 transition duration-300 ease-in-out "
                type="submit"
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
