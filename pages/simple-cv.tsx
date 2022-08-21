import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import simpleCV3 from "../assets/images/SimpleCV/simpleCV3.png";
import simpleCV1 from "../assets/images/SimpleCV/simpleCV1.png";
import simpleCV2 from "../assets/images/SimpleCV/simpleCV2.png";
import simpleCV4 from "../assets/images/SimpleCV/simpleCV4.png";
import simpleCV from "../assets/images/simpleCV.png";
import css from "../assets/images/Skills/Front-end/css.png";
import html from "../assets/images/Skills/Front-end/html.png";
import js from "../assets/images/Skills/Front-end/js.png";
import ts from "../assets/images/Skills/Front-end/ts.png";
import react from "../assets/images/Skills/Front-end/react.png";
import express from "../assets/images/Skills/Back-end/express.png";
import nodeJs from "../assets/images/Skills/Back-end/nodeJs.png";
import mongodb from "../assets/images/Skills/Back-end/mongodb.png";
import socket from "../assets/images/Skills/Back-end/socket.png";
import expo from "../assets/images/Skills/Miscellaneous/expo.png";
import firebase from "../assets/images/Skills/Miscellaneous/firebase.png";
import git from "../assets/images/Skills/Miscellaneous/git.png";
import github from "../assets/images/Skills/Miscellaneous/github.png";
import npm from "../assets/images/Skills/Miscellaneous/npm.png";
import redux from "../assets/images/Skills/Miscellaneous/redux.png";
import Slider from "../components/UI/Slider";
import { simpleCVImageData } from "../data/imagesSeeds";
const SimpleCV = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full 2xl:flex 2xl:justify-center h-screen">
      <div className="max-w-[1340px] w-full h-full ">
        <div className="w-full h-full grid lg:grid-cols-2 gap-10 grid-cols-1 justify-items-center items-center">
          <div className="max-w-[400px] align-middle self-end ">
            <Slider sliderData={simpleCVImageData} />
          </div>
          <div className="">
            <h2 className="text-4xl mb-10 ">Overview</h2>
            <p className="text-xl">
              Simple CV is a client-side CV creator application made with React
              Native and Expo that utilizes the expo-print system to generate
              pdf format, which is provided through an HTMLString. The
              application allows the user to choose a template to fill up his
              information, edit the margins of the template font-family text
              sizes and colors.
            </p>
          </div>
          <div className="bg-zinc-900 lg:col-span-2 shadow-lg shadow-neutral-700  h-auto rounded-xl justify-center p-3 flex flex-col ">
            <h2 className="text-2xl mb-10 self-center">Technologies</h2>
            <ul className="text-white mx-10 text-lg list-disc ">
              <li>React Native</li>
              <li>Expo-bare</li>
              <li>React Navigation</li>
              <li>Redux</li>
              <li>Firebase</li>
              <li>RevenueCat</li>
              <li>NativeBase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCV;
