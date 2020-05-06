import React, {FC} from 'react';
import { PROJECT_TYPE } from '../../store/reducers/project/types';

const ProjectSummary: FC<PROJECT_TYPE> = ({id, title, content}) => {
	return (
		<div className={'card-content grey-text text-darken-3'}>
			<span className={'card-title'}>{title}</span>
			<p>{content}</p>
			<p>Posted by the Lopson</p>
			<p className={'grey-text'}>3rd of September, 2am</p>
		</div>
	)
}

export default ProjectSummary;