var config = require("../config.js");
var characterTableName = config.tableNames.character;

exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists(characterTableName, function (table) {
        console.log("created table: ", table);
        table.increments("id");
        table.string("name");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists(characterTableName);
};
