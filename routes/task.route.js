const taskRoutes = require('express').Router();
let taskData = require('../db/tasks');
const bodyParser = require('body-parser');

taskRoutes.use(bodyParser.urlencoded({ extended: false }));
taskRoutes.use(bodyParser.json());

taskRoutes.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Tasks returned successfully!',
        data: taskData,
    });
});

taskRoutes.get('/:id', (req, res) => {
    let allTasks = taskData;
    let { id } = req.params;
    let result = allTasks.find((val) => val.id == id);

    if (result) {
        return res.status(200).json({
            message: 'Tasks returned successfully!',
            data: result,
        });
    } else {
        return res.status(404).json({
            message: 'Task doesn"t exist!',
            statusCode: 404,
        });
    }
});

taskRoutes.post('/', (req, res) => {
    const task = req.body;
    taskData.push(task);
    // eslint-disable-next-line no-constant-condition
    if (2 === 2) {
        return res.status(201).json({
            message: 'Task created successfully!',
            statusCode: 201,
        });
    } else {
        return res.status(400).json({
            message: 'Bad request!',
            statusCode: 400,
        });
    }
});

taskRoutes.delete('/:id', (req, res) => {
    let allTasks = taskData;
    let { id } = req.params;
    let taskIndex = allTasks.findIndex((val) => val.id == id);
    if (taskIndex != -1) {
        allTasks.splice(taskIndex, 1);
        return res.status(200).json({
            message: 'Task deleted successfully!',
            statusCode: 200,
        });
    } else {
        return res.status(404).json({
            message: 'Task doesn"t exist!',
            statusCode: 404,
        });
    }
});

taskRoutes.put('/:id', (req, res) => {
    let allTasks = taskData;
    const { id } = req.params;
    const updatedTask = JSON.parse(JSON.stringify(req.body));

    let task = allTasks.find((val) => val.id == id);

    if (task) {
        // eslint-disable-next-line no-constant-condition
        if (true) {
            task = { ...task, ...updatedTask };
            taskData = allTasks.map((val) => (val.id == id ? task : val));
            return res.status(200).json({
                message: 'Task updated successfully!',
                data: task,
                statusCode: 200,
            });
        }
    } else {
        return res.status(404).json({
            message: 'Task doesn"t exist!',
            statusCode: 404,
        });
    }
});

module.exports = taskRoutes;
