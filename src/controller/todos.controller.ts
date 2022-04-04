import { Response, Request } from "express";
import TodoServices from "../services/todos.service";
import tryCatchMiddleware from "../middlewares/try.catch.middleware";

export class TodoController {
    constructor(private todoService: TodoServices) {}
    async getAll(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoService.findAllTodos());
    }
    async getAllUsersTodos(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoService.findAllUsersTodos(req.params.id));
    }
    async getOne(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoService.findOneTodo(req.params.id));
    }
    async put(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoService.changeTodo(req.params.id, {
            title: req.body.title,
            text: req.body.text,
            status: req.body.status
        }));
    }
    async post(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoService.createTodo({
            title: req.body.title,
            text: req.body.text,
            author: req.body.author
        }));
    }
    async delete(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoService.deleteTodo(req.params.id));
    }
}

const todoController = new TodoController(new TodoServices());

export default todoController;