import {db} from "../DB/bookshelf";
import GBGameModels from "gb-game-models";

export class Character extends db.Model<Character>{
    get tableName() {
        return "Character";
    }
}