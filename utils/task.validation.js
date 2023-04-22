/* eslint-disable no-prototype-builtins */
class validator {
    static validateTaskInfo(task, taskData) {
        if (
            task.hasOwnProperty('id') &&
            task.hasOwnProperty('title') &&
            task.hasOwnProperty('description') &&
            task.hasOwnProperty('isCompleted') &&
            this.validateUniqueTaskId(task, taskData)
        ) {
            if (task.description === '') {
                return {
                    statusCode: 400,
                    message: 'Task description cannot be empty!',
                };
            }

            if (task.title === '') {
                return {
                    statusCode: 400,
                    message: 'Task title cannot be empty!',
                };
            }

            if (typeof task.isCompleted !== 'boolean') {
                return {
                    statusCode: 400,
                    message: 'isCompleted has to be a boolean value!',
                };
            }

            return {
                statusCode: 201,
                message: 'Task created successfully!',
            };
        }

        if (!this.validateUniqueTaskId(task, taskData)) {
            return {
                statusCode: 409,
                message: 'Task id has to be unique',
            };
        }
        return {
            statusCode: 400,
            message: 'Task Info is malformed please provide all the properties',
        };
    }

    static validateUniqueTaskId(task, taskData) {
        let result = taskData.find((val) => val.id == task.id);
        if (result) return false;
        return true;
    }
}

module.exports = validator;
