import React from 'react';

function Project() {
    const levelHandler = (e) => {
        console.log(e.target.value);
    } 
    return(
        <section className="project--section">
            <div className="title"><h2>Projects</h2></div>
            <div className="select">
                <select onChange={levelHandler} name="projects" className='filter--projectss'>
                    <option value="all">All</option>
                    <option value="newbie">Newbie</option>
                    <option value="junior">Junior</option>
                    <option value="intermediate">Intermediate</option>
                </select>
            </div>
            <div className="project--wrapper">
                <div className="project--card">
                    <img src="./images/e-commerce.png" alt="" />
                    <h3 className="project--title">Huddle Landing page</h3>
                    <div className="languages--wrapper">
                        <span lang="HTML">HTML</span>
                        <span lang="CSS">CSS</span>
                        <span lang="JS">JS</span>
                        <span lang="REACT">REACT</span>
                    </div>
                    <div className="links--wrapper">
                        <a href="">Github</a>
                        <a href="">Visit Site</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;