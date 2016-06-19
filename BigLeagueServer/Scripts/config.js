"use strict";
var path = require("path");
exports.dbFile = path.join(__dirname, "app.db");
exports.dbConfig = {
    client: 'sqlite3',
    connection: {
        filename: './dev.sqlite3'
    }
};
//# sourceMappingURL=config.js.map