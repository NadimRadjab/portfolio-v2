import React from "react";
import Image from "next/image";
import gitHub from "../assets/images/Skills/Miscellaneous/github.png";
import gmail from "../assets/images/gmail.png";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full 2xl:h-screen" id="contact">
      <div className="max-w-[1240px] mx-auto h-full">
        <div className="my-10 md:text-start text-center border-b-2 mx-10">
          <h2 className="align-middle md:text-6xl text-4xl uppercase">
            get in touch
          </h2>
        </div>
        <div className="flex md:flex-row flex-col p-5">
          <div className="bg-zinc-900 w-full shadow-lg shadow-neutral-700 h-auto rounded-xl flex flex-col justify-center p-3 md:mx-10 my-10 md:my-0">
            <div className="text-center">
              <h3 className="md:text-3xl my-10  text-xl">
                You can Reach me at
              </h3>
              <div className="flex my-10 justify-center">
                <Link href="/">
                  <Image
                    className="cursor-pointer transtion duration-300 ease-in-out hover:scale-110"
                    alt="gitHub"
                    src={gitHub}
                  />
                </Link>
                <Link href="/">
                  <Image
                    className="cursor-pointer transtion duration-300 ease-in-out hover:scale-110"
                    alt="email"
                    src={gmail}
                  />
                </Link>
              </div>
              <h3 className="md:text-3xl text-xl my-10">
                Or simply fill the form
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
      </div>
    </div>
  );
};
export default Contact;
