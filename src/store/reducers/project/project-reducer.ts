import {CREATE_PROJECT, PROJECT_ACTION_TYPES, PROJECT_STATE} from "../project/types";

const initState: PROJECT_STATE = {
	projects: [
		{id: 1, title: "Help me find peach", content: "blah blah blah"},
		{id: 2, title: "Help me find apple", content: "blah blah blah"},
		{id: 3, title: "Help me find banana", content: "blah blah blah"},
	]
}

const projectReducer = (state = initState, action:PROJECT_ACTION_TYPES) => {
	switch (action.type) {
		case CREATE_PROJECT: {
			return {
				...state,
				projects: [...state.projects, action.payload]
			}
		}
	}
	return state;
}

export {projectReducer};