const express = require('express');
const apidec = require('../api/apidec');
const router = express.Router();
const app = express();

router.get('/id/:REGION_ID', async (req, res, next) => {
  try
  {
    const context = {};
 
    context.REGION_ID = req.params.REGION_ID;
 
    const rows = await apidec.find(context);
 
    if (req.params.REGION_ID) 
    {
      if (rows) 
      {
        res.send(rows);
      } else 
      {
        res.send("Error");
      }
    } 
    else
    {
      res.send("No input found");
    }
  } catch (err) {
    next(err);
  }
});


module.exports = router;

