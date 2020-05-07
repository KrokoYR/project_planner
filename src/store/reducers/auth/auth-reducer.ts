import {
	AUTH_ACTION_TYPES,
	AUTH_STATE,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	SIGN_OUT_SUCCESS
} from "./types";

const initState: AUTH_STATE = {
	loggedIn: false,
	authError: null
}

const authReducer = (state = initState, action: AUTH_ACTION_TYPES) => {
	switch (action.type) {
		case LOGIN_ERROR: {
			console.log('login error', action.payload)
			return {
				...state,
				loggedIn: false,
				authError: action.payload
			}
		}
		case LOGIN_SUCCESS: {
			console.log("login success")
			return {
				...state,
				loggedIn: true,
				authError: null
			}
		}
		case SIGN_OUT_SUCCESS: {
			console.log("Sign out success")
			return {
				...state,
				loggedIn: false,
			}
		}
		
		default:
			return state;
	}
}

export {authReducer};