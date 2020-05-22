var supertest = require('supertest');
var api = supertest('http://localhost:400/Route');


//SuperTest script to get data from database. 
describe('Fetch user details', function(){

	it('User id', function(done){
		api.get('/id/3')
		.set('Accept', 'application/json')
		.expect('Content-Type', 'application/json; charset=utf-8')
		.expect(200)
		.end(function(err, res) {
			if(err)
				throw err
			console.log('Test Passed')
		}, done());
	});
});


//SuperTest script to insert data.
describe('Insert user details', function(){

	it('Insert data', function(done){
		api.post('/insert')
		.send({ID: 7, NAME: 'Bob', AGE: 60})
		.set('Accept', 'application/json')
		.expect('Content-Type', 'application/json/')
		.expect(200)
		.end(function(err, res){
			if(err)
				return err 

		},done());
	});
});

//SuperTest script to update data.
describe('Update user details', function(){

	it('Update data', function(done){
		api.put('/update')
		.send({ID: 4, NAME: 'Marlo', AGE: 30})
		.set('Accept', 'application/json')
		.expect('Content-Type', 'application/json/')
		.expect(200)
		.end(function(err, res){
			if(err)
				return err 

		},done());
	});
});

//SuperTest script to delete data. 
describe('Delete user details', function(){

	it('Delete data', function(done){
		api.delete('/delete')
		.send({ID: 5})
		.set('Accept', 'application/json')
		.expect('Content-Type', 'application/json/')
		.expect(200)
		.end(function(err, res){
			if(err)
				return err 

		},done());
	});
});