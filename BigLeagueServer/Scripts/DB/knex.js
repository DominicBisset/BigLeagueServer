"use strict";
var fs = require("fs");
var knexLib = require("knex");
var config_1 = require("../config");
exports.knex = knexLib(config_1.dbConfig);
exports.characterTableName = "Character";
console.log("creating table");
exports.knex.schema.createTableIfNotExists(exports.characterTableName, function (table) {
    console.log("created table: ", table);
    table.increments("id");
    table.string("name");
})
    .then(function (obj) {
    console.log("after create:", obj);
})
    .catch(function (err) { console.log("while creating table", err); });
//# sourceMappingURL=knex.js.map