import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
interface Props {
  image: StaticImageData;
  link: string;
  alt: string;
  animation: string;
}
const ProjectItem = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div
      data-aos={props.animation}
      className="bg-zinc-900 w-full shadow-lg shadow-neutral-700  h-auto rounded-xl cursor-pointer relative flex flex-col justify-center p-3 group hover:bg-gradient-to-r from-[#5651] to-gray-700 "
    >
      <Image
        alt={props.alt}
        src={props.image}
        className="rounded-xl group-hover:opacity-10"
      />
      <Link href={props.link}>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col hidden group-hover:block">
          <div className="w-[140px] h-[140px] rounded-full  flex justify-center items-center bg-white group-hover:animate-[view-button_0.5s_ease-in-out]">
            <p className="text-xl text-gray-800">{t("view")}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
