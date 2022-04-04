import ITodo, { ITodoChange } from '../types/todo.type';
import TodoModel from '../models/todo.model';

class TodoServices {
    async findAllTodos() {
        const result = await TodoModel.find();
        return result;
    }
    async findAllUsersTodos(id: string) {
        const result = await TodoModel.find({author: id});
        return result;
    }
    async findOneTodo(id: string) {
        const result = await TodoModel.findOne({_id: id});
        return result;
    }
    async createTodo(todo: any) {
        const result = await TodoModel.create(todo);
        return result;
    }
    async changeTodo(id: string, todo: ITodoChange) {
        const result = await TodoModel.updateOne({ _id: id }, todo);
        return result;
    }
    async deleteTodo(id: string) {
        const result = await TodoModel.deleteOne({_id: id});
        return result;
    }
}

export default TodoServices;