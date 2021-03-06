import React, {ChangeEvent, FC, FormEvent, useState} from 'react';

// Imports for mapStateToProps:
import {AppActions, AppState} from "../../store";
import {connect} from "react-redux";

// Imports for mapDispatchToProps:
import {ThunkDispatch} from "redux-thunk";
import {bindActionCreators} from "redux";
import {thunkSignUp} from "../../store/reducers/auth/actions";
import {NEW_USER_TYPE} from "../../store/reducers/auth/types";

// Route protection:
import {Redirect} from 'react-router-dom';


type SignUpProps = {
	uid: string;
	thunkSignUp: (newUser: NEW_USER_TYPE) => void;
	authError: string;
}

const DumbComponent: FC<SignUpProps> = ({uid, thunkSignUp, authError}) => {
	// Component state:
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [lastName, setLastName] = useState('')
	const [firstName, setFirstName] = useState('')
	
	// Route protection:
	if (uid) return <Redirect to={'/'}/>
	
	// HTML ids for inputs:
	const EMAIL_ID = "email";
	const PASSWORD_ID = "password";
	const LAST_NAME_ID = "lastName";
	const FIRST_NAME_ID = "firstName";
	
	// Function to handle changing inputs:
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === EMAIL_ID) setEmail(e.target.value);
		else if (e.target.id === PASSWORD_ID) setPassword(e.target.value);
		else if (e.target.id === LAST_NAME_ID) setLastName(e.target.value);
		else if (e.target.id === FIRST_NAME_ID) setFirstName(e.target.value);
	}
	
	// Function to handle sending form:
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		thunkSignUp({
			email,
			password,
			firstName,
			lastName,
		})
	}
	
	return (
		<div className={'container'}>
			<form onSubmit={handleSubmit} className="white">
				<h5 className="grey-text text-darken-3">Sign Up</h5>
				
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="email" id={EMAIL_ID} onChange={handleChange}/>
				</div>
				
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input type="password" id={PASSWORD_ID} onChange={handleChange}/>
				</div>
				
				<div className="input-field">
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id={LAST_NAME_ID} onChange={handleChange}/>
				</div>
				
				<div className="input-field">
					<label htmlFor="firstName">First Name</label>
					<input type="text" id={FIRST_NAME_ID} onChange={handleChange}/>
				</div>
				
				<div className="input-field">
					<div className={'red-text center'}>
						<p>{authError}</p>
					</div>
					<button className="btn pink lighten-1 z-depth-0">Sign up</button>
				</div>
			
			</form>
		</div>
	)
}

const mapStateToProps = (state: AppState) => {
	return {
		uid: state.firebase.auth.uid,
		authError: state.auth.authError,
	}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => {
	return {
		thunkSignUp: bindActionCreators(thunkSignUp, dispatch),
	}
}

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(DumbComponent);