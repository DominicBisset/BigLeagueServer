"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bookshelf_1 = require("../DB/bookshelf");
console.log("Reading the character model");
var Character = (function (_super) {
    __extends(Character, _super);
    function Character() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Character.prototype, "tableName", {
        get: function () {
            return "Character";
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}(bookshelf_1.db.Model));
exports.Character = Character;
