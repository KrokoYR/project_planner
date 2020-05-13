import React, {Component, FC, ReactElement, ReactNode} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import ProjectDetails from "./components/project/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from './components/auth/SignUp';
import {CreateProjectContainer} from "./components/project/CreateProject";
import Dashboard from './components/dashboard/Dashboard';
import {FirebaseReducer, getFirebase, isLoaded} from "react-redux-firebase";
import {connect} from "react-redux";
import {AppState} from "./store";

interface AuthIsReady {
	auth: FirebaseReducer.AuthState
}

const dumbComponent: FC<AuthIsReady> = ({auth}) => {
	
	let elem = (<div>Loading screen</div>)
	if(auth.isLoaded) elem = <App/>
	return elem
}

const mapStateToProps = (state: AppState) => {
	return {
		auth: state.firebase.auth
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
						<Route path={'/create-project'} component={CreateProjectContainer}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
