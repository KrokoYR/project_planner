import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from "react-redux";
import {AppState} from "../../store";

import {FirebaseReducer} from "react-redux-firebase";

interface Props {
	auth: FirebaseReducer.AuthState
}

const Navbar: FC<Props> = ({auth}) => {
	
	const loaded = auth.isLoaded
	console.log(loaded);
	let link =  auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
	
	return (
        <nav className={'nav-wrapper grey darken-3'}>
	       <div className={'container'}>
		       <Link to={'/'} className={'brand-logo'}>Planner</Link>
		       {link}
	       </div>
        </nav>
    )
}

const mapStateToProps = (state: AppState) => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(Navbar);