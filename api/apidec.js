const index = require('../index');
const oracledb = require('oracledb');


const baseQuery = 
 `select REGION_ID "REGION_ID",
    REGION_NAME "REGION_NAME"
  from Regions`;

async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  if (context.REGION_ID) {
    binds.REGION_ID = context.REGION_ID;
 
    query += `\nwhere REGION_ID = :REGION_ID`;
  }
 
  const result = await index.simpleExecute(query, binds);
 
  return result.rows;
}


  module.exports.find = find;
