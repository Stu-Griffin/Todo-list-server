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
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
class UserServices {
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.default.find();
            return result;
        });
    }
    findOneUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.default.findOne({ _id: id });
            return result;
        });
    }
    signInUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { login, password } = user;
            const result = yield user_model_1.default.findOne({ login: login });
            if (!result) {
                return ({
                    status: 404,
                    message: 'User not found'
                });
            }
            const isPassValid = bcrypt_1.default.compareSync(password, result.password);
            if (!isPassValid) {
                return ({
                    status: 400,
                    message: 'Invalid password'
                });
            }
            return (result["_id"]);
        });
    }
    signUpUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { login, password } = user;
            const result = yield user_model_1.default.findOne({ login: login });
            if (result) {
                return ({
                    status: 404,
                    message: `User with login: ${login} allready existed`
                });
            }
            const hashPassword = yield bcrypt_1.default.hash(password, 5);
            yield user_model_1.default.create({
                login: login,
                password: hashPassword
            });
            return ({
                status: 200,
                message: 'User was created'
            });
        });
    }
    changeUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.default.updateOne({ _id: id }, user);
            return result;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.default.deleteOne({ _id: id });
            return result;
        });
    }
}
exports.default = UserServices;
