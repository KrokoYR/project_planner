// Action types:
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'

export const SIGN_UP_SUCCESS = 'SIGN_UP'
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR'

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

interface SIGN_UP_SUCCESS_ACTION {
	type: typeof SIGN_UP_SUCCESS;
}

interface SIGN_UP_ERROR_ACTION {
	type: typeof SIGN_UP_ERROR;
	payload: Error;
}

export type AUTH_ACTION_TYPES = LOGIN_SUCCESS_ACTION |
	LOGIN_ERROR_ACTION |
	SIGN_OUT_SUCCESS_ACTIONS |
	SIGN_UP_SUCCESS_ACTION |
	SIGN_UP_ERROR_ACTION

// Interface of inputs to LOGIN:
export interface CREDENTIAL_TYPE {
	email: string;
	password: string;
}

// Interface of inputs to SIGN_UP:
export interface NEW_USER_TYPE {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

// Auth state:
export interface AUTH_STATE {
	loggedIn: boolean;
	authError: Error | null;
}