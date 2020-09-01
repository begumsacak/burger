var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
    selectAll: function (tableInput, cbModel) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cbModel(result);
        });
    },
    create: function (table, cols, vals, cbModel) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        console.log(queryString);
        var sqlstatement = connection.query(queryString, [table, cols[0], cols[1], vals[0], vals[1]], function (err, result) {
            if (err) throw err;
            cbModel(result);
        });
        console.log(sqlstatement.sql)
    },
    update: function (table, cols, vals, cbModel) {


        var statement = connection.query(
            "update ?? set ?? = ? where ?? = ?",
            [table, cols[0], vals[0], cols[1], vals[1]],
            function (err, result) {
                if (err) throw err;
                console.log(result);
                cbModel(result)
            }
        );
        console.log(statement.sql)
    },
    delete: function (table, cols, vals, cbModel) {
        console.log(cols, vals)
        var statement = connection.query(
            "DELETE FROM ?? where ?? = ?",
            (table, cols, vals),
            function (err, result) {
                if (err) throw err;
                console.log(result);
                cbModel(result)
            }
        );
        console.log(statement.sql)
    }

};

module.exports = orm;
