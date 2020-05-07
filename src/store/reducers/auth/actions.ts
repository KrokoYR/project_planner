import {Dispatch} from "redux";
import {
	AUTH_ACTION_TYPES,
	CREDENTIAL_TYPE,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	SIGN_OUT_ERROR,
	SIGN_OUT_SUCCESS
} from "./types";
import {AppState} from "../../index";
import {getFirebase} from "react-redux-firebase";

export const thunkSignIn = (credential: CREDENTIAL_TYPE) => {
	//{ getFirebase, getFirestore }
	return (dispatch: Dispatch<AUTH_ACTION_TYPES>, getState: () => AppState) => {
		const firebase = getFirebase();
		
		firebase.auth().signInWithEmailAndPassword(
			credential.email,
			credential.password
		).then(() => {
			dispatch({
				type: LOGIN_SUCCESS
			})
		}).catch((error: Error) => {
			dispatch({
				type: LOGIN_ERROR,
				payload: error
			})
		})
	}
}

export const thunkSingOut = () => {
	return (dispatch: Dispatch<AUTH_ACTION_TYPES>, getState: () => AppState) => {
		const firebase = getFirebase()
		
		firebase.auth().signOut()
			.then(() => {
				dispatch({
					type: SIGN_OUT_SUCCESS
				})
			})
			.catch((error: Error) => {
				dispatch({
					type: SIGN_OUT_ERROR,
					payload: error
				})
			})
	}
}