import ITeam from '../types/team.type';
import TeamSchema from '../models/team.model';

class TeamServices {
    async findAllTeams() {
        const result = await TeamSchema.find();
        return result;
    }
    async findTeamsbyMembers(id: string) {
        const result = await TeamSchema.find({members: id});
        return result;
    }
    async findOneTeamByName(name: string) {
        const result = await TeamSchema.findOne({name: name});
        return result;
    }
    async findOneTeamById(id: string) {
        const result = await TeamSchema.findOne({_id: id});
        return result;
    }
    async changeOneTeam(id: string, team: ITeam) {
        const result = await TeamSchema.updateOne({ _id: id }, team);
        return result;
    }
    async createOneTeam(team: ITeam) {
        const result = await TeamSchema.create(team);
        return result;
    }
    async deleteOneTeam(id: string) {
        const result = await TeamSchema.deleteOne({_id: id});
        return result;
    }
}

export default TeamServices;