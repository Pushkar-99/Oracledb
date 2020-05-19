const express = require('express');
const apidec = require('../api/apidec');
const multer = require('multer');
const router = express.Router();
const app = express();

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



function getEmployee(req) {

  const employee = {};

  employee.ID = req.body.ID;
  employee.NAME = req.body.NAME;
  employee.AGE = req.body.AGE;
  
 
  return employee;
}


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






router.put('/update',async(req, res, next) => {
  try {
    let employee = getEmployee(req);
 
    employee.ID = parseInt(req.params.ID, 10);
 
    employee = await apidec.update(employee);
 
    if (employee !== null) {
      res.json(employee);
    } else {
      res.status(404).end();
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

router.post('/file', upload.single('file'), (req, res) => {
  try {
    res.send(req.file);
  }catch(err) {
    res.send(400);
  }
});



 module.exports = router;