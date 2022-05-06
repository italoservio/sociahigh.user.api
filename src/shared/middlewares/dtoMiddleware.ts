import {NextFunction, Request, Response} from 'express';
import * as yup from 'yup';
import {RequestDataPositionEnum} from '../enums/requestDataPositionEnum';
import {ErrorHelper} from '../helpers/errorHelper';

export class DtoMiddleware {
  static validate(
    schema: yup.SchemaOf<any>,
    requestDataPosition: RequestDataPositionEnum
  ) {
    return async (req: Request, res: Response, next: NextFunction) => {
      schema
        .validate(req[requestDataPosition])
        .then(() => next())
        .catch((error: yup.ValidationError) =>
          ErrorHelper.badRequest(error.message, res)
        );
    };
  }
}
