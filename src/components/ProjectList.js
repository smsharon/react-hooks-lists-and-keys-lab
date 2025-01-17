import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const pro = projects.map (project =>{

    return <ProjectItem key={project.id} name={project.name} technologies={project.technologies}/>

  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}</div>
      <div id="project-list">
        {pro}
      </div>
      
    </div>
  );
}

export default ProjectList;
