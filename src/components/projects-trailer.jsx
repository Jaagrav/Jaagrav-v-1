import React from 'react'

function ProjectsTrailer(props) {
    return (
        <div className="project">
            <img src={props.projectthumbnail} alt={props.projectname} className="project-thumbnail" />
            <div className="project-name">{props.projectname}</div>
            <div className="project-tools">
                {props.tools.map(item => (
                    <span>{item}</span>
                ))}
            </div>
            <div className="project-desc">{props.projectdesc}</div>
            <div className="project-links">
                <a href={props.github} target="_blank"><abbr title="Github Repo" className="fab fa-github"></abbr><span>GitHub</span></a>
                <a href={props.website} target="_blank"><abbr title="Project Website" className="fas fa-external-link-alt"></abbr><span>Website</span></a>
            </div>
        </div>
    )
}

export default ProjectsTrailer;