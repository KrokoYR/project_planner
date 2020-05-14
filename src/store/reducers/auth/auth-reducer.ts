import {
	AUTH_ACTION_TYPES,
	AUTH_STATE,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	SIGN_OUT_SUCCESS,
	SIGN_UP_SUCCESS,
	SIGN_UP_ERROR
} from "./types";

const initState: AUTH_STATE = {
	loggedIn: false,
	authError: '',
}

const authReducer = (
	state = initState,
	action: AUTH_ACTION_TYPES
) => {
	switch (action.type) {
		
		case LOGIN_ERROR: {
			console.log('login error', action.payload)
			return {
				...state,
				loggedIn: false,
				authError: action.payload.message
			}
		}
		
		case LOGIN_SUCCESS: {
			console.log("login success")
			return {
				...state,
				loggedIn: true,
				authError: '',
			}
		}
		
		case SIGN_OUT_SUCCESS: {
			console.log("Sign out success")
			return {
				...state,
				loggedIn: false,
			}
		}
		
		case SIGN_UP_ERROR: {
			console.log("Sign up error: ", action.payload)
			return {
				...state,
				authError: action.payload.message,
			}
		}
		
		case SIGN_UP_SUCCESS: {
			console.log("Sign up success")
			return {
				...state,
				authError: '',
			}
		}
		
		default:
			return state;
	}
}

export {authReducer};