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
exports.UserController = void 0;
const users_service_1 = __importDefault(require("../services/users.service"));
const try_catch_middleware_1 = __importDefault(require("../middlewares/try.catch.middleware"));
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, try_catch_middleware_1.default)(req, res, this.userService.findAllUsers());
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, try_catch_middleware_1.default)(req, res, this.userService.findOneUser(req.params.id));
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, try_catch_middleware_1.default)(req, res, this.userService.changeUser(req.params.id, {
                login: req.body.login,
                password: req.body.password,
                todosArr: req.body.todosArr
            }));
        });
    }
    signIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, try_catch_middleware_1.default)(req, res, this.userService.signInUser({
                login: req.body.login,
                password: req.body.password
            }));
        });
    }
    signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, try_catch_middleware_1.default)(req, res, this.userService.signUpUser({
                login: req.body.login,
                password: req.body.password
            }));
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, try_catch_middleware_1.default)(req, res, this.userService.deleteUser(req.params.id));
        });
    }
}
exports.UserController = UserController;
const userController = new UserController(new users_service_1.default());
exports.default = userController;
