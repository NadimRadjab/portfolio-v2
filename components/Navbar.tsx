import Link from "next/link";
import React from "react";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="fixed z-[100]  animate-[start-navbar_1.5s_ease-in-out] bg-transparent w-screen h-24  p-4 items-center  flex  shadow-xl shadow-zinc-900 transition ease-in-out delay-250 translate-x-4 ">
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
        <div className="md:hidden mr-5">
          <AiOutlineMenuFold size={28} />
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
        <div className="fixed l-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#131217] p-10 ease-in duration-500">
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="#home">
                <p className="text-4xl">N.R</p>
              </Link>
              <div className="rounded-full shadow-lg shadow-gray-200 p-4 cursor-pointer">
                <AiOutlineClose size={17} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
