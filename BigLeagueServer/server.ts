import GBGameModels from 'gb-game-models';
import {Character} from "./Scripts/Models/Character";
import {knex} from "./Scripts/DB/knex";
import {modelsFolder, tableNames} from "./config";
let express = require('express');

let app = express();
let router = express.Router();

app.get('/', function (req, res) {
    return knex(tableNames.character).insert({ name: "Smoke" }).then(function (obj) {
        return knex(tableNames.character).select().then(function (chars) {
            res.json(chars);
        });
    });
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use(function (req, res, next) {
    console.log('Time:', Date.now(), 'Req:', req);
    next();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});