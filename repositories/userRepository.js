const { deleteOne } = require('../models/userModel');
const userModel = require('../models/userModel');

const add = (data) => {
    const user = new userModel(data);
    return user.save();
};

const getUsers = () => {
    const projection = { __v: 0, _id: 0, password: 0 };
    const filter = {};
    return userModel.find(filter, projection);
}

const getUser = (email) => {
    return userModel.findOne({ email }, {password: 1, email:1, role: 1, firstName: 1, lastName: 1});
}

const deleteUsers = (email) => {
    return userModel.deleteOne(email);
}

module.exports = {
    add, getUsers, getUser, deleteUsers
};