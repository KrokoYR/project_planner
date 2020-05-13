import React, {FC} from 'react';
import {PROJECT_TYPE} from '../../store/reducers/project/types';

const ProjectSummary: FC<PROJECT_TYPE> = ({
	                                          id,
	                                          title,
	                                          content,
	                                          timestamp
                                          }) => {
	return (
		<div className={'card-content grey-text text-darken-3'}>
			<span className={'card-title'}>{title}</span>
			<p>{content}</p>
			<p>Posted by the Lopson</p>
			<p className={'grey-text'}>{timestamp}</p>
		</div>
	)
}

export {ProjectSummary};