import { Response, Request } from "express";
import TeamServices from "../services/team.service";
import tryCatchMiddleware from "../middlewares/try.catch.middleware";

export class TeamController {
    constructor(private todoTeamService: TeamServices) {}
    async getAll(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoTeamService.findAllTeams());
    }
    async getOneByMembers(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoTeamService.findTeamsbyMembers(req.params.id));
    }
    async findTeamByName(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoTeamService.findOneTeamByName(req.body.name));
    }
    async put(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoTeamService.changeOneTeam(req.params.id, {
            name: req.body.name,
            members: req.body.members
        }));
    }
    async post(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoTeamService.createOneTeam({
            name: req.body.name,
            members: req.body.members
        }));
    }
    async delete(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.todoTeamService.deleteOneTeam(req.params.id));
    }
}

const teamController = new TeamController(new TeamServices());

export default teamController;