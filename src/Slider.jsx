import React, { useEffect, useState } from "react";

function Slider() {
  const sliderList = [
    {
      index: 0,
      title: "INDUSTRIES",
      nextIconImage: "Assets/industries-ow.svg",
      iconImage: "Assets/industries-w.svg",
      numberUrl: "Assets/rec_w_1.svg",
      text: "Kanda Idea has considerable expertise in many industries and also has developed its sector of abilities field by field and it has been experienced in a wide range of territory. Kanda Idea has started its journey from Oil and Gas and Petrochemical industry and continued in GIS (Geospatial Information System) and Geomatics and now it is cruising in the Maritime and Ship-Tracking area.",
    },
    {
      index: 1,
      title: "SERVICES & SOLUTIONS",
      nextIconImage: "Assets/services-ow.svg",
      iconImage: "Assets/services-w.svg",
      numberUrl: "Assets/rec_w_2.svg",
      text: "Over 15 years of experience in engineering services consultancy and with the taking advantage of expert human resources, Kanda Idea provides a wide range of services and solutions and become one of the leading consultants in the region.",
    },
    {
      index: 2,
      title: "RESEARCH & DEVELOPMENT",
      nextIconImage: "Assets/R&D-ow.svg",
      iconImage: "Assets/R&D-w.svg",
      numberUrl: "Assets/rec_w_3.svg",
      text: "In this contemporary age, science and technology are changing magnificently second by second and being associated with it, is one of the most necessary characteristics that all companies should follow. Kanda Idea put adequate time and effort into researching cutting-edge science and developing the latest technology by several laboratories.",
    },
  ];
  const [mainSlide, setMainSlide] = useState(sliderList[0]);
  const [nextlSlide, setNextSlide] = useState(sliderList[1]);

  const newslide = () => {
    const nextTitle = document.getElementById("next-title");
    nextTitle.classList.add("hide-down");
    nextTitle.classList.add("fade-out-down");
    const slide = document.getElementById("slide");
    slide.classList.add("hide-right");
    slide.classList.add("fade-out-right");
    setTimeout(() => {
      nextTitle.classList.remove("hide-down");
      nextTitle.classList.remove("fade-out-down");
      slide.classList.remove("hide-right");
      slide.classList.remove("fade-out-right");
      setMainSlide(sliderList[(mainSlide.index + 1) % 3]);
      setNextSlide(sliderList[(nextlSlide.index + 1) % 3]);
    }, 700);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      newslide();
    }, 4300);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="px-10 mt-20 sm:px-20  flex flex-col gap-10">
      <div id="next-title" className="flex flex-row   gap-4 ">
        <img src={nextlSlide.nextIconImage} alt="" />
        <p
          className="font-DinMedium  text-3xl md:text-4xl text-transparent "
          style={{ WebkitTextStroke: ".5px white" }}>
          {" "}
          {nextlSlide.title}
        </p>
      </div>
      <div className="absolute w-7 sm:w-8 right-8 sm:right-14  md:right-28 flex flex-col gap-3 top-[377px] sm:top-[445px] md:top-[464px] " >
        <img className="" src={mainSlide.numberUrl} alt=""></img>
        <img className="" src='Assets/8_w.svg' alt=""></img>
        <img className="cursor-pointer" onClick={()=>newslide()} src={'Assets/arrow_d.svg'} alt=""></img>
      </div>
      <div id="slide" className="mt-5 md:w-5/6">
        <div className="flex flex-row   gap-4 ">
          <img src={mainSlide.iconImage} alt="" />
          <p className="font-DinMedium text-3xl  md:text-4xl  " style={{}}>
            {" "}
            {mainSlide.title}
          </p>
        </div>
        <p className=" sm:pl-5 md:pl-16 text-lg  md:text-xl">
          {mainSlide.text}
        </p>
      </div>
    </div>
  );
}

export default Slider;
