import React, {FC} from 'react';
import moment from "moment";

interface ProjectSummaryProps {
	project: any;
}

const ProjectSummary: FC<ProjectSummaryProps> = ({project}) => {
	
	// Converting Timestamp to Date:
	const date = moment(project?.createdAt.toDate()).calendar()
	
	return (
		<div className={'card-content grey-text text-darken-3'}>
			<span className={'card-title'}>{project.title}</span>
			<p>{project.content}</p>
			<p>Posted by the {project.authorFirstName} {project.authorLastName}</p>
			<p className={'grey-text'}>{date}</p>
		</div>
	)
}

export {ProjectSummary};