import React, { useEffect, useState } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from './api';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const { data } = await getTasks();
        setTasks(data);
    };

    const handleAdd = async (task) => {
        const { data } = await addTask(task);
        setTasks([...tasks, data]);
    };

    const handleUpdate = async (id, updates) => {
        const { data } = await updateTask(id, updates);
        setTasks(tasks.map((task) => (task.id === id ? data : task)));
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <h1>TaskMaster</h1>
            <AddTask onAdd={handleAdd} />
            <TaskList tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
        </div>
    );
};

export default App;
