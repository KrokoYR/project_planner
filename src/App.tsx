import React, {Component, FC} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Navbar component:
import {Navbar} from "./components/layout/Navbar";

// SingIn/SignOut components:
import {SignIn} from "./components/auth/SignIn";
import {SignUp} from './components/auth/SignUp';

// Components for projects:
import {CreateProject} from "./components/project/CreateProject";
import {ProjectDetails} from "./components/project/ProjectDetails";

// Dashboard component:
import {Dashboard} from './components/dashboard/Dashboard';

// Imports for mapStateToProps:
import {AppState} from "./store";
import {connect} from "react-redux";

// Firebase reducer to check auth IS READY or NOT
import {FirebaseReducer} from "react-redux-firebase";

interface AuthIsReady {
	auth: FirebaseReducer.AuthState;
}

const dumbComponent: FC<AuthIsReady> = ({auth}) => {
	let elem = (<div>Loading screen</div>)
	if(auth.isLoaded) elem = <App/>
	return elem
}

const mapStateToProps = (state: AppState) => {
	return {
		auth: state.firebase.auth,
	}
}
export const AuthIsLoaded = connect(mapStateToProps)(dumbComponent);

class App extends Component<any, any> {
	
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar/>
					<Switch>
						<Route exact path={'/'} component={Dashboard}/>
						<Route path={'/project/:id'} component={ProjectDetails}/>
						<Route path={'/sign-in'} component={SignIn}/>
						<Route path={'/sign-up'} component={SignUp}/>
						<Route path={'/create-project'} component={CreateProject}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export {App}
