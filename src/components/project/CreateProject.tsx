import React, {ChangeEvent, Dispatch, FC, FormEvent, useState} from 'react';
import {connect} from 'react-redux';
import {PROJECT_TYPE} from "../../store/reducers/project/types";
import {thunkCreateProject} from "../../store/reducers/project/actions";
import {AppActions, AppState} from "../../store";
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from "redux";

interface ProjectProps {
	thunkCreateProject: (project: PROJECT_TYPE) => void
}

const CreateProject: FC<ProjectProps> = ({thunkCreateProject}) => {
	
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	
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
			id: 20,
			title: title,
			content: content
		})
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

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AppActions>,
	ownProps: ProjectProps
): ProjectProps => ({
	thunkCreateProject: bindActionCreators(thunkCreateProject, dispatch)
})

const CreateProjectContainer = connect(null, mapDispatchToProps)(CreateProject);
export {CreateProjectContainer};