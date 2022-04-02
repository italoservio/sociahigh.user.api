import {Router} from 'express';
import {CreateUserService} from './services/create.service';

const router = Router();
router.get('', CreateUserService.create);

export default router;
