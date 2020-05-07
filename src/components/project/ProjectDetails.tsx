import React, {FC} from 'react';
import {AppState} from "../../store";
import { connect } from 'react-redux';
import {useFirestoreConnect} from "react-redux-firebase";

type Props = {
	project: any
}

const ProjectDetails: FC<Props> = ({project}) => {
	useFirestoreConnect('projects')
	
	if(project) {
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
							<div>{new Date(project.createAt?.nanoseconds).toDateString()}</div>
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
		project: project
	}
}

export default connect(mapStateToProps)(ProjectDetails);