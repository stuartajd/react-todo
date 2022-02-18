import React, { useState, useEffect } from 'react';
import './App.css';

// Import components
import Logo from './Components/Logo';
import Header from './Components/Header';
import Button from './Components/Button';
import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask';

function App() {
	const [tasksList, setTasksList] = useState([]);
	const [isAddingTask, setIsAddingTask] = useState(false); 

	function saveToLocalStorage() {
		try {
			localStorage.setItem('tasklist', JSON.stringify(tasksList));
		} catch {}
	}

	function createNewTask(task) {
		// Add new task to the task list.
		setTasksList([...tasksList, task]);	
		saveToLocalStorage();
		toggleAddNewTask();
	}

	function removeTask(removeIndex){
		const taskListFiltered = tasksList.filter((task, index) => index !== removeIndex);
		setTasksList(taskListFiltered);
		saveToLocalStorage();
	}

	function toggleAddNewTask(toggleValue) {	
		setIsAddingTask(toggleValue || !isAddingTask);	
	}

	function handleKeyPress(event) {
		// Press N or press Enter
		const toggleNewTask = [78, 13];
		if(toggleNewTask.includes(event.which) && !isAddingTask) toggleAddNewTask(true);
	}

	useEffect(() => {
		// Mounted
		document.addEventListener('keydown', handleKeyPress);

		// Load the current task list from localStorage
		try {
			const localValues = localStorage.getItem('tasklist') || '';
			setTasksList(JSON.parse(localValues));
		} catch {}

		return () => {
			// Removed
			document.removeEventListener('keydown', handleKeyPress);
		}
	}, []);

  	return (
		<main>
			<div className="d-flex align-items-center justify-content-start">
				<Logo height="48px" width="48px" />
				<Header className="pl-3">Todo List</Header> 
			</div>

			<p>Hotkeys: Press N or Enter to open a new task input and Enter to store the task. Saving: Tasks list will automatically save but you can force save with the save tasklist button.</p>

			{tasksList.length === 0 && <p>You have no tasks, create your first task!</p> }
			{tasksList.length !== 0 && <p>You have {tasksList.length} tasks, when you're done just remove it!</p> }

			<TaskList taskList={tasksList} onRemove={removeTask}>You have no tasks, add a new one!</TaskList>

			{ isAddingTask && <AddTask onCreate={createNewTask} />}

			<div className="d-flex align-items-center justify-content-between">
				{ !isAddingTask && <Button onClick={toggleAddNewTask}>Add new task</Button> }
				{ !isAddingTask && <Button onClick={saveToLocalStorage}>Save tasklist</Button> }
			</div>
		</main>
	);
}

export default App;
