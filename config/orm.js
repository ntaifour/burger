var connection = require("../config/connection.js");

var orm = { 
    // Begin selectAll() method
    selectAll : function(tableInput,queryResult) {
        connection.query("SELECT * FROM " + tableInput + ";", function(err, result) {
          if (err) throw err;
          console.log(result);
          queryResult(result);
        });
      }
    // End selectAll() method

    // Begin insertOne() method


    // End insertOne() method


    // Begin updateOne() method


    // End updateOne() method
}

module.exports = orm;
