import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // const singleProject = projects.map(project => <ProjectItem
  //   key={project.id}
  //   name={project.name}
  //   about={project.about}
  //   technologies={project.technologies}
  // />
  // )
  const singleProject = projects.map(project => {
    let { id, name, about, technologies } = project;
    return <ProjectItem
      key={id}
      name={name}
      about={about}
      technologies={technologies}
    />
  })
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{singleProject}</div>
    </div>
  );
}

export default ProjectList;
