import {Router, Request, Response} from 'express';
import teamController from '../../controller/team.controller';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => teamController.getAll(req, res));
router.get('/:id', async (req: Request, res: Response) => teamController.getOneByMembers(req, res));
router.post('/find', async (req: Request, res: Response) => teamController.findTeamByName(req, res));
router.post('/find/:id', async (req: Request, res: Response) => teamController.findTeamById(req, res));
router.post('/', async (req: Request, res: Response) => teamController.post(req, res));
router.put('/:id', async (req: Request, res: Response) => teamController.put(req, res));
router.delete('/:id', async (req: Request, res: Response) => teamController.delete(req, res));

export default router;