import React, {FC} from 'react';

// Imports for mapStateToProps:
import {AppState} from "../../store";
import {connect} from 'react-redux';

// Realtime checking firestore cloud for updates:
import {useFirestoreConnect} from "react-redux-firebase";

// Route protection:
import {Redirect} from "react-router-dom";
import moment from "moment";

type Props = {
	project: any;
	uid: string;
}

const DumbComponent: FC<Props> = ({project, uid}) => {
	
	useFirestoreConnect('projects')
	
	// Route protection:
	if (!uid) return (<Redirect to={'/sign-in'}/>)
	
	const date = moment(project?.createdAt.toDate()).calendar()
	
	if (project) {
		return (
			<div>
				<div className="container section project-details">
					<div className="card z-depth-0">
						<div className="card-content">
						<span className="card-title">
							{project.title}
						</span>
							<p>
								{project.content}
							</p>
						</div>
						<div className="card-action grey lighten-4 grey-text">
							<div>Posted by {project.authorFirstName} {project.authorLastName}</div>
							<div>{date}</div>
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className={'container center'}>
				<p>Loading project...</p>
			</div>
		)
	}
	
}

const mapStateToProps = (state: AppState, ownProps: any) => {
	const id = ownProps.match.params.id
	const projects = state.firestore.data.projects
	const project = projects ? projects[id] : null
	return {
		project: project,
		uid: state.firebase.auth.uid,
	}
}

export const ProjectDetails = connect(mapStateToProps)(DumbComponent);