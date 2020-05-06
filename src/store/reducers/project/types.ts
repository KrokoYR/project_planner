// Project type:
export type PROJECT_TYPE = {
	id: number;
	title: string;
	content: string;
	timestamp?: number
}

// Projects state:
export interface PROJECT_STATE {
	projects: Array<PROJECT_TYPE>
}

// Action types:
export const CREATE_PROJECT = "CREATE_PROJECT"

interface CREATE_PROJECT_ACTION {
	type: typeof CREATE_PROJECT
	payload: PROJECT_TYPE
	
}

export type PROJECT_ACTION_TYPES = CREATE_PROJECT_ACTION