import {CREATE_PROJECT, CREATE_PROJECT_ERROR, PROJECT_ACTION_TYPES, PROJECT_STATE} from "../project/types";

const initState: PROJECT_STATE = {
	projects: []
}

const projectReducer = (state = initState, action: PROJECT_ACTION_TYPES) => {
	switch (action.type) {
		case CREATE_PROJECT: {
			return {
				...state,
				projects: [...state.projects, action.payload]
			}
		}
		case CREATE_PROJECT_ERROR: {
			console.log('Create project error', action.payload)
			return state;
		}
		
		default :
			return state
	}
}

export {projectReducer};