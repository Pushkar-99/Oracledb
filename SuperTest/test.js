// var supertest = require('supertest');
// const expect = require('chai').expect;
// var api = supertest('http://localhost:400/Route');


// describe('Homepage', function() {

// 	it('Hello', function(done){
// 		api.get('/')
// 		.expect(200)
// 		.expect("Hello user", done());
// 	});
// });


// describe('Get user details', function(){

// 	it('User id', function(done){
// 		api.get('/id/:ID')
// 		.set('Accept', 'application/json')
// 		.expect('Content-Type', 'application/json/')
// 		.expect(200)
// 		.then((res) => {
// 			expect(res.params.ID).to.be.a('array');
// 			console.log(res.params.ID);
			
// 		}, done())
// 		.catch((err) =>  {
// 			expect("Error");
// 		});
// 	});
// });



// describe('Insert user details', function(){

// 	it('Insert data of user', function(done){
// 		// supertest(app)
// 		api.get('/insert')
// 		.set('Accept', 'application/json')
// 		.expect('Content-Type', 'application/json/')
// 		.expect(200)
// 		.then((res) => {
// 			expect(res.body).to.be.a('array');
// 			console.log(res.body);
			
// 		}, done())
// 		.catch((err) =>  {
// 			expect("Error");
// 		})
// 	});
// });