"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = __importDefault(require("../models/todo.model"));
class TodoServices {
    findAllTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield todo_model_1.default.find();
            return result;
        });
    }
    findAllUsersTodos(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield todo_model_1.default.find({ author: id });
            return result;
        });
    }
    findOneTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield todo_model_1.default.findOne({ _id: id });
            return result;
        });
    }
    createTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield todo_model_1.default.create(todo);
            return result;
        });
    }
    changeTodo(id, todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield todo_model_1.default.updateOne({ _id: id }, todo);
            return result;
        });
    }
    deleteTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield todo_model_1.default.deleteOne({ _id: id });
            return result;
        });
    }
}
exports.default = TodoServices;
