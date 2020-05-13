import React, {FC} from 'react';

// Components:
import {Notifications} from "./Notifications";
import {ProjectList} from "../project/ProjectList";

// Imports for mapStateToProps:
import {AppState} from "../../store";
import {connect} from "react-redux";

// Route protection:
import {Redirect} from 'react-router-dom';

// Connection to firebase:
import {useFirestoreConnect} from "react-redux-firebase";

// State:
type Props = {
	projects: any;
	uid: string;
}


const DumbComponent: FC<Props> = ({projects, uid}) => {
	// Connection to firebase:
	useFirestoreConnect('projects')
	
	// Route protection:
	if (!uid) return (<Redirect to={'/sign-in'}/>)
	
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
		projects: state.firestore.ordered.projects,
		uid: state.firebase.auth.uid,
	}
}

export const Dashboard = connect(mapStateToProps)(DumbComponent)
