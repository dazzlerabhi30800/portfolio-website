import React from "react";

const ProgressCircle = ({ skillsContainer }) => {
  window.addEventListener("scroll", () => {
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
      skillsContainer.current.classList.remove("shuffle");
    }
  });

  const handleShuffle = () => {
    if (
      skillsContainer.current.classList.contains("show") &&
      window.innerWidth >= 950
    ) {
      skillsContainer.current.classList.add("shuffle");
    } else {
      skillsContainer.current.classList.remove("shuffle");
    }
  };

  window.addEventListener("resize", handleShuffle);

  return (
    <div className="skills--container" ref={skillsContainer}>
      <div className="skills" onClick={handleShuffle}>
        <div className="lang" id="html">
          HTML
        </div>
        <div className="percent">
          <div data-percent="85%" className="percent--line"></div>
        </div>
      </div>
      <div className="skills">
        <div className="lang" id="css">
          CSS
        </div>
        <div className="percent">
          <div data-percent="90%" className="percent--line"></div>
        </div>
      </div>
      <div className="skills">
        <div className="lang" id="javascript">
          JAVASCRIPT
        </div>
        <div className="percent">
          <div data-percent="80%" className="percent--line"></div>
        </div>
      </div>
      <div className="skills">
        <div className="lang" id="react">
          REACT
        </div>
        <div className="percent">
          <div data-percent="80%" className="percent--line"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
