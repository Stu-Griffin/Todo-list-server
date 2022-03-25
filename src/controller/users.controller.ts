import { Response, Request } from "express";
import UserServices from "../services/users.service";
import tryCatchMiddleware from "../middlewares/try.catch.middleware";

export class UserController {
    constructor(private userService: UserServices) {}
    async getAll(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.findAllUsers());
    }
    async getOne(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.findOneUser(req.params.id));
    }
    async put(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.changeUser(req.params.id, {
            login: req.body.login,
            password: req.body.password,
            todosArr: req.body.todosArr
        }));
    }
    async signIn(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.signInUser({
            login: req.body.login,
            password: req.body.password
        }));
    }
    async signUp(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.signUpUser({
            login: req.body.login,
            password: req.body.password
        }));
    }
    async delete(req: Request, res: Response) {
        tryCatchMiddleware(req, res, this.userService.deleteUser(req.params.id));
    }
}

const userController = new UserController(new UserServices());

export default userController;