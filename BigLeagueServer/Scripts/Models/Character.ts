import {db} from "../DB/bookshelf";
import GBGameModels from "gb-game-models";

console.log("Reading the character model");
export class Character extends db.Model<Character>{
    get tableName() {
        return "Character";
    }
}
