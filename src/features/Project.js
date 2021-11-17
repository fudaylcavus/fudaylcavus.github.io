import React from 'react';
import './Project.css'
const Project = ({project}) => {

    const textStyle = {
        color: project.preferred_text_color ? project.preferred_text_color : 'white'
    }
    
    return (
        <div class="project">
            <div class="project-image">
               <img src={project.background_image ? project.background_image : './project-default.jpg'}  alt={project.title}/>
            </div>
            <div style={textStyle} class="title">
            {project.repo_url
            ? <a href={project.repo_url}>{project.title}</a>
            : project.title}
            </div>
            <div style={textStyle} class="description">{
            project.description + (project.repo_url ? " (click title to go repo)" : "")
            }
            </div>
        </div>
    )
}

export default Project