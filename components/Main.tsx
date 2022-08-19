import React from "react";

const Main = () => {
  return (
    <main className="h-screen w-full text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="align-middle text-6xl">
            Hi, I'm <span className="text-emerald-700">Nadim</span>
          </h2>
          <h2 className="text-5xl">A React Native Developer</h2>
        </div>
        <p className="text-xl py-4 max-w-[70%] text-gray-300">
          I'm a react native developer sepcializing in building exceptional
          apps. Currently I'm focused on updating and imporiving my apps.
        </p>
      </div>
    </main>
  );
};

export default Main;
