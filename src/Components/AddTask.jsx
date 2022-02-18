import React, { useEffect } from 'react';
import Button from './Button';

export default function AddTask(props){
	const { onCreate } = props;
	
	let taskName = '';

	function createTask(){
		if(taskName.trim().length === 0) return;
		return onCreate(taskName.trim());
	}

	function handleInput(event){
		taskName = event.target.value;
	}

	function handleKeydown(event){
		// Press the enter key
		if(event.which === 13) {
			taskName = event.target.value;
			createTask();
		}
	}

	useEffect(() => {
		document.querySelector('#taskInput').focus();
	});

	return (<div className="d-flex align-items-center justify-content-start">
		<input id="taskInput" onBlur={handleInput} onKeyDown={handleKeydown} className="input" placeholder="Task Details" />
		<Button onClick={createTask} className="ml-3">Create</Button>
	</div>);
}