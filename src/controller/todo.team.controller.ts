import { Response, Request } from "express";
import TodoTeamServices from "../services/todo.team.service";
import tryCatchMiddleware from "../middlewares/try.catch.middleware";

export class TodoTeamController {
    constructor(private todoTeamService: TodoTeamServices) {}
    async getAll(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoTeamService.findAllTodosTeams());
    }
    async getOne(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoTeamService.findTodosTeam(req.params.id));
    }
    async put(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoTeamService.changeTodosTeam(req.params.id, {
            name: req.body.name,
            members: req.body.members
        }));
    }
    async post(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoTeamService.createTodosTeam({
            name: req.body.name,
            members: req.body.members
        }));
    }
    async findTeam(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoTeamService.findTodosTeamByName(req.body.name));
    }
    async delete(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoTeamService.deleteTodosTeam(req.params.id));
    }
}

const todoTeamController = new TodoTeamController(new TodoTeamServices());

export default todoTeamController;