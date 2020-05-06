import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import ProjectDetails from "./components/project/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from './components/auth/SignUp';
import { CreateProjectContainer } from "./components/project/CreateProject";
import { DashboardContainer } from './components/dashboard/Dashboard';


class App extends Component<any, any>{
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar/>
					<Switch>
						<Route exact path={'/'} component={DashboardContainer}/>
						<Route path={'/project/:id'} component={ProjectDetails}/>
						<Route path={'/sign-in'} component={SignIn} />
						<Route path={'/sign-up'} component={SignUp} />
						<Route path={'/create-project'} component={CreateProjectContainer}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
