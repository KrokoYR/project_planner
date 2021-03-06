import {CREATE_PROJECT, CREATE_PROJECT_ERROR, PROJECT_ACTION_TYPES, PROJECT_TYPE} from "./types";
import {ActionCreator, Dispatch} from 'redux';
import {AppActions, AppState} from "../../index";

//firebase:
import {firebase} from '../../../index'
import {getFirestore} from "redux-firestore";

export const createProject: ActionCreator<PROJECT_ACTION_TYPES> = (project: PROJECT_TYPE) => {
	return {
		type: CREATE_PROJECT,
		payload: project
	}
}

export const createProjectError: ActionCreator<PROJECT_ACTION_TYPES> = (error: Error) => {
	return {
		type: CREATE_PROJECT_ERROR,
		payload: error
	}
}

export const thunkCreateProject = (projectData: PROJECT_TYPE) => {
	return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
		const {
			title = '',
			content = ''
		} = projectData;
		const project = {title, content};
		
		const author = getState().firebase.profile;
		const uid = getState().firebase.auth.uid;
		
		const firestore = getFirestore(firebase)
		firestore.collection('projects').add({
			...projectData,
			authorId: uid,
			authorFirstName: author.firstName,
			authorLastName: author.lastName,
			createdAt: new Date()
		}).then(() => {
			dispatch(
				createProject({
					uid,
					...project,
				})
			)
		}).catch((error: Error) => {
			dispatch(
				createProjectError(
					error
				)
			)
		})
	}
}