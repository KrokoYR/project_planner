import React, {ChangeEvent, FC, FormEvent, useState} from 'react';

const SignIn: FC<any> =() => {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	// HTML ids for inputs:
	const EMAIL_ID = "email";
	const PASSWORD_ID = "password";
	
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(email, password);
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
				</div>
				
			</form>
		</div>
	)
}

export default SignIn;