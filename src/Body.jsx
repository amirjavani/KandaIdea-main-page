import React, { useEffect, useState } from "react";

function Body() {
  const [WCpostion, setWCpostion] = useState(0);
  
  const scrollHandeler = () => {
    const scrolly = window.scrollY;
    console.log(scrolly);
    if (scrolly > 600 && WCpostion === 0 ) {
      setWCpostion(600);
    }
     if(scrolly < 1800 && WCpostion >= 0){
      setWCpostion(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandeler);
    return () => {};
  }, []);

  return (
    <div className="  ">
      <p
        className={`duration-[5000ms] absolute font-DinBold z-0 text-[300px] leading-[200px] top-[1700px]  text-transparent`}
        style={{ WebkitTextStroke: "5px gray",right:`${WCpostion}px`}}>
        <span className="invisible">SL</span>We <br /> create
      </p>
      <p className=" font-DinBold text-5xl py-5 px-32"> OVERVIEW</p>
      <p className="relative font-DinMedium text-2xl py-1  px-32">
        {" "}
        Discover the next inspiring talks in industry
      </p>
      <div className="relative py-5 px-32 grid grid-cols-12 gap-3">
        <img className="col-span-3 h-[250px]" src="Assets/project1.png" alt=""/>
        <img className="col-span-3 h-[250px]" src="Assets/project2.png" alt=""/>
        <img className="col-span-6 h-[250px]" src="Assets/project3.png" alt=""/>
        <img className="col-span-3 h-[250px]" src="Assets/project4.png" alt=""/>
        <img className="col-span-9  h-[250px]" src="Assets/project5.png" alt=""/>
        <img className="col-span-3 h-[250px]" src="Assets/project6.png" alt=""/>
        <img className="col-span-3 h-[250px]" src="Assets/project7.png" alt=""/>
        <img className="col-span-6 h-[250px]" src="Assets/project8.png" alt=""/>

      </div>
    </div>
  );
}

export default Body;
