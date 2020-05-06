import React, {FC} from 'react';
import Notifications from "./Notifications";
import ProjectList from "../project/ProjectList";
import { PROJECT_STATE } from '../../store/reducers/project/types';

const Dashboard: FC<PROJECT_STATE> = ({projects}) => {
	return (
		<div className={'dashboard container'}>
			<div className="row">
				<div className="col s12 m6">
					<ProjectList projects={projects}/>
				</div>
				<div className="col s12 m5 offset-m1">
					<Notifications/>
				</div>
			</div>
		</div>
	)
}

export default Dashboard;