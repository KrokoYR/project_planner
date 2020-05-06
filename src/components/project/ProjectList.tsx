import React, {FC} from 'react';
import ProjectSummary from "./ProjectSummary";
import {PROJECT_STATE} from "../../store/reducers/project/types";

const ProjectList: FC<PROJECT_STATE> = ({projects}) => {
	
	const projectElems = projects && projects.map(project => {
		return <ProjectSummary key={project.id}
		                       id={project.id}
		                       title={project.title}
		                       content={project.content}/>
	})
	
	return (
		<div className={'project-list section'}>
			<div className="card z-depth-0 project-summary">
				
				{projectElems}
				
			</div>
		</div>
	)
}

export default ProjectList;