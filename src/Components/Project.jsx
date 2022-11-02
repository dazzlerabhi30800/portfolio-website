import React, { useState } from "react";
import ProjectCard from './ProjectCard';
import Spinner from './Spinner';

function Project({ data, setLevel, filterProjects, fetch }) {
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultSize, setResultSize] = useState(4);
  console.log(filterProjects.length);
  const handleLevel = (e) => {
    console.log(e.target.value);
    setLevel(e.target.value);
  };
  const handleShow = () => {
    if (resultSize >= filterProjects.length) {
      const length = filterProjects.length
      setResultSize(18);
    }
    else {
      setResultSize(resultSize + 4);
    }
    console.log({ resultSize })
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
        {fetch ? <Spinner /> : (filterProjects.slice(0, 4).map((item, index) => {
          return (
            <ProjectCard data={item} key={index} />
          )
        }))}
        {showMore ?
          (loading ? <Spinner /> : filterProjects.slice(4, resultSize).map((item, index) => {
            return (
              <ProjectCard data={item} key={index} />
            )
          })) :
          ""
        }
      </div>
      <button disabled={resultSize === filterProjects.length} className="load--btn" onClick={handleShow}>Load More</button>
    </section>
  );
}

export default Project;
