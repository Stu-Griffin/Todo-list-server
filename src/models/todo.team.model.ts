import { Schema, model } from 'mongoose';
import ITodoTeam from '../types/todo.team.type';

const TodoTeamSchema = new Schema({
    name: { type: String, required: true },
    members: { type: [String], required: true },
});

const TodoTeamModel = model<ITodoTeam>('TodosTeam', TodoTeamSchema);

export default TodoTeamModel;