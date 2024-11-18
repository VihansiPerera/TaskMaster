const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// In-memory storage
let tasks = [];
let taskId = 1;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
    const newTask = { id: taskId++, title: req.body.title, completed: false };
    tasks.push(newTask);
    res.json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    if (task) {
        task.completed = req.body.completed;
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
    res.json({ message: 'Task deleted' });
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
