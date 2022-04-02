import {Request, Response} from 'express';

export class CreateUserService {
  static create(req: Request, res: Response) {
    res.json({
      foo: 'bar'
    });
  }
}
