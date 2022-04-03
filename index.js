const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const userCtrl = require('./controllers/userCtrl');
const userRepository = require('./repositories/userRepository');
const userModel = require('./models/userModel');
const bodyParser = require('body-parser');
const config = require('./config/index');

const app = express();
const PORT = 3000;

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb://localhost/3000')
    .then(res => console.log('Connected to mongodb'))
    .catch(res => console.log('failed to connect to db'));


app.use(bodyParser.json());

//app.use(defaultRouter);
app.use('/project/users', userRouter);