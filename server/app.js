require('dotenv').config()
const express = require('express');
const UserController = require('./controllers/UserController');
const Controller = require('./controllers/controller');
const authentication = require('./middlewares/authentication');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/register', UserController.register);
app.post('/login', UserController.login);

app.use(authentication)
app.get('/joblist', Controller.getJobList);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});