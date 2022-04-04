import ITodoTeam from '../types/todo.team.type';
import TodoTeamSchema from '../models/todo.team.model';

class TodoTeamServices {
    async findAllTodosTeams() {
        const result = await TodoTeamSchema.find();
        return result;
    }
    async findTodosTeam(id: string) {
        const result = await TodoTeamSchema.find({members: id});
        return result;
    }
    async createTodosTeam(todoTeam: ITodoTeam) {
        const result = await TodoTeamSchema.create(todoTeam);
        return result;
    }
    async findTodosTeamByName(name: string) {
        const result = await TodoTeamSchema.findOne({name: name});
        return result;
    }
    async changeTodosTeam(id: string, todoTeam: ITodoTeam) {
        const result = await TodoTeamSchema.updateOne({ _id: id }, todoTeam);
        return result;
    }
    async deleteTodosTeam(id: string) {
        const result = await TodoTeamSchema.deleteOne({_id: id});
        return result;
    }
}

export default TodoTeamServices;