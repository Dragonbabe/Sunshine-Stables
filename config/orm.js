'use strict';

const connection = require('./connection/connection.js');

function printQuestionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; ++i){
        arr.push('?');
    }
    return arr.toString();
}

const orm = {
    selectAll: function (tableName, cb) {
        let queryString = `SELECT   * FROM ${tableName}`;
        connection.query(queryString, (err, data) => {
            if (err) {
                throw err;
            }  
            cb(data);      
        });
    },
    insertOne: function(tableName, cols, vals, cb){
        let queryString = `INSERT INTO ${tableName}`;

        queryString +='(';
        queryString += cols.toString();
        queryString += ')';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ')';

        console.log(queryString);
    }
}