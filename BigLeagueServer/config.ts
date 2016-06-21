
let path = require("path");
export let dbFile = path.join(__dirname, "BigLeague.db");
export let modelsFolder = path.join(__dirname, "Scripts","Models");
export let dbConfig = {
    client: 'sqlite3',
    connection: {
        filename: dbFile
    }
};
export let tableNames = {
    character: "Character"
}