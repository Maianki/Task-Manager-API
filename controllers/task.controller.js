const validator = require('../utils/task.validation');
let taskData = require('../db/tasks');

const fetchAllTasks = (req, res) => {
    return res.status(200).json({
        message: 'Tasks returned successfully!',
        data: taskData,
        statusCode: 200,
    });
};

const fetchTaskById = (req, res) => {
    let allTasks = taskData;
    let { id } = req.params;
    let result = allTasks.find((val) => val.id == id);

    if (result) {
        return res.status(200).json({
            message: 'Task returned successfully!',
            data: result,
            statusCode: 200,
        });
    } else {
        return res.status(404).json({
            message: 'Task doesn"t exist!',
            statusCode: 404,
        });
    }
};

const deleteIsTask = (req, res) => {
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
};

const createNewTask = (req, res) => {
    const task = req.body;

    if (validator.validateTaskInfo(task, taskData).statusCode === 201) {
        taskData.push(task);
        return res.status(201).json({
            statusCode: 201,
            message: 'Task created successfully!',
        });
    } else {
        return res
            .status(validator.validateTaskInfo(task, taskData).statusCode)
            .json(validator.validateTaskInfo(task, taskData));
    }
};

const updateTaskById = (req, res) => {
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
};

module.exports = {
    fetchAllTasks,
    fetchTaskById,
    createNewTask,
    deleteIsTask,
    updateTaskById,
};
