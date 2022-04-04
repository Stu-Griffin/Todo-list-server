import { Response, Request } from "express";
import TodoServices from "../services/todos.service";
import tryCatchMiddleware from "../middlewares/try.catch.middleware";

export class TodoController {
    constructor(private todoService: TodoServices) {}
    async getAll(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoService.findAllTodos());
    }
    async getAllTodosById(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoService.findAllTodosByAuthor(req.params.id));
    }
    async getOneTodoByname(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoService.findOneTodoById(req.params.id));
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