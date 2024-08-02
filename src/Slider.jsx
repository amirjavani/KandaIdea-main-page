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
      title: "",
      nextIconImage: "",
      iconImage: "",
      numberUrl: "",
      text: "",
    },
    {
      index: 2,
      title: "",
      nextIconImage: "",
      iconImage: "",
      numberUrl: "",
      text: "",
    },
  ];
  const [mainSlide, setMainSlide] = useState(sliderList[0]);
  const [nextlSlide, setNextSlide] = useState(sliderList[1]);

  const newslide = () => {
    setMainSlide(sliderList[(mainSlide.index + 1) % 3]);
    console.log(mainSlide);
    setNextSlide(sliderList[(nextlSlide.index + 1) % 3]);
    console.log(nextlSlide);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      newslide();
    }, 5000);
    return () => clearInterval(intervalId);
  });

  return <div>
    <div className="flex flex-row">
        <div>

        </div>
    </div>
  </div>;
}

export default Slider;
