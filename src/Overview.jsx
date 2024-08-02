import React, { useEffect } from "react";

function Overview() {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const overview = document.getElementById("overview");
    if (scrollPosition > 400) {
      overview.classList.remove("invisible");
      overview.classList.add("visible");
      overview.classList.add("fadeInDown");
    } else {
      //   overview.classList.remove("fadeInDown");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-row mt-20 px-6">
      <img
        id="arrow"
        className="max-h-52 mx-5"
        src="Assets/arrow_down.svg"
        alt=""></img>
      <div className="flex flex-col-reverse md:flex-row gap-5">
        <div
          id="overview"
          className={`flex flex-col w-full  invisible 
             `}>
          <p className="font-DinBold text-5xl py-5 "> OVERVIEW</p>
          <p className="font-DinLight text-blue-700 text-[39px]  ">
            {" "}
            THE CONFLUENCE OF ENGINEERING & CREATIVITY
          </p>
          <p className="font-DinMedium text-[20px] ">
            Kanda Idea is a leading Iranian company with a long-term successful
            experience in providing technology-based engineering, monitoring
            (supervising), and management services in mega-projects,
            enterprises, and the public sector.
          </p>
        </div>
        <img
          className="w-2/3 max-h-52 mr-12 "
          src="Assets/overview.svg"
          alt="overview"
        />
      </div>
    </div>
  );
}

export default Overview;
