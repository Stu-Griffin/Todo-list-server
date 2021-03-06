import { Response, Request } from "express";
import UserServices from "../services/users.service";
import tryCatchMiddleware from "../middlewares/try.catch.middleware";

export class UserController {
    constructor(private userService: UserServices) {}
    async getAll(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.findAll());
    }
    async getOneUserById(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.findOneUserById(req.params.id));
    }
    async findOneUserBylogin(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.findOneUserBylogin(req.body.login));
    }
    async put(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.change(req.params.id, {
            login: req.body.login,
            password: req.body.password,
            todosArr: req.body.todosArr
        }));
    }
    async signInUser(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.signInUser({
            login: req.body.login,
            password: req.body.password
        }));
    }
    async signUpUser(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.signUpUser({
            login: req.body.login,
            password: req.body.password
        }));
    }
    async delete(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.delete(req.params.id));
    }
}

const userController = new UserController(new UserServices());

export default userController;