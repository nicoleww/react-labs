import React from  'react';
import ProjectsItem from '../ProjectsItem/ProjectsItem';


function Projects(props) {
    return (
        <div className="Projects">
            <h1>Some of my recent work:</h1>
            <div class="projects-contain">
                <div class="back-btn">
                    <button onClick={() => props.prevProject()}><img src="https://i.imgur.com/UaW6ryO.png" /></button>
                </div>
            <div className="card">
          <ProjectsItem name={props.project.name} img={props.project.img} desc={props.project.desc} login={props.project.login} tech={props.project.tech} github={props.project.github} live={props.project.live} button={props.project.button}/>
          </div>
            <div class="next-btn">
            <button onClick={() => props.nextProject()}><img src="https://i.imgur.com/7WsU4QF.png"></img></button>
            </div>
     
            </div>
        </div>
    )
}



export default Projects;