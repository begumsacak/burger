// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//COPIED FROM PREVIOUS ACTIVITIES NEEDS TO BE UPDATED
var burgers = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (cols, vals, cb) {
    orm.update("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  delete: function (cols, vals, cb) {
    orm.delete("burgers", cols, vals, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;
