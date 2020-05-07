import React from 'react';
import { NavLink } from 'react-router-dom';
import {AppActions} from "../../store";
import {ThunkDispatch} from "redux-thunk";
import {bindActionCreators} from "redux";
import {thunkSingOut} from "../../store/reducers/auth/actions";
import { connect } from 'react-redux';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to={'/create-project'}>New project</NavLink>
            </li>
            <li>
                <NavLink to={'/'}>Log Out</NavLink>
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