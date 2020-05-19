const index = require('../index');
const oracledb = require('oracledb');


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
 
  const result = await index.simpleExecute(query, binds);
 
  return result.rows;
}

  module.exports.find = find;




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
 
    // emp.ID = {
    //   dir: oracledb.BIND_OUT,
    //  type: oracledb.NUMBER
    // }

    const result1 = await index.simpleExecute(insertValue, emp);
    // emp.ID = result1.outBinds.ID[0];

    return emp;
  }

  module.exports.create = create;




  const updateValue=
 `update ABC
   set NAME = :NAME,
    AGE = :AGE
  where ID = :ID`;
 
async function update(emp) {
  const employee = Object.assign({}, emp);
  const result = await index.simpleExecute(updateValue, employee);
 
  if (result.rowsAffected && result.rowsAffected === 1) {
    return employee;
  } else {
    return null;
  }
}
 
module.exports.update = update;
