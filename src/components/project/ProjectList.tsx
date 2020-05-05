import React from 'react';
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
	return (
		<div className={'project-list section'}>
			<div className="card z-depth-0 project-summary">
				
				<ProjectSummary/>
				<ProjectSummary/>
				<ProjectSummary/>
				<ProjectSummary/>
				
			</div>
		</div>
	)
}

export default ProjectList;