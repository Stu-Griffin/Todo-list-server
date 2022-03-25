import { Schema, model } from 'mongoose';
import IUser from '../types/user.type';

const UserSchema = new Schema({
    login: { type: String, required: true },
    password: { type: String, required: true },
    todosArr: { type: Array, required: false },
    date: { type: Date, default: Date.now },
});

const UserModel = model<IUser>('Users', UserSchema);

export default UserModel;