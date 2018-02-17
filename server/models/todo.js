var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {Todo};


//EXPAMPLES
//var newTodo = new Todo({text: 'Something to do'});
/*({
	text: 'Cook dinner'
});

newTodo.save().then((doc) => {
	console.log('Saved todo', doc)
}, (e) => {
	console.log("Unable to save Todo")
});
*/


/*
var newUser = new Users({
	email: 'enshtein06@gmail.com',
	password: ''
})

newUser.save().then((doc) => {
	console.log("Saved user", newUser);
}, (e) => {
	console.log('Unable to save user cuz', e);
});

newTodo.save().then((doc) => {
	console.log('Saved todo', doc)
}, (e) => {
	console.log("Unable to save Todo")
});
*/