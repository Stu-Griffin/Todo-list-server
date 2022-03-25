import { Application } from 'express';
import todosRouter from './API/todos.router';
import usersRouter from './API/users.router';

class AppRouter {
    constructor(private app: Application) {}
    init() {
        this.app.get('/', (_req, res) => {
            res.send('API Running');
        });
        this.app.use('/api/todos', todosRouter);
        this.app.use('/api/users', usersRouter);
    }
}

export default AppRouter;