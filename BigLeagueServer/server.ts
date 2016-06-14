import GBGameModels from 'gb-game-models';
import http = require('http');
var port = process.env.port || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let smokeChar: GBGameModels.Character = {
        id: 1,
        name: 'Smoke'
    };
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
        validFor: []

    }
    res.end(JSON.stringify(smoke));
}).listen(port);