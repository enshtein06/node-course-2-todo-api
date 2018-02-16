//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to Mongodb server');
	}

/*	db.collection('Todos')
	.find({_id: new ObjectID("5a86f0282f8580607f8ca8cd")})
	.toArray().then((docs) =>{
		console.log('TODOS');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) =>{
		console.log('Unable to fetch todos', err);
	})
*/
	//console.log('connected to Mongodb server');
	//db.close();

		db.collection('Users')
		.find({name: 'Askhat'})
		.count()
		.then((count) =>{
			console.log(`Users count: ${count}`);
		}, (err) =>{
			console.log('Unable to fetch todos', err);
		});
});