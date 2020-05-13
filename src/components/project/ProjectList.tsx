import React, {FC} from 'react';
import {Link} from "react-router-dom";

// Components:
import {ProjectSummary} from "./ProjectSummary";

// Types:
import {PROJECT_STATE} from "../../store/reducers/project/types";

const ProjectList: FC<PROJECT_STATE> = ({projects}) => {
	
	const projectElems = projects && projects.map(project => {
		
		return (
			<Link key={project.id} to={'/project/' + project.id}>
				<ProjectSummary key={project.id}
				                id={project.id}
				                title={project.title}
				                content={project.content}
				                timestamp={project.timestamp}/>
			</Link>
		)
	})
	
	return (
		<div className={'project-list section'}>
			<div className="card z-depth-0 project-summary">
				
				{projectElems}
			
			</div>
		</div>
	)
}

export {ProjectList};