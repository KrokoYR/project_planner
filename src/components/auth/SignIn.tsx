import React, {ChangeEvent, FC, FormEvent, useState} from 'react';

// Imports for mapDispatchToProps:
import {ThunkDispatch} from 'redux-thunk';
import {AppActions, AppState} from "../../store";
import {CREDENTIAL_TYPE} from "../../store/reducers/auth/types";
import {bindActionCreators} from "redux";
import {thunkSignIn} from '../../store/reducers/auth/actions';

// Connect maps to component:
import {connect} from 'react-redux';

// Route protection:
import {Redirect} from 'react-router-dom';

type SignInProps = {
	thunkSignIn: (credential: CREDENTIAL_TYPE) => void;
	uid: string;
	authError: string;
}

const DumbComponent: FC<SignInProps> = ({thunkSignIn, uid,authError}) => {
	
	// Component's state:
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	// Route protection:
	if (uid) return (<Redirect to={'/'}/>)
	
	// HTML ids for inputs:
	const EMAIL_ID = "email";
	const PASSWORD_ID = "password";
	
	// Function to handle changing inputs:
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === EMAIL_ID) setEmail(e.target.value);
		else if (e.target.id === PASSWORD_ID) setPassword(e.target.value);
	}
	
	// Function to handle sending form:
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(email, password);
		thunkSignIn({
			email,
			password
		})
	}
	
	return (
		<div className={'container'}>
			<form onSubmit={handleSubmit} className="white">
				<h5 className="grey-text text-darken-3">Sign In</h5>
				
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="email" id={EMAIL_ID} onChange={handleChange}/>
				</div>
				
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input type="password" id={PASSWORD_ID} onChange={handleChange}/>
				</div>
				
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Login</button>
					<div className="red-text center">
						{authError ? <p>{authError}</p> : null}
					</div>
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

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AppActions>
) => ({
	thunkSignIn: bindActionCreators(thunkSignIn, dispatch),
})

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(DumbComponent);