import './App.css';
import React, { useEffect, useState } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from './api'; 
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Fetch tasks from API on component mount
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const { data } = await getTasks();
                setTasks(data);  // Assuming 'data' contains an array of tasks
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
        fetchTasks();
    }, []); 
    // Handle adding a task
    const handleAdd = async (task) => {
        try {
            const { data } = await addTask(task);  // Assuming addTask returns task data
            setTasks([...tasks, data]);  // Add new task to the list
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    // Handle updating a task
    const handleUpdate = async (id, updates) => {
        try {
            const { data } = await updateTask(id, updates);
            setTasks(tasks.map((task) => (task.id === id ? data : task)));
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    // Handle deleting a task
    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter((task) => task.id !== id));  // Remove task from list
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div className="App">
            <h1>TaskMaster</h1>
            <AddTask onAdd={handleAdd} />
            <TaskList tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
        </div>
    );
};

export default App;

