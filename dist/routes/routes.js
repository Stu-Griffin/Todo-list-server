"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todos_router_1 = __importDefault(require("./API/todos.router"));
const users_router_1 = __importDefault(require("./API/users.router"));
class AppRouter {
    constructor(app) {
        this.app = app;
    }
    init() {
        this.app.get('/', (_req, res) => {
            res.send('API Running');
        });
        this.app.use('/api/todos', todos_router_1.default);
        this.app.use('/api/users', users_router_1.default);
    }
}
exports.default = AppRouter;
