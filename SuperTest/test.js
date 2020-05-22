var supertest = require('supertest');
// const expect = require('chai').expect;
var api = supertest('http://localhost:400/Route');


// describe('Homepage', function() {

// 	it('Hello', function(done){
// 		api.get('/')
// 		.expect(200)
// 		.expect("Hello user", done());
// 	});
// });


describe('Fetch user details', function(){

	it('User id', function(done){
		api.get('/id/:ID')
		.send({ID: 2})
		.set('Accept', 'application/json')
		.expect('Content-Type', '/json/')
		.expect(200)
		.end(function(err, res) {
			if(err)
				throw err
			console.log('Test Passed')
		}, done());
	});
});



// describe('Insert user details', function(){

// 	it('Insert data', function(done){
// 		api.post('/insert')
// 		.send({ID: 6, NAME: 'Monica', AGE: 30})
// 		.set('Accept', 'application/json')
// 		.expect('Content-Type', 'application/json/')
// 		.expect(200)
// 		.end(function(err, res){
// 			if(err)
// 				return err 

// 		},done());
// 	});
// });


// describe('Update user details', function(){

// 	it('Update data', function(done){
// 		api.put('/update')
// 		.send({ID: 6, NAME: 'Monica', AGE: 35})
// 		.set('Accept', 'application/json')
// 		.expect('Content-Type', 'application/json/')
// 		.expect(200)
// 		.end(function(err, res){
// 			if(err)
// 				return err 

// 		},done());
// 	});
// });


// describe('Delete user details', function(){

// 	it('Delete data', function(done){
// 		api.delete('/delete')
// 		.send({ID: 6})
// 		.set('Accept', 'application/json')
// 		.expect('Content-Type', 'application/json/')
// 		.expect(200)
// 		.end(function(err, res){
// 			if(err)
// 				return err 

// 		},done());
// 	});
// });