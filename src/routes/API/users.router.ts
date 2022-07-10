import {Router, Request, Response} from 'express';
import userController from '../../controller/users.controller';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => userController.getAll(req, res));
router.put('/:id', async (req: Request, res: Response) => userController.put(req, res));
router.delete('/:id', async (req: Request, res: Response) => userController.delete(req, res));
router.get('/:id', async (req: Request, res: Response) => userController.getOneUserById(req, res));
router.post('/sign-in', async (req: Request, res: Response) => userController.signInUser(req, res));
router.post('/sign-up', async (req: Request, res: Response) => userController.signUpUser(req, res));
router.post('/', async (req: Request, res: Response) => userController.findOneUserBylogin(req, res));

export default router;