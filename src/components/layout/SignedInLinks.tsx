import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {AppActions} from "../../store";
import {ThunkDispatch} from "redux-thunk";
import {bindActionCreators} from "redux";
import {thunkSingOut} from "../../store/reducers/auth/actions";
import {connect} from 'react-redux';

type Props = {
	thunkSignOut: () => void
}

const SignedInLinks: FC<Props> = ({thunkSignOut}) => {
	return (
		<ul className="right">
			<li>
				<NavLink to={'/create-project'}>New project</NavLink>
			</li>
			<li>
				<a href='#' onClick={thunkSignOut}>Log Out</a>
			</li>
			<li>
				<NavLink to={'/'} className={'btn btn-floating pink lighten-1'}>NN</NavLink>
			</li>
		</ul>
	)
}

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AppActions>
) => ({
	thunkSignOut: bindActionCreators(thunkSingOut, dispatch)
})

export default connect(null, mapDispatchToProps)(SignedInLinks);