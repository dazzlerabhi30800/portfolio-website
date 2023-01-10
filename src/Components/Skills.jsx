import React from "react";
import ProgressCircle from "./ProgressCirlce";

const Skills = ({ skillsContainer }) => {
  return (
    <section className="skills--wrapper" id="skills">
      <div className="title">
        <h1>SkILLS</h1>
      </div>
      <ProgressCircle skillsContainer={skillsContainer} />
    </section>
  );
};

export default Skills;
