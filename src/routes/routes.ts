import { Application } from 'express';
import todosRouter from './API/todos.router';
import usersRouter from './API/users.router';
import todoTeamRouter from './API/team.router';

class AppRouter {
    constructor(private app: Application) {}
    init() {
        this.app.get('/', (_req, res) => {
            res.send('API Running');
        });
        this.app.use('/api/todos', todosRouter);
        this.app.use('/api/users', usersRouter);
        this.app.use('/api/team', todoTeamRouter);
    }
}

export default AppRouter;