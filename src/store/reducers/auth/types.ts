// Action types:
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'

// Action interfaces:
interface LOGIN_SUCCESS_ACTION {
	type: typeof LOGIN_SUCCESS;
}

interface LOGIN_ERROR_ACTION {
	type: typeof LOGIN_ERROR;
	payload: Error;
}

interface SIGN_OUT_SUCCESS_ACTIONS {
	type: typeof SIGN_OUT_SUCCESS;
}

export type AUTH_ACTION_TYPES = LOGIN_SUCCESS_ACTION |
								LOGIN_ERROR_ACTION |
								SIGN_OUT_SUCCESS_ACTIONS

export interface CREDENTIAL_TYPE{
	email: string;
	password: string;
}

export interface AUTH_STATE {
	loggedIn: boolean;
	authError: Error | null;
}