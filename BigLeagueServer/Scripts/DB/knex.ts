
let fs = require("fs");

import * as knexLib from "knex";
import {dbConfig, dbFile} from "../config"
import GBGameModels from "gb-game-models";

export var knex = knexLib(dbConfig);
export var characterTableName: string = "Character"; 
console.log("creating table");
knex.schema.createTableIfNotExists(characterTableName, function (table) {
    console.log("created table: ", table);
    table.increments("id");
    table.string("name");
})
    .then(function (obj) {
        console.log("after create:", obj);
    })

    .catch(function (err) { console.log("while creating table", err) });

