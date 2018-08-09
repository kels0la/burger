var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function() {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function() {

    },
    updateOne: function() {
        
    }

}

module.exports = orm;