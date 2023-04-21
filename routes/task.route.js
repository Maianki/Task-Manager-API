const taskRoutes = require('express').Router();
const taskData = require('../db/tasks');
const bodyParser = require('body-parser');
// const path = require('path');

taskRoutes.use(bodyParser.urlencoded({ extended: false }));
taskRoutes.use(bodyParser.json());

taskRoutes.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Tasks returned successfully!',
        data: taskData,
    });
});

taskRoutes.get('/:taskId', (req, res) => {
    let allTasks = taskData;
    let { taskId } = req.params;
    let result = allTasks.find((val) => val.id == taskId);

    if (result) {
        return res.status(200).json({
            message: 'Tasks returned successfully!',
            data: result,
        });
    } else {
        return res.status(404).json({
            message: 'Tasks doesn"t exist!',
            statusCode: 404,
        });
    }
});

module.exports = taskRoutes;
