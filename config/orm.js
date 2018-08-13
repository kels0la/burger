const connection = require("../config/connection.js");

const orm = {
    selectAll: (callback) => { 
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: (newBurger, callback) => {
        let queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [newBurger], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: (id, callback) => {
        let queryString = "UPDATE burgers SET devoured=1 WHERE id=?";
        connection.query(queryString, [id], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = orm;