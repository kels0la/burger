var orm = require("../config/orm.js");

var burger = {
    all: callback => {
        orm.selectAll(res => {
            callback(res);
        });
    },
    addOne: (newBurger, callback) => {
        orm.insertOne(newBurger, res => {
            callback(res);
        });
    },
    devour: (id, callback) => {
        orm.updateOne(id, res => {
            callback(res);
        });
    }
};

module.exports = burger;