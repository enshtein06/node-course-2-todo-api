const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to Mongodb server');
	}

	//delete Many
	/*db.collection('Todos')
	.deleteMany({text: 'Eat lunch'})
	.then((result) => {
		console.log(result);
	});*/

	//delete One
	/*db.collection('Todos')
	.deleteOne({text: 'Eat lunch'})
	.then((result) => {
		console.log(result);
	})*/

	//Find one and delete
	/*db.collection('Todos')
	.findOneAndDelete({completed: false})
	.then((res) => {
		console.log(res);
	})*/

	//db.close



	/*
	db.collection("Users")
	.deleteMany({name: 'Askhat'})
	.then((res) => {
		console.log(res);
	})
	*/
	/*
	db.collection('Users')
	.findOneAndDelete({location: "HELL"})
	.then((res) => {
		console.log(res);
	})*/

	db.collection("Users")
	.deleteOne({_id: new ObjectID("5a86ed3f628022399c68b58a")})
	.then((res) => {
		console.log(res);
	})
});