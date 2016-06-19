
let path = require("path");
export let dbFile = path.join(__dirname, "app.db");
export let dbConfig = {
    client: 'sqlite3',
    connection: {
        filename: './dev.sqlite3'
    }
};