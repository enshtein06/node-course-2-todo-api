const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

//Todo.remove({}).then((res) => console.log(res));

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

//Todo.findByIdAndRemove('5a88345b2f8580607f8d58a4').then((res) => console.log(res));

