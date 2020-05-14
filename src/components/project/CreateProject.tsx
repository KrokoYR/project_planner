import React, {ChangeEvent, FC, FormEvent, useState} from 'react';

// Types and actions:
import {PROJECT_TYPE} from "../../store/reducers/project/types";
import {thunkCreateProject} from "../../store/reducers/project/actions";

// Imports to handle mapDispatchToProps:
import {AppActions, AppState} from "../../store";
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

// Route protection:
import {Redirect, useHistory} from "react-router-dom";

// Firebase:

interface ProjectProps {
	thunkCreateProject: (project: PROJECT_TYPE) => void;
	uid: string;
}

const DumbComponent: FC<ProjectProps> = ({thunkCreateProject, uid}) => {
	
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	
	const history = useHistory()
	
	// Route protection:
	if (!uid) return (<Redirect to={'/sign-in'}/>);
	
	const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		if (e.target.id === "title") {
			setTitle(e.target.value)
		} else if (e.target.id === "content") {
			setContent(e.target.value)
		}
	}
	
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		thunkCreateProject({
			title: title,
			content: content
		})
		history.push('/')
	}
	
	return (
		<div className={'container'}>
			<form onSubmit={handleSubmit} className="white">
				<h5 className="grey-text text-darken-3">Create New Project</h5>
				
				<div className="input-field">
					<label htmlFor="title">Title</label>
					<input type="text" id={"title"} onChange={handleChange}/>
				</div>
				
				<div className="input-field">
					<label htmlFor="content">Project Content</label>
					<textarea className={'materialize-textarea'} id={'content'} onChange={handleChange}/>
				</div>
				
				<div className="input-field">
					<button className="btn ping lighten-1 z-depth-0">Create</button>
				</div>
			
			</form>
		</div>
	)
}

const mapStateToProps = (state: AppState) => {
	return {
		uid: state.firebase.auth.uid,
	}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => {
	return {
		thunkCreateProject: bindActionCreators(thunkCreateProject, dispatch)
	}
}

export const CreateProject = connect(mapStateToProps, mapDispatchToProps)(DumbComponent);