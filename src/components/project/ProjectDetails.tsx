import React from 'react';

const ProjectDetails = (props:any) => {
	const id = props.match.params.id
	return (
		<div>
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">
							Project Title - {id}
						</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem deleniti doloremque dolorum fugit illo inventore laudantium minus, nam necessitatibus quis repudiandae saepe sed sit soluta suscipit vel? Esse, recusandae? Animi assumenda corporis cumque ex exercitationem itaque necessitatibus, porro quasi quis, recusandae sed unde! Aliquam at consequuntur dolore dolorum enim laudantium molestiae sapiente. Corporis ducimus, earum eos labore rem vel.
						</p>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div>Posted by Lopson</div>
						<div>2nd September, 2am</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails;