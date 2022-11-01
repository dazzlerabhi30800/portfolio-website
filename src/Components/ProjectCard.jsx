import React from "react";

function ProjectCard({data}) {
  return (
    <div className={`project--card ${data.color}`}>
      <div className="project--img">
        <img src={data.images} alt={data.color} />
      </div>
      <h3 className="project--title">
        {data.title}
      </h3>
      <div className="link--wrapper">
        <a href={data.githubUrl} target="_blank" className="btn github">
          Github Repo
        </a>
        <a href={data.liveUrl} target="_blank" className="btn live">
          Live Url
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
