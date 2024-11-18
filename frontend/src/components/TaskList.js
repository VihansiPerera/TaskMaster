import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate, onDelete }) => (
    <ul>
        {tasks.map((task) => (
            <TaskItem
                key={task.id}
                task={task}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />
        ))}
    </ul>
);

export default TaskList;
