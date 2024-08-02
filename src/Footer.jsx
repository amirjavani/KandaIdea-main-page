import React from "react";

function Footer() {
  return (
    <div>
      <div className= "relative grid grid-cols-5 sm:grid-cols-12  md:grid-cols-11 lg:grid-cols-12  font-DinMedium md:col-9  mx-auto">
        <img
          className="px-1 left-6 md:left-10 lg:left-20 relative h-[63px]"
          src="Assets/arrows_up.png"
          alt=""
        />
        <img className="col-end-3 col-span-1 sm:col-end-13" src="Assets/second-logo.svg" alt=""></img>

        <div className="col-start-2 col-span-3 mx-3">
          <p className="text-[31px]">INDUSTRIES</p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            Maritime
          </p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            Oil & Gas
          </p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            Telecommunication
          </p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            Agriculture
          </p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            Roads & Cities
          </p>
        </div>
        <div className="col-start-2 sm:col-span-3 mx-3">
          <p className="text-[31px]">SERVICES</p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            Data Providing
          </p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            Data Engineering
          </p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            Engineering Design
          </p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            GIS & Geomatic
          </p>
        </div>
        <div className= "col-start-2 sm:col-span-3 mx-3">
          <p className="text-[31px]">COOPERATION</p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            About Kanda Idea
          </p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            Contact Us
          </p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            Get Job
          </p>
          <p className="text-[20px]  ">Change Language :</p>
          <p className="text-[20px] hover:text-[#0000ff] hover:cursor-pointer">
            Fa / En
          </p>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row m-5 sm:justify-between">
        <div className="flex flex-row gap-3">
        <i class="text-[30px] bi bi-linkedin hover:text-blue-600"></i>
        <i class="text-[30px] bi bi-instagram hover:text-blue-600"></i>
        <i class="w-[30px] aparat hover:text-blue-600"></i>
        </div>
        <div class="footer-copyright">
          ©Copyright 2020. All Rights Reserved.
        </div>
      </div>
      <></>
    </div>
  );
}

export default Footer;
