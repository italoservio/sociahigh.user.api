
import {Request, Response} from 'express';
import {USER_DB_URI} from '../../../config/constants';
import {Database} from '../../../config/database';
import {CryptoHelper} from '../../../shared/helpers/cryptoHelper';
import {ErrorHelper} from '../../../shared/helpers/errorHelper';
import {User} from '../collection/userModel';

export class CreateUserService {
  static async handler(req: Request, res: Response) {
    try {
      const db = new Database(USER_DB_URI!);
      await db.connect();
      const user = new User({
        ...req.body,
        password: CryptoHelper.encryptString(
          req.body.password,
          process.env.PASS_SECRET!
        )
      });
      await user.save();
      await db.disconnect();
      res.status(201).send();
    } catch (err) {
      console.log(err);
      
      ErrorHelper.badGateway('Failed to create user', res);
    }
  }
}
