import React from "react";

interface Props {
  handleLanguage: () => void;
  language: string;
}
const Switch = (props: Props) => {
  return (
    <div className="flex  items-center">
      <p className="text-xl m-2 text-transparent transition ease-in-out duration-300  bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-100 ">
        EN
      </p>
      <div className="w-[115px] h-[40px] rounded-3xl shadow-sm shadow-neutral-500  flex items-center bg-gradient-to-r from-gray-500 to-gray-600 p-2">
        <div
          onClick={props.handleLanguage}
          className={`w-[54px] h-[32px]   bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-3xl shadow-sm shadow-neutral-800 cursor-pointer transition ease-in-out duration-500 ${
            props.language === "en" ? "" : "translate-x-12"
          } `}
        ></div>
      </div>
      <p className="text-xl m-2 text-transparent transition ease-in-out duration-300  bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-100">
        DE
      </p>
    </div>
  );
};

export default Switch;
