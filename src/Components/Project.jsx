import React, { useState } from "react";
import ProjectCard from './ProjectCard';
import data from './ProjectCardData';
import Spinner from './Spinner';

function Project() {
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultSize, setResultSize] = useState(4);
  const handleLevel = (e) => {
    console.log(e.target.value);
  };
  const handleShow = () => {
      setResultSize(prevState => prevState + 2);
      setLoading(true)
      setShowMore(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000)
  } 
  return (
    <section className="project--section" id="projects">
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="select">
        <select
          onChange={handleLevel}
          name="projects"
          className="filter--projects"
        >
          <option value="all">All</option>
          <option value="newbie">Newbie</option>
          <option value="junior">Junior</option>
          <option value="intermediate">Intermediate</option>
        </select>
      </div>
      <div className="project--wrapper">
        {data.slice(0, 4).map((item, index) => {
          return (
            <ProjectCard data={item} key={index} />
          )
        })}
        {showMore ?
          (loading ? <Spinner /> : data.slice(4, resultSize).map((item, index) => {
            return (
              <ProjectCard data={item} key={index} />
            )
          })) :
          ""
        }
        <button className="load--btn" onClick={handleShow}>Load More</button>
      </div>
    </section>
  );
}

export default Project;
