const index = require('../index');
const oracledb = require('oracledb');


//Get Information from database by providing ID as parameter. 
const selectValue = 
 `select ID "ID",
    NAME "NAME",
    AGE "AGE"
  from ABC`;

async function find(context) {
  let query = selectValue;
  const binds = {};
 
  if (context.ID) {
    binds.ID = context.ID;
 
    query += `\nwhere ID = :ID`;
  }
 
  const result = await index.Execute(query, binds);
 
  return result.rows;
}

  module.exports.find = find;



//Insert value into Database.
  const insertValue =
 `insert into ABC(
    ID,
    NAME,
    AGE
   )values (
    :ID,
    :NAME,
    :AGE
    )`;

  async function create(employee) {
    const emp = {};

    emp.ID = employee.ID;
    emp.NAME = employee.NAME;
    emp.AGE = employee.AGE;
 

    const result1 = await index.Execute(insertValue, emp);
    
    return emp;
  }

  module.exports.create = create;



//Update Database values
  const updateValue=
 `update ABC
   set NAME = :NAME,
    AGE = :AGE
  where ID = :ID`;
 
async function update(emp) {
  const employee = {};

    employee.ID = emp.ID;
    employee.NAME = emp.NAME;
    employee.AGE = emp.AGE;

  const result = await index.Execute(updateValue, employee);
 
  if (result.rowsAffected && result.rowsAffected === 1) {
    return employee;
  } else {
    return null;
  }
}
 
module.exports.update = update;



//Delete values from Database
const deleteValue =
 `delete from ABC
  where ID = :ID`;
 

async function del(employee) {
  let emp = {};

  emp.ID = employee;

  const result = await index.Execute(deleteValue, emp);
 
  return result;
}
 
module.exports.del = del;