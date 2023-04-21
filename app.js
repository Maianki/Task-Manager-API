const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = express.Router();
const tasks = require('./routes/task.route');
const PORT = 3000;

app.use(cors());
app.use(routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes.use('/tasks', tasks);

app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening on port ${PORT}`);
});
