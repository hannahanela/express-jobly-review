"use strict";

const { BadRequestError } = require("../expressError");

/**
 * Helper function for selectively updating data.
 * 
 * Takes user inputs and corresponding SQL columns, and generates an object of
 *   DML and updated values.
 * 
 * @param dataToUpdate { Object } { numEmployees: 2, logoUrl: "url" }
 * @param jsToSql { Object } maps JS key names to SQL column names like
 *      { numEmployees: "num_employees", logoUrl: "logo_url" }
 * @returns {Object} { setCols, values } where setCols is joined DML and values
 *      is an array of user inputs like [2, "url"]
 */

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
