import {Router, Request, Response} from 'express';
import todoTeamController from '../../controller/todo.team.controller';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => todoTeamController.getAll(req, res));
router.get('/:id', async (req: Request, res: Response) => todoTeamController.getOne(req, res));
router.post('/', async (req: Request, res: Response) => todoTeamController.post(req, res));
router.post('/find', async (req: Request, res: Response) => todoTeamController.findTeam(req, res));
router.put('/:id', async (req: Request, res: Response) => todoTeamController.put(req, res));
router.delete('/:id', async (req: Request, res: Response) => todoTeamController.delete(req, res));

export default router;