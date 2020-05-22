const oracledb = require('oracledb');
const express = require('express');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const apidec = require('./api/apidec');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//To log incoming requests using Morgan
// app.use(morgan('dev'));


//Server Listening to Port 400
app.listen(400, (err) =>
{
	if(err)
	{
		console.log(err)
	}
	console.log("Listening to port 400");	
});


app.get('/', (req,res) => {
	res.json("Hello World");
});



// Database Connection
let connection;
const server = (async() => {
try
{
   connection = await oracledb.getConnection({
        user : 'hr',
        password : 'hr',
        connectString : 'localhost/pdborcl'
   });
   console.log("Successfully connected to Oracle");
} 
catch(err)
{
	console.log("Error: ", err);
}
})()



//Bringing in the Routes
const route = require('./Router/routes');

//Using the routes
app.use('/Route', route);



//Function to Execute Sql Queries
function Execute(statement, binds = [], opts = {}) {
  return new Promise(async (resolve, reject) => {
 
    opts.outFormat = oracledb.OBJECT;
    opts.autoCommit = true;
 
    try {
 
      const result = await connection.execute(statement, binds, opts);
 
      resolve(result);
    } 
    catch (err) {
      reject(err);
    }

  });
}
 
module.exports.Execute = Execute;



