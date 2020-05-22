const express = require('express');
const apidec = require('../api/apidec');
const multer = require('multer');
const router = express.Router();
const logger = require('./logger');
const app = express();

//Get API to fetch values from Database.
router.get('/id/:ID', async (req, res,next) => {
  try
  {
    const context = {};
 
    context.ID = req.params.ID;
 
    const rows = await apidec.find(context);
 
    if(req.params.ID) 
    {
      if(rows.length === 1) 
      {
        logger.log('info',"Employee data retrieved",rows);  // Logging request on console using winston
        res.send(rows);
      } 
      else 
      {
        logger.log('error',"Error while retrieving values");
        res.send("Error!!!");
      }
    } 
  
  } 
  catch (err) {
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
router.post('/insert',async (req, res,next) => 
{

  try
  {
    let employees = getEmployee(req);
 
    const employee = await apidec.create(employees);
    
    logger.log('info',"Data inserted",employee);
    res.send(employee);
  }
  catch (err)
  {
    logger.log('error',"Error while inserting data",err);
    next(err);
  }
});




//Put API to update values
router.put('/update',async(req, res, next) => {

  try {

    let employee = getEmployee(req);
  
    const employees = await apidec.update(employee);
 
    if (employees !== null) {
      logger.log('info',"Value updated successfully",employees);
      res.json(employees);
    } else {
      logger.log('error',"Error while updating data");
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
      logger.log('info',"Value deleted successfully",success);
      res.json(success);
    } else {
      logger.log('error',"Error while deleting data");
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
    logger.log('info',"File uploaded successfully");
    res.send(req.file);
  }catch(err) {
    logger.log('error',"Error while uploading file");
    res.send(400);
  }
});



 module.exports = router;