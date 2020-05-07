// Root reducer
import {combineReducers} from "redux";
import {projectReducer} from "./project/project-reducer";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";
import {authReducer} from "./auth/auth-reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	project: projectReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer
})

export {rootReducer}