import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function AboutSection() {
  const [isAnimation, setIsAnimation] = useState(false);
  const customAnimation = keyframes`
        from {
            opacity: 0;
            transform: translate3d(200px, -100px, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0,0,0);
        }
    `;

  function resizeWindow() {
    if (window.innerWidth >= 950) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }
  }

  window.addEventListener("resize", resizeWindow);
  window.addEventListener("DOMContentLoaded", resizeWindow);

  return (
    <section className="about--section">
      <Slide>
        <div className="profile--img">
          <img src="./images/Profile Photo.jpg" alt="" />
        </div>
      </Slide>
      {isAnimation ? (
        <Slide keyframes={customAnimation}>
          <div className="about--info">
            <div className="about--heading">
              <h1>About Me</h1>
            </div>
            <p>
              "I am a Front Developer based in India. Been started Learning
              Front Development a few months ago chose this as a career option.
              I Love writing FrontEnd Code and love to make and trying new
              things. I have made over 150+ projects in timespan of my learning.
              An Engineering Student aspire to get a desk job."
            </p>
          </div>
        </Slide>
      ) : (
        <div className="about--info">
          <div className="about--heading">
            <h1>About Me</h1>
          </div>
          <p>
            I am a Front Developer based in India. Been started Learning Front
            Development a few months ago chose this as a career option. I Love
            writing FrontEnd Code and love to make and trying new things. I have
            made over 150+ projects in timespan of my learning. An Engineering
            Student aspire to get a desk job.
          </p>
        </div>
      )}
    </section>
  );
}

export default AboutSection;
