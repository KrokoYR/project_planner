import React, {FC} from 'react';
import { Link } from 'react-router-dom';

import {SignedInLinks} from "./SignedInLinks";
import {SignedOutLinks} from "./SignedOutLinks";

// Imports for mapStateToProps:
import {AppState} from "../../store";
import {connect} from "react-redux";

interface Props {
	uid: string;
}

const DumbComponent: FC<Props> = ({uid}) => {
	
	// Dynamic changing of UI with accordance with auth state(logged in/out):
	let link =  uid ? <SignedInLinks/> : <SignedOutLinks/>
	
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
		uid: state.firebase.auth.uid,
	}
}

export const Navbar = connect(mapStateToProps)(DumbComponent);