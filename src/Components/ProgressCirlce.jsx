import React from "react";

const ProgressCircle = ({ skillsContainer }) => {
  window.addEventListener("scroll", () => {
    // const imageReveal = window.scrollY - skillsContainer.current.offsetHeight;
    // console.log(skillsContainer.current.clientHeight);
    const slideAt =
      window.scrollY +
      window.innerHeight -
      skillsContainer.current.clientHeight / 2;
    // Bottom of the image
    const imageBottom =
      skillsContainer.current.offsetTop + skillsContainer.current.clientHeight;
    const isHalfShown = slideAt > skillsContainer.current.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      skillsContainer.current.classList.add("show");
    } else {
      skillsContainer.current.classList.remove("show");
    }
  });
  return (
    <div className="skills--container" ref={skillsContainer}>
      <div className="skills">
        <div className="outer">
          <div className="inner">
            <div id="number">
              <span className="lang">HTML</span>
              <span className="percent">90%</span>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" id="html" strokeLinecap="round" />
        </svg>
      </div>
      <div className="skills">
        <div className="outer">
          <div className="inner">
            <div id="number">
              <span className="lang">CSS</span>
              <span className="percent">85%</span>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" id="css" strokeLinecap="round" />
        </svg>
      </div>
      <div className="skills">
        <div className="outer">
          <div className="inner">
            <div id="number">
              <span className="lang">JS</span>
              <span className="percent">80%</span>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="70"
            id="javascript"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProgressCircle;
