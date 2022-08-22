import React from "react";
import Link from "next/link";

import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
interface Props {
  link: string;
  isEmail?: boolean;
}
const ContactButton = (props: Props) => {
  return (
    <div className="w-[64px] h-[64px] cursor-pointer rounded-full shadow-lg flex justify-center items-center shadow-zinc-800 bg-gradient-to-r from-[#5651] to-zinc-800 mx-4 active:bg-sky-50 md:hover:bg-sky-50 md:hover:scale-125 transition ease-in-out duration-300">
      <Link href={props.link}>
        {props.isEmail ? (
          <AiOutlineMail size={30} />
        ) : (
          <AiFillGithub size={30} />
        )}
      </Link>
    </div>
  );
};

export default ContactButton;
