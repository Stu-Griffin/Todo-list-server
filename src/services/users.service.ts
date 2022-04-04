import bcrypt from 'bcrypt';
import UserModel from '../models/user.model';
import { IUserInf, IUserChange } from '../types/user.type';

class UserServices {
    async findAll() {
        const result = await UserModel.find();
        return result
    }
    async findOneUserById(id: string) {
        const result = await UserModel.findOne({_id: id});
        return result
    }
    async findOneUserBylogin(login: string) {
        const result = await UserModel.findOne({login: login});
        return result
    }
    async signInUser(user: IUserInf) {
        const {login, password} = user;
        const result = await UserModel.findOne({login: login});
        if (!result) {
            return({
                status: 404,
                message: 'User not found'
            });
        }
        const isPassValid = bcrypt.compareSync(password, result.password);
        if (!isPassValid) {
            return({
                status: 400,
                message: 'Invalid password'
            });
        }
        return(result["_id"]);
    }
    async signUpUser(user: IUserInf) {
        const {login, password} = user;
        const result = await UserModel.findOne({login: login});
        if (result) {
            return({
                status: 404,
                message: `User with login: ${login} allready existed`
            });
        }
        const hashPassword = await bcrypt.hash(password, 5);
        await UserModel.create({
            login: login,
            password: hashPassword
        });
        return({
            status: 200,
            message: 'User was created'
        });
    }
    async change(id: string, user: IUserChange) {
        const result = await UserModel.updateOne({ _id: id }, user);
        return result
    }
    async delete(id: string) {
        const result = await UserModel.deleteOne({_id: id});
        return result
    }
}

export default UserServices