import React, {FC} from 'react';
import {Link} from "react-router-dom";

// Components:
import {ProjectSummary} from "./ProjectSummary";

interface ProjectListProps {
	projects: Array<any>;
}

const ProjectList: FC<ProjectListProps> = ({projects}) => {
	const projectElems = projects && projects.map(project => {
		return (
			<Link key={project.id} to={'/project/' + project.id}>
				<ProjectSummary project={project}/>
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