import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/auth/auth-reducer";
import {projectReducer} from "./reducers/project/project-reducer";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { PROJECT_ACTION_TYPES } from "./reducers/project/types";

const rootReducer = combineReducers({
	//auth: authReducer,
	project: projectReducer
})

export type AppState = ReturnType<typeof rootReducer>;
export type AppActions = PROJECT_ACTION_TYPES

export const configureStore = () => {
	const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))
	return store;
};