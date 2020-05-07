import React, {FC} from 'react';

// Components:
import Notifications from "./Notifications";
import ProjectList from "../project/ProjectList";
import {useFirestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import {AppState} from "../../store";

// State:
type Props = {
	projects: any
}
// Connection function

const Dashboard: FC<Props> = ({projects}) => {
	
	useFirestoreConnect('projects')
	
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

const mapStateToProps = (state: AppState) => {
	return {
		projects: state.firestore.ordered.projects
	}
}

export default connect(mapStateToProps)(Dashboard)
