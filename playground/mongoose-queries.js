const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

//var id = '5a8807af9d2d6d4024955a64';
//if(!ObjectID.isValid(id)){
//	console.log('Id not valid')
//}

/*Todo.find({_id: id}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({_id: id}).then((todo) => {
	console.log('Todos', todo);
});

Todo.findById(id).then((todo) => {
	if(!todo){
		return console.log('Id not found!');
	}
	console.log('Todos By Id', todo);
}).catch((e) => console.log(e));*/

var id = '5a87c24241f413503349518a';

Users.findById(id).then((todo) => {
	if(!todo){
		return console.log('id wasnt found');
	}

	console.log('Todos by id', todo);
}).catch((e) => console.log(e));