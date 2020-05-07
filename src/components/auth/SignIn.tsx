import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import { ThunkDispatch } from 'redux-thunk';
import {AppActions, AppState} from "../../store";
import {CREDENTIAL_TYPE} from "../../store/reducers/auth/types";
import {bindActionCreators} from "redux";
import { thunkSignIn } from '../../store/reducers/auth/actions';
import { connect } from 'react-redux';

type SignInProps = {
	authError: Error | null;
	thunkSignIn: (credential: CREDENTIAL_TYPE) => void;
}

const SignIn: FC<SignInProps> =({thunkSignIn, authError}) => {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	// HTML ids for inputs:
	const EMAIL_ID = "email";
	const PASSWORD_ID = "password";
	
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(email, password);
		thunkSignIn({
			email,
			password
		})
	}
	
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === EMAIL_ID) setEmail(e.target.value);
		else if(e.target.id === PASSWORD_ID) setPassword(e.target.value);
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
					<button className="btn ping lighten-1 z-depth-0">Login</button>
					<div className="red-text center">
						{authError ? <p>{authError.message}</p>: null}
					</div>
				</div>
				
			</form>
		</div>
	)
}

const mapStateToProps = (state: AppState) => ({
	authError: state.auth.authError
})

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AppActions>
) => ({
	thunkSignIn: bindActionCreators(thunkSignIn, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);