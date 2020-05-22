const express = require('express');
const apidec = require('../api/apidec');
const multer = require('multer');
const router = express.Router();
const app = express();

//Get API to fetch values from Database.
router.get('/id/:ID', async (req, res, next) => {
  try
  {
    const context = {};
 
    context.ID = req.params.ID;
 
    const rows = await apidec.find(context);
 
    if(req.params.ID) 
    {
      if(rows.length === 1) 
      {
        res.send(rows);
      } else 
      {
        res.send("Error");
      }
    } 
    else
    {
      res.send("Error");
    }
  } catch (err) {
    next(err);
  }
});



//Function to store body parameters
function getEmployee(req) {

  const employee = {};

  employee.ID = req.body.ID;
  employee.NAME = req.body.NAME;
  employee.AGE = req.body.AGE;
  
  return employee;
}

//Post API to insert values into Database.
router.post('/insert',async (req, res, next) => 
{

  try
  {
    let employees = getEmployee(req);
 
    const employee = await apidec.create(employees);
    
    res.send(employee);
  }
  catch (err)
  {
    next(err);
  }
});




//Put API to update values
router.put('/update',async(req, res, next) => {

  try {

    let employee = getEmployee(req);
  
    const employees = await apidec.update(employee);
 
    if (employees !== null) {
      res.json(employees);
    } else {
      res.send("Error");
    }
  } catch (err) {
    next(err);
  }
});



//Delete API to delete values
router.delete('/delete',async (req, res, next) => {
  try {

    let employee = req.body.ID;
 
    const success = await apidec.del(employee);
 
    if (success) {
      res.json(success);
    } else {
      res.send("Error");
    }
  } catch (err) {
    next(err);
  }
});
 





// To upload file on server
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

const upload = multer({storage: storage});

//Post API to upload file
router.post('/file', upload.single('file'), (req, res) => {
  try {
    res.send(req.file);
  }catch(err) {
    res.send(400);
  }
});



 module.exports = router;