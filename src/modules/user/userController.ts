import {Router} from 'express';
import {AuthUserService} from './services/authService';
import {CreateUserService} from './services/createService';

const router = Router();
router.get('/auth', AuthUserService.handler);
router.get('', CreateUserService.handler);

export default router;
