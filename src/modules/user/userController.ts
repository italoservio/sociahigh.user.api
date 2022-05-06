import {Router} from 'express';
import {RequestDataPositionEnum} from '../../shared/enums/requestDataPositionEnum';
import {DtoMiddleware} from '../../shared/middlewares/dtoMiddleware';
import {createDtoSchema} from './dtos/request/createDto';
import {AuthUserService} from './services/authService';
import {CreateUserService} from './services/createService';

const router = Router();

router.get(
  '/auth',
  AuthUserService.handler
);

router.post(
  '/',
  DtoMiddleware.validate(createDtoSchema, RequestDataPositionEnum.BODY),
  CreateUserService.handler
);

export default router;
