'use strict';const connection=require("./connection/connection.js");function printQuestionMarks(a){const b=[];for(let c=0;c<a;++c)b.push("?");return b.toString()}const orm={selectAll:function(a,b){connection.query(`SELECT   * FROM ${a}`,(a,c)=>{if(a)throw a;b(c)})},insertOne:function(a,b,c){let d=`INSERT INTO ${a}`;d+="(",d+=b.toString(),d+=")",d+="VALUES (",d+=printQuestionMarks(c.length),d+=")",console.log(d)}};
//minified code of my orm file