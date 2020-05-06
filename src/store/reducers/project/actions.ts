import {CREATE_PROJECT, PROJECT_ACTION_TYPES, PROJECT_STATE, PROJECT_TYPE} from "./types";
import {ActionCreator, Dispatch} from 'redux';
import {AppActions, AppState} from "../../index";
import { v4 as uuid } from 'uuid'

export const createProject: ActionCreator<PROJECT_ACTION_TYPES> = (project: PROJECT_TYPE)=> {
	return {
		type: CREATE_PROJECT,
		payload: project
	}
}

// const thunkCreateProject: ActionCreator<ThunkAction<void, AppState, null, Action<string>>> = (project: PROJECT_TYPE) => {
// 	return (dispatch: Dispatch<AppState>): Action<PROJECT_ACTION_TYPES> => {
// 		return dispatch({
// 			type: CREATE_PROJECT,
// 			payload: project
// 		});
// 	};
// };

export const thunkCreateProject = (projectData: PROJECT_TYPE) => {
	return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
		const {
			title = '',
			content = ''
		} = projectData;
		const project = {title, content};
		
		const id = uuid();
		
		dispatch(
			createProject({
				id,
				...project,
			})
		)
	}
}