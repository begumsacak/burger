var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

//COPIED FROM PREVIOUS ACTIVITIES NEEDS TO BE UPDATED
var orm = {
    selectAll: function (tableInput, cbModel) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cbModel(result);
        });
    },
    create: function ( table, cols, vals, cbModel) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        console.log(queryString);
       var sqlstatement= connection.query(queryString, [table, cols[0], cols[1], vals[0], vals[1]], function (err, result) {
            if (err) throw err;
            cbModel(result);
        });
        console.log(sqlstatement.sql)
    },
    updateOne: function (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString =
            "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

        connection.query(
            queryString,
            [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;
