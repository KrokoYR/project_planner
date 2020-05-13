import {Dispatch} from "redux";
import {
	AUTH_ACTION_TYPES,
	CREDENTIAL_TYPE,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	NEW_USER_TYPE,
	SIGN_OUT_SUCCESS,
	SIGN_UP_ERROR,
	SIGN_UP_SUCCESS,
} from "./types";
// Import state:
import {AppState} from "../../index";
// Get firebase:
import {getFirebase} from "react-redux-firebase";
import {getFirestore} from "redux-firestore";
import {firebase} from '../../../index'

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

// Thunk to SignOut:
export const thunkSignOut = () => {
	return (dispatch: Dispatch<AUTH_ACTION_TYPES>, getState: () => AppState) => {
		const firebase = getFirebase()
		
		firebase.auth().signOut()
			.then(() => {
				dispatch({
					type: SIGN_OUT_SUCCESS
				})
			})
	}
}

// Thunk to SignUp:
export const thunkSignUp = (newUser: NEW_USER_TYPE) => {
	return (dispatch: Dispatch<AUTH_ACTION_TYPES>, getState: () => AppState) => {
		const firestore = getFirestore(firebase);
		const Firebase = getFirebase();
		
		Firebase.auth().createUserWithEmailAndPassword(
			newUser.email,
			newUser.password
		).then((response) => {
			return firestore.collection('users').doc(response.user?.uid).set({
				firstName: newUser.firstName,
				lastName: newUser.lastName,
				initials: newUser.firstName[0] + newUser.lastName[0],
			})
		}).then(() => {
			dispatch({
				type: SIGN_UP_SUCCESS,
			})
		}).catch(err => {
			dispatch({
				type: SIGN_UP_ERROR,
				payload: err,
			})
		})
	}
}