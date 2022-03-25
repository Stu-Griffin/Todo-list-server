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
exports.TodoController = void 0;
const todos_service_1 = __importDefault(require("../services/todos.service"));
const try_catch_middleware_1 = __importDefault(require("../middlewares/try.catch.middleware"));
class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, try_catch_middleware_1.default)(req, res, this.todoService.findAllTodos());
        });
    }
    getAllUsersTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, try_catch_middleware_1.default)(req, res, this.todoService.findAllUsersTodos(req.params.id));
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, try_catch_middleware_1.default)(req, res, this.todoService.findOneTodo(req.params.id));
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, try_catch_middleware_1.default)(req, res, this.todoService.changeTodo(req.params.id, {
                title: req.body.title,
                text: req.body.text,
                status: req.body.status
            }));
        });
    }
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, try_catch_middleware_1.default)(req, res, this.todoService.createTodo({
                title: req.body.title,
                text: req.body.text,
                author: req.body.author,
                status: req.body.status
            }));
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, try_catch_middleware_1.default)(req, res, this.todoService.deleteTodo(req.params.id));
        });
    }
}
exports.TodoController = TodoController;
const todoController = new TodoController(new todos_service_1.default());
exports.default = todoController;
