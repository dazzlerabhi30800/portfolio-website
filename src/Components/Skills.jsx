import React from "react";

const Skills = ({ skillsContainer }) => {
  const logoImg = [
    "./logo/nodejs.png",
    "./logo/css.png",
    "./logo/sass.png",
    "./logo/bootstrap.png",
    "./logo/figma.png",
    "./logo/javascript.png",
    "./logo/react.png",
    "./logo/github.png",
    "./logo/tailwind.png",
    "./logo/vite.png",
  ];
  window.addEventListener("scroll", () => {
    const slideAt =
      window.scrollY +
      window.innerHeight -
      skillsContainer.current.clientHeight / 2;
    // bottom of the image
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
    <section className="skills--wrapper" id="skills">
      <div className="title">
        <h1>My Arsenal for Coding</h1>
      </div>
      <div className="skills--container" ref={skillsContainer}>
        {logoImg.map((img, i) => {
          return <img src={img} key={i} alt="" />;
        })}
      </div>
    </section>
  );
};

export default Skills;
