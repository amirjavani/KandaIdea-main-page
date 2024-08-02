import React, { useEffect, useState } from "react";

function Body() {
  const [WCpostion, setWCpostion] = useState(0);
  
  const scrollHandeler = () => {
    const scrolly = window.scrollY;
    console.log(scrolly);
    if (scrolly > 850 && scrolly < 1600) {
      setWCpostion(scrolly-800);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandeler);
    return () => {};
  }, []);

  return (
    <div className="  ">
      <p
        className={`duration-[1500ms] absolute font-DinBold z-0 text-[250px] leading-[200px]   text-transparent`}
        style={{ WebkitTextStroke: "5px gray",right:`${WCpostion}px`}}>
        <span className="invisible">SL</span>We <br /> create
      </p>
      <p className=" font-DinBold text-5xl py-5 px-32"> OVERVIEW</p>
      <p className="relative font-DinMedium text-2xl py-1  px-32">
        {" "}
        Discover the next inspiring talks in industry
      </p>
    </div>
  );
}

export default Body;
