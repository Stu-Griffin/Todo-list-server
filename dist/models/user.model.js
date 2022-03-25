"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    login: { type: String, required: true },
    password: { type: String, required: true },
    todosArr: { type: Array, required: false },
    date: { type: Date, default: Date.now },
});
const UserModel = (0, mongoose_1.model)('Users', UserSchema);
exports.default = UserModel;
