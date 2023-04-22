
# TASK MANAGER API

These are APIs for task manager


## Run Locally

Clone the project

```bash
  git clone https://github.com/Maianki/Task-Manager-API.git
```

Go to the project directory

```bash
  cd task-manager-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon app.js
```


## API Reference

#### Get all tasks

```http
  GET /tasks
```

##### endpoint to fetch all tasks 

#### Get task by id

```http
  GET /tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of task to fetch |

#### Create a new task

```http
  POST /tasks
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **unique**. Id of task to be created |
| `title`      | `string` | **Required**. title of task to be created |
| `Description`      | `string` | **Required**. description of task to be created |
| `isCompleted`      | `boolean` | boolean flag for task to completion|


```http
  DELETE /tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of task to be deleted |

```http
  PUT /tasks/${id}
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of task to be updated |
| `title`      | `string` | Title of task to be created |
| `Description`      | `string` | Description of task to be updated |
| `isCompleted`      | `boolean` | boolean flag for task to completion|



