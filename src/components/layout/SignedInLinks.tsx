import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

// Import for mapDispatchToProps:
import {AppActions, AppState} from "../../store";
import {ThunkDispatch} from "redux-thunk";
import {bindActionCreators} from "redux";
import {thunkSignOut} from "../../store/reducers/auth/actions";
import {connect} from 'react-redux';

type Props = {
	profile: any;
	thunkSignOut: () => void;
}

const DumbComponent: FC<Props> = ({thunkSignOut, profile}) => {
	return (
		<ul className="right">
			<li>
				<NavLink to={'/create-project'}>New project</NavLink>
			</li>
			<li>
				<a href='#' onClick={thunkSignOut}>Log Out</a>
			</li>
			<li>
				<NavLink to={'/'} className={'btn btn-floating pink lighten-1'}>{profile.initials}</NavLink>
			</li>
		</ul>
	)
}

const mapStateToProps = (state: AppState) => {
	return {
		profile: state.firebase.profile,
	}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => {
	return {
		thunkSignOut: bindActionCreators(thunkSignOut, dispatch)
	}
};

export const SignedInLinks = connect(mapStateToProps, mapDispatchToProps)(DumbComponent);