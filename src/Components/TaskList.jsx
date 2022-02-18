import React from 'react';
import Task from './Task';

export default function TaskList(props) {
	const { children, taskList, onRemove } = props;
	if(taskList.length === 0){ 
		return null;
	}

	function handleRemove(index){
		return onRemove(index);
	}

	return <div className="list-group mb-3">{taskList.map((task, index) => <Task task={task} index={index} onRemove={handleRemove} key={index}>{task}</Task>)}</div>
}