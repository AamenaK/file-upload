const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
//const userCtrl = require('./controllers/userCtrl');
//const userRepository = require('./repositories/userRepository');
//const userModel = require('./models/userModel');
const bodyParser = require('body-parser');
const config = require('./config/index');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(config.dbConStr)
    .then(res => console.log('Connected to mongodb'))
    .catch(res => console.log('failed to connect to db'));

app.use('/uploads', express.static('./uploads'));
app.use(bodyParser.json());

//app.use(defaultRouter);
app.use('/project/users', userRouter);