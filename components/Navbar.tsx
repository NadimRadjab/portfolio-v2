import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed z-[100]  animate-[start-navbar_1.5s_ease-in-out] bg-transparent w-screen h-24  p-3 items-center  flex  shadow-xl shadow-zinc-900 transition ease-in-out delay-250  ">
      <ul className="m-4 ml-10 justify-self-center">
        <li className="text-lg">
          <Link href="#projects">N.R</Link>
        </li>
      </ul>
      <div className="p-4 items-center  w-5/6 justify-end flex">
        <ul className="m-4  hidden md:flex mr-40 ">
          <Link href="#projects">
            <li className="text-lg m-2">Projects </li>
          </Link>

          <Link href="#skills">
            <li className="text-lg m-2">Skills </li>
          </Link>

          <Link href="#contact">
            <li className="text-lg m-2">Contact </li>
          </Link>
        </ul>
        <div onClick={handleOpen} className="md:hidden mr-5 cursor-pointer">
          <AiOutlineMenuFold size={28} />
        </div>
      </div>
      <div
        className={
          open
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            open
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#131217] p-10 ease-in duration-500 flex flex-col"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 flex flex-col"
          }
        >
          <div className="mt-10">
            <div className="flex w-full items-center justify-between">
              <Link href="#home">
                <p className="text-4xl hover:cursor-pointer">N.R</p>
              </Link>
              <div
                onClick={handleOpen}
                className="rounded-full shadow-lg shadow-gray-200 p-3 cursor-pointer"
              >
                <AiOutlineClose size={16} />
              </div>
            </div>
          </div>
          <div className="justify-center items-center flex flex-1">
            <ul className="m-4">
              <Link href="#projects">
                <li className="before:text-white after:text-emerald-800  text-2xl m-10 cursor-pointer transition ease hover:after">
                  Projects
                </li>
              </Link>

              <Link href="#skills">
                <li className="text-2xl m-10 hover:cursor-pointer">Skills</li>
              </Link>

              <Link href="#contact">
                <li className="text-2xl m-10 hover:cursor-pointer">Contact </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
