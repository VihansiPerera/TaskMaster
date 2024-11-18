import React from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
        <button onClick={() => onUpdate(task.id, { completed: !task.completed })}>
            {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
);

export default TaskItem;
