import React, {ChangeEvent, FC, FormEvent, useState} from 'react';

const SignUp: FC<any> = () => {
	
	// Component state:
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [lastName, setLastName] = useState('')
	const [firstName, setFirstName] = useState('')
	
	// HTML ids for inputs:
	const EMAIL_ID = "email";
	const PASSWORD_ID = "password";
	const LAST_NAME_ID = "lastName";
	const FIRST_NAME_ID = "firstName";
	
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if(e.target.id === EMAIL_ID) setEmail(e.target.value);
		else if(e.target.id === PASSWORD_ID) setPassword(e.target.value);
		else if(e.target.id === LAST_NAME_ID) setLastName(e.target.value);
		else if(e.target.id === FIRST_NAME_ID) setFirstName(e.target.value);
	}
	
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(email, password, lastName, firstName);
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
					<button className="btn ping lighten-1 z-depth-0">Sign up</button>
				</div>
			
			</form>
		</div>
	)
}

export default SignUp;