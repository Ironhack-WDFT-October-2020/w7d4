import React from 'react'
import { myProjects } from './Projects';
import { Link } from 'react-router-dom';

export default function ProjectDetails(props) {

    console.log(props.match.params);
    const projectId = props.match.params.id;

    const project = myProjects.find(project => project.id === projectId);

    return (
        <div>
            <h2>{project.name}</h2>
            <h3>Used technologies: {project.technologies}</h3>
            <p>{project.description}</p>
            <Link to="/projects">Back to the Projects</Link>
        </div>
    )
}
