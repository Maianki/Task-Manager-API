const taskRoutes = require('express').Router();
const bodyParser = require('body-parser');
const {
    fetchAllTasks,
    fetchTaskById,
    createNewTask,
    deleteIsTask,
    updateTaskById,
} = require('../controllers/task.controller');

taskRoutes.use(bodyParser.urlencoded({ extended: false }));
taskRoutes.use(bodyParser.json());

taskRoutes.get('/', fetchAllTasks);

taskRoutes.get('/:id', fetchTaskById);

taskRoutes.post('/', createNewTask);

taskRoutes.delete('/:id', deleteIsTask);

taskRoutes.put('/:id', updateTaskById);

module.exports = taskRoutes;
