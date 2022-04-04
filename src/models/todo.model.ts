import ITodo from '../types/todo.type';
import { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true },
    status: { type: Boolean, default: false },
});

const TodoModel = model<ITodo>('Todos', TodoSchema);

export default TodoModel;