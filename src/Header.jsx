import React from "react";
import Slider from "./Slider";

function Header() {
  return (
    <div id="header" className="  flex flex-col text-white">
      <div className="flex flex-row justify-between px-5 sm:px-16  pt-10 md:pt-16">
        <img
          src="Assets/kandaidea-svg.svg "
          className="h-10 md:h-12 fadeInLeft"
          alt=""
        />
        <div className="flex flex-row  gap-2">
          <span className="hidden md:block lg:text-xl py-5 font-DinMedium fadeInRight">
            Choose Language : En / Fa
          </span>
          <img
            src="Assets/menu_button.svg"
            className="px-8 py-4 md:py-5 fadeInRight "
            alt=""
          />
        </div>
      </div>
      <div className="pt-5 sm:p-10 w-44 ">
        <img
          className="absolute h-40 sm:h-44 "
          src="Assets/main-Logo.svg"
          alt="CEE"></img>
        <span className="font-DinBold relative left-12 sm:left-14  top-9 sm:top-7 leading-6 md:leading-9 text-3xl sm:text-4xl">CREATIVE ENGINEERING EXPERIENCE</span>
      </div>
      <hr className="relative top-40"></hr>
      <Slider/>
    </div>
  );
}

export default Header;
