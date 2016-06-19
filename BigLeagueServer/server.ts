import GBGameModels from 'gb-game-models';
import {Character} from "./Scripts/Models/Character";
import {knex, characterTableName} from "./Scripts/DB/knex";
import http = require('http');
var port = process.env.port || 1337;

http.createServer(function (req, res) {
    knex(characterTableName).select().then(function (characters) {
        let smokeChar: GBGameModels.Character = {
            name: 'Mercury'
        };
        var c = new Character(smokeChar);
        console.log(c);
        c.save().then(function (obj) {
            console.log("save response:", obj);
        })
            .error(function (err) {
                console.log("save error:", err)
            });

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let smoke: GBGameModels.Player = {
            id: 1,
            character: smokeChar,
            movJog: 4,
            movRun: 6,
            TAC: 4,
            kickDice: 4,
            kickDistance: 6,
            def: 4,
            arm: 1,
            infGenerated: 4,
            infMax: 6,
            health: 16,
            icySpongeLevels: [6, 12],
            playbook: [],
            plays: [],
            playsFor: [],
            tags: [],
            validFor: [],
            baseSize: 30,
            meleeZone: 1
        }
        res.end(JSON.stringify(characters));
    })
}).listen(port);