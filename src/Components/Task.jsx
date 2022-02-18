import React from 'react';

export default function Task(props){
	const { task, index, children, onRemove } = props;

	function handleRemove(){
		return onRemove(index);
	}
	
	return (
		<div className="list-group-item d-flex align-items-center justify-content-between">
			<div>{children}</div>
			<div onClick={handleRemove}>Remove</div>
		</div>
	);
}