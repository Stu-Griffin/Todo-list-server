"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TodoSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    status: { type: Boolean, default: false },
});
const TodoModel = (0, mongoose_1.model)('Todos', TodoSchema);
exports.default = TodoModel;
