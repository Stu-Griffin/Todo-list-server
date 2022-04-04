import { Schema, model } from 'mongoose';
import ITeam from '../types/team.type';

const TeamSchema = new Schema({
    name: { type: String, required: true },
    members: { type: [String], required: true },
});

const TeamModel = model<ITeam>('TodosTeam', TeamSchema);

export default TeamModel;