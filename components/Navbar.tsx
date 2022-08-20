import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleShadow = () => {
      if (lastScrollY < window.scrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div
      className={
        isHidden
          ? `fixed z-[100] bg-transparent w-screen h-24  p-3 items-center flex transition duration-1000 ease-in-out ${
              !open ? "translate-y-[-100%]" : ""
            }`
          : `fixed z-[100] bg-transparent w-screen h-24  p-3 items-center flex shadow-lg shadow-zinc-700 transition duration-1000 ease-in-out translate-y-[0%]`
      }
    >
      <div className="m-4 ml-10">
        <Link href="/">
          <h2 className="text-transparent transition ease-in-out duration-300 md:text-6xl text-4xl cursor-pointer bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-100 hover:text-sky-50">
            N.R
          </h2>
        </Link>
      </div>
      <div className="p-4 items-center  w-5/6 justify-end flex">
        <ul className="m-4  hidden md:flex mr-40 cursor-pointer ">
          <Link href="#projects">
            <li className="text-xl m-2 text-transparent transition ease-in-out duration-300 bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-100 hover:text-sky-50">
              Projects
            </li>
          </Link>

          <Link href="#skills">
            <li className="text-xl m-2 text-transparent transition ease-in-out duration-300 bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-100 hover:text-sky-50">
              Skills
            </li>
          </Link>

          <Link href="#contact">
            <li className="text-xl m-2 text-transparent transition ease-in-out duration-300  bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-100 hover:text-sky-50">
              Contact
            </li>
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#131217] p-8 ease-in duration-500 flex flex-col"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 flex flex-col"
          }
        >
          <div className="mt-5">
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <h2 className="text-transparent transition ease-in-out duration-300 text-5xl cursor-pointer bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-100 hover:text-sky-50">
                  N.R
                </h2>
              </Link>
              <div
                onClick={handleOpen}
                className="w-[44px] h-[44px] cursor-pointer rounded-full shadow-lg flex justify-center items-center shadow-zinc-800 bg-gradient-to-r from-[#5651] to-zinc-800 mx-4 hover:bg-sky-50 hover:scale-125 transition ease-in-out duration-300"
              >
                <AiOutlineClose size={16} />
              </div>
            </div>
          </div>
          <div className="justify-center items-center flex flex-1">
            <ul className="m-4 cursor-pointer">
              <Link href="#projects">
                <li
                  onClick={handleOpen}
                  className="text-3xl m-20 text-transparent transition ease-in-out duration-300  bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-100 hover:text-sky-50"
                >
                  Projects
                </li>
              </Link>

              <Link href="#skills">
                <li
                  onClick={handleOpen}
                  className="text-3xl m-20 text-transparent transition ease-in-out duration-300  bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-100 hover:text-sky-50r"
                >
                  Skills
                </li>
              </Link>

              <Link href="#contact">
                <li
                  onClick={handleOpen}
                  className="text-3xl m-20 text-transparent transition ease-in-out duration-300  bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-100 hover:text-sky-50"
                >
                  Contact{" "}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
