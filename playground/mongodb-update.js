const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to Mongodb server');
	}
	/*
	db.collection('Todos')
	.findOneAndUpdate({
		_id: new ObjectID('5a86f0282f8580607f8ca8cd')
	}, {
		$set: {
			completed: false
		}
	}, {
		returnOriginal: false
	})
	.then((res) => {
		console.log(res);
	})*/

	db.collection('Users')
	.findOneAndUpdate({
		_id: new ObjectID('5a86ee6f7ea62e2118f1037d')
	}, {
		$set: {
			name: 'Askhat'
		}, 
		$inc: {
			age: -1
		}
	}, {
		returnOriginal: false
	})
	.then((res) => {
		console.log(res);
	})
});