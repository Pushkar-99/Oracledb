const oracledb = require('oracledb');
const express = require('express');
// const router = express.Router();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apidec = require('./api/apidec');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

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
// finally
// {
// 	if (connection)
// 	{
// 	  try 
// 	  {
//         await connection.close();
// 	  } 
// 	  catch(err) 
// 	  {
//         console.log("Error when closing the database connection: ", err);
//       }
//     }
// }


//Bringing in the Routes
const route = require('./Router/routes');

//Using the routes
app.use('/Route', route);

// const file = require('./multer.js');

// app.use('/File', file);




function simpleExecute(statement, binds = [], opts = {}) {
  return new Promise(async (resolve, reject) => {
    let conn;
 
    opts.outFormat = oracledb.OBJECT;
    opts.autoCommit = true;
 
    try {
      // conn = await oracledb.getConnection();
 
      const result = await connection.execute(statement, binds, opts);
 
      resolve(result);
    } 
    catch (err) {
      reject(err);
    }
    //  finally 
    // {
    //   if (conn) { // conn assignment worked, need to close
    //     try {
    //       await conn.close();
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    // }
  });
}
 
module.exports.simpleExecute = simpleExecute;
// module.exports = index;

