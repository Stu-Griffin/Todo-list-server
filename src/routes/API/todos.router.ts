import {Router, Request, Response} from 'express';
import todoController from '../../controller/todos.controller';

const router: Router = Router();

router.get('/all/', async (req: Request, res: Response) => todoController.getAll(req, res));
router.get('/:id', async (req: Request, res: Response) => todoController.getAllTodosById(req, res));
router.get('/one/:id', async (req: Request, res: Response) => todoController.getOneTodoByname(req, res));
router.post('/', async (req: Request, res: Response) => todoController.post(req, res));
router.put('/:id', async (req: Request, res: Response) => todoController.put(req, res));
router.delete('/:id', async (req: Request, res: Response) => todoController.delete(req, res));

export default router;